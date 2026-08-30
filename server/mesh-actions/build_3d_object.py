"""Final 3D object builder: each modeling operation is an independent action."""
from pathlib import Path
from . import _load_actions


def build_3d_object(source: str, workdir: str, name: str, metrics: dict) -> dict:
    root = Path(workdir); root.mkdir(parents=True, exist_ok=True)
    prepared = _load_actions("01_prepare_input").prepare_input(source, str(root / "source.png"))
    mesh = _load_actions("02_reconstruct_mesh").reconstruct(prepared, str(root / "reconstruction"))
    validation = _load_actions("03_validate_mesh").validate(mesh)
    if not validation["watertight"]:
        raise RuntimeError("Generated mesh failed watertight validation")
    normalized = _load_actions("04_normalize_metrics").normalize_metrics(mesh, float(metrics["width"]), float(metrics["height"]), float(metrics["depth"]))
    final = _load_actions("05_export_glb").export_glb(normalized, str(root / f"{name}.glb"))
    return {"name": name, "asset": final, "validation": validation, "metrics": metrics}
