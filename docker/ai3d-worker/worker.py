import os, subprocess, tempfile
from pathlib import Path
from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import FileResponse

app=FastAPI(title="Bonds Studio AI 3D Worker")
ENGINE=os.getenv("BONDS_3D_ENGINE","triposr")
RUNNER=os.getenv("TRIPOSR_RUN","/opt/TripoSR/run.py")

@app.get("/health")
def health(): return {"status":"ok","engine":ENGINE}

@app.post("/generate")
async def generate(image:UploadFile=File(...), texture_resolution:int=Form(2048)):
 with tempfile.TemporaryDirectory() as td:
  root=Path(td); src=root/(image.filename or "input.png"); src.write_bytes(await image.read()); out=root/"output"; out.mkdir()
  if ENGINE=="triposr":
   cmd=["python3",RUNNER,str(src),"--output-dir",str(out),"--bake-texture","--texture-resolution",str(texture_resolution)]
  elif ENGINE=="sf3d":
   cmd=["python3","-m","sf3d.run",str(src),"--output-dir",str(out)]
  else: raise HTTPException(400,"Unsupported engine")
  p=subprocess.run(cmd,capture_output=True,text=True)
  if p.returncode: raise HTTPException(502,p.stderr[-4000:])
  assets=list(out.glob("*.glb"))+list(out.glob("*.obj"))
  if not assets: raise HTTPException(502,"Engine completed without a mesh asset")
  return FileResponse(str(assets[0]),filename=assets[0].name)
