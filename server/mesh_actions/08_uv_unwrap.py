import trimesh

def run(mesh: trimesh.Trimesh):
    # xatlas is optional; TripoSR's texture workflow uses xatlas for UV atlas generation.
    try:
        import xatlas
        vmapping, indices, uvs = xatlas.parametrize(mesh.vertices, mesh.faces)
        return trimesh.Trimesh(vertices=mesh.vertices[vmapping], faces=indices, process=False), uvs
    except Exception:
        return mesh, None
