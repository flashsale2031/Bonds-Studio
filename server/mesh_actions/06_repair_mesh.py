import trimesh

def run(mesh: trimesh.Trimesh) -> trimesh.Trimesh:
    mesh.remove_duplicate_faces(); mesh.remove_degenerate_faces(); mesh.remove_unreferenced_vertices()
    trimesh.repair.fill_holes(mesh); mesh.fix_normals()
    return mesh
