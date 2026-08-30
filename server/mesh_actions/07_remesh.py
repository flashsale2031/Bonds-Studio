import trimesh

def run(mesh: trimesh.Trimesh, target_faces: int = 50000) -> trimesh.Trimesh:
    # Use quadratic decimation when available; otherwise preserve the validated mesh.
    if len(mesh.faces) > target_faces and hasattr(mesh, "simplify_quadric_decimation"):
        try: return mesh.simplify_quadric_decimation(face_count=target_faces)
        except Exception: pass
    return mesh
