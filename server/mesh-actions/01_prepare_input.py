"""Action 01: normalize the source image for the 3D pipeline."""
from pathlib import Path
from PIL import Image

def prepare_input(source: str, output: str) -> str:
    image = Image.open(source).convert("RGBA")
    Path(output).parent.mkdir(parents=True, exist_ok=True)
    image.save(output, "PNG")
    return output
