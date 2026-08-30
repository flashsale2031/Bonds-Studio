import trimesh

def run(mesh: trimesh.Trimesh) -> trimesh.Trimesh:
    mesh.rezero(); mesh.remove_infinite_values(); mesh.fix_normals()
    return mesh
