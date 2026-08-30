import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

type Engine = "sf3d" | "triposr";
export type EngineResult = {engine:Engine;glbPath?:string;objPath?:string;status:"complete"|"failed";logs:string[]};

const allowed=(process.env.BONDS_3D_ENGINES||"sf3d,triposr").split(",").map(x=>x.trim()).filter(Boolean) as Engine[];

function run(cmd:string,args:string[],cwd:string,env:NodeJS.ProcessEnv){return new Promise<{code:number;logs:string[]}>(resolve=>{const p=spawn(cmd,args,{cwd,env});const logs:string[]=[];p.stdout.on("data",d=>logs.push(String(d)));p.stderr.on("data",d=>logs.push(String(d)));p.on("close",code=>resolve({code:code??1,logs}));});}

export async function runOpenSource3D(input:{imagePath:string;outputDir:string;engine?:Engine;textureResolution?:number}):Promise<EngineResult>{
 const engine=input.engine&&allowed.includes(input.engine)?input.engine:allowed[0];
 await fs.mkdir(input.outputDir,{recursive:true});
 const logs:string[]=[];
 const python=process.env.PYTHON_BIN||"python3";
 let args:string[];
 if(engine==="sf3d") args=["-m","sf3d.run",input.imagePath,"--output-dir",input.outputDir];
 else args=[path.resolve(process.env.TRIPOSR_RUN||"vendor/TripoSR/run.py"),input.imagePath,"--output-dir",input.outputDir,...(input.textureResolution?["--bake-texture","--texture-resolution",String(input.textureResolution)]:[])];
 const result=await run(python,args,process.cwd(),process.env); logs.push(...result.logs);
 if(result.code!==0) return {engine,status:"failed",logs};
 const files=await fs.readdir(input.outputDir); const glb=files.find(f=>f.toLowerCase().endsWith(".glb")); const obj=files.find(f=>f.toLowerCase().endsWith(".obj"));
 return {engine,status:glb||obj?"complete":"failed",glbPath:glb?path.join(input.outputDir,glb):undefined,objPath:obj?path.join(input.outputDir,obj):undefined,logs};
}
