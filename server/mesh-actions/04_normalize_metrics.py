"""Action 04: scale mesh to requested width/height/depth while preserving origin."""
import trimesh

def normalize_metrics(mesh_path: str, width: float, height: float, depth: float) -> str:
    mesh = trimesh.load(mesh_path, force="mesh")
    if isinstance(mesh, trimesh.Scene): mesh = trimesh.util.concatenate(tuple(mesh.geometry.values()))
    ext = mesh.extents
    factors = [width/max(ext[0],1e-9), depth/max(ext[1],1e-9), height/max(ext[2],1e-9)]
    mesh.apply_scale(min(factors))
    mesh.apply_translation(-mesh.bounds[0])
    mesh.export(mesh_path)
    return mesh_path
