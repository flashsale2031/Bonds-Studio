"""Action 03: validate the generated mesh."""
import trimesh

def validate(mesh_path: str) -> dict:
    mesh = trimesh.load(mesh_path, force="mesh")
    if isinstance(mesh, trimesh.Scene):
        mesh = trimesh.util.concatenate(tuple(mesh.geometry.values()))
    return {"watertight": bool(mesh.is_watertight), "vertices": int(len(mesh.vertices)), "faces": int(len(mesh.faces)), "bounds": mesh.bounds.tolist()}
