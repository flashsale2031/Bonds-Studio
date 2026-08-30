import trimesh

def run(mesh: trimesh.Trimesh):
    return mesh.convex_hull
