from collections import deque
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

source = Path('/home/ubuntu/Bonds-Studio/assets/bonds-studio-screen-logo-clean.png')
target = Path('/home/ubuntu/Bonds-Studio/assets/bonds-studio-screen-logo-transparent.png')
image = Image.open(source).convert('RGBA')
rgba = np.array(image)
rgb = rgba[:, :, :3].astype(np.int16)
# The generated checkerboard is gray/white and highly periodic. Restrict the
# foreground seed to nearly pure-white pixels, then retain only large connected
# logo regions so isolated checkerboard squares disappear.
seed = (rgb.min(axis=2) > 246) & ((rgb.max(axis=2) - rgb.min(axis=2)) < 10)
h, w = seed.shape
seen = np.zeros_like(seed, dtype=bool)
keep = np.zeros_like(seed, dtype=bool)
for y in range(h):
    for x in range(w):
        if not seed[y, x] or seen[y, x]:
            continue
        queue = deque([(y, x)])
        seen[y, x] = True
        component = []
        while queue:
            cy, cx = queue.popleft()
            component.append((cy, cx))
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    if dy == 0 and dx == 0:
                        continue
                    ny, nx = cy + dy, cx + dx
                    if 0 <= ny < h and 0 <= nx < w and seed[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((ny, nx))
        if len(component) > 10000:
            ys, xs = zip(*component)
            keep[np.array(ys), np.array(xs)] = True
# Slightly dilate the retained silhouette to include antialiased edges, then
# use luminance as a soft alpha only inside the preserved logo region.
mask = Image.fromarray((keep * 255).astype('uint8')).filter(ImageFilter.MaxFilter(9))
mask_array = np.array(mask).astype(np.float32) / 255.0
luminance = rgb.mean(axis=2).clip(0, 255) / 255.0
alpha = (mask_array * np.clip((luminance - .38) / .42, 0, 1) * 255).astype('uint8')
out = np.zeros_like(rgba)
out[:, :, :3] = 255
out[:, :, 3] = alpha
Image.fromarray(out, 'RGBA').save(target, optimize=True)
print(target)
