def run(mesh):
    return {"valid":bool(mesh.is_watertight and len(mesh.vertices)>0 and len(mesh.faces)>0),"watertight":bool(mesh.is_watertight),"vertices":int(len(mesh.vertices)),"faces":int(len(mesh.faces)),"bounds":mesh.bounds.tolist()}
