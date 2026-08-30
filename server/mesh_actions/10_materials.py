import json
from pathlib import Path

def run(output_dir: str, name: str, texture_paths=None):
    material={"name":name,"workflow":"PBR","textures":texture_paths or [],"channels":["baseColor","roughness","metallic","normal"]}
    Path(output_dir).mkdir(parents=True,exist_ok=True)
    path=Path(output_dir)/"material.json"; path.write_text(json.dumps(material,indent=2))
    return material
