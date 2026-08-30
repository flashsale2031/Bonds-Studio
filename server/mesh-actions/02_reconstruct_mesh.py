"""Action 02: invoke TripoSR as the open-source reconstruction engine."""
import subprocess
from pathlib import Path

def reconstruct(source: str, output_dir: str, texture_resolution: int = 2048) -> str:
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    subprocess.run(["python", "run.py", source, "--output-dir", output_dir, "--bake-texture", "--texture-resolution", str(texture_resolution)], check=True)
    candidates = list(Path(output_dir).glob("*.obj")) + list(Path(output_dir).glob("*.glb"))
    if not candidates:
        raise RuntimeError("TripoSR did not produce an OBJ or GLB mesh")
    return str(candidates[0])
