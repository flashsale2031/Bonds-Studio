"""Action 05: export the final mesh as GLB for the Bonds Studio asset pipeline."""
import trimesh

def export_glb(mesh_path: str, output_path: str) -> str:
    mesh = trimesh.load(mesh_path, force="mesh")
    if isinstance(mesh, trimesh.Scene): mesh = trimesh.util.concatenate(tuple(mesh.geometry.values()))
    mesh.export(output_path, file_type="glb")
    return output_path
