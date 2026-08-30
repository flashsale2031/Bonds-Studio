import importlib
from pathlib import Path

ACTIONS=[
 "01_prepare_input","02_reconstruct_mesh","03_validate_mesh","04_normalize_metrics",
 "06_repair_mesh","07_remesh","08_uv_unwrap","09_normals","10_materials","11_lod","12_collision","13_validate_final","05_export_glb"
]

def run_pipeline(source, output_dir, dimensions, name):
    state={"source":source,"output_dir":str(output_dir),"dimensions":dimensions,"name":name}
    for action in ACTIONS:
        module=importlib.import_module(f"server.mesh_actions.{action}")
        fn=getattr(module,"run")
        if action=="01_prepare_input": state["source"]=fn(state["source"],state["output_dir"])
        elif action=="02_reconstruct_mesh": state["mesh"]=fn(state["source"],state["output_dir"])
        elif action=="03_validate_mesh": state["initial_validation"]=fn(state["mesh"])
        elif action=="04_normalize_metrics": state["mesh"]=fn(state["mesh"],state["dimensions"])
        elif action in ("06_repair_mesh","09_normals"): state["mesh"]=fn(state["mesh"])
        elif action=="07_remesh": state["mesh"]=fn(state["mesh"])
        elif action=="08_uv_unwrap": state["mesh"],state["uvs"]=fn(state["mesh"])
        elif action=="10_materials": state["material"]=fn(state["output_dir"],state["name"])
        elif action=="11_lod": state["lods"]=fn(state["mesh"])
        elif action=="12_collision": state["collision"]=fn(state["mesh"])
        elif action=="13_validate_final": state["final_validation"]=fn(state["mesh"])
        elif action=="05_export_glb": state["asset"]=fn(state["mesh"],state["output_dir"],state["name"])
        if action=="13_validate_final" and not state["final_validation"]["valid"]: raise RuntimeError("Final production mesh validation failed")
    return state
