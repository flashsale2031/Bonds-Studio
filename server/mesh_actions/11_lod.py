import trimesh

def run(mesh: trimesh.Trimesh, levels=(0.5,0.25)):
    outputs={"lod0":mesh}
    for i,ratio in enumerate(levels,1):
        target=max(1000,int(len(mesh.faces)*ratio)); outputs[f"lod{i}"]=mesh
        if len(mesh.faces)>target and hasattr(mesh,"simplify_quadric_decimation"):
            try: outputs[f"lod{i}"]=mesh.simplify_quadric_decimation(face_count=target)
            except Exception: pass
    return outputs
