import { MESH_ACTIONS, createManifest, type MeshAction } from "../../client/src/lib/mesh/actionManifest";
import fs from "node:fs/promises"; import path from "node:path";
export type ActionHandler=(ctx:{runDir:string;action:MeshAction;artifacts:string[]})=>Promise<{artifacts?:string[];metrics?:Record<string,number|string|boolean>}>;
export async function runMeshPipeline(runId:string, handlers:Record<string,ActionHandler>, root="./runs"){
 const runDir=path.join(root,runId); await fs.mkdir(path.join(runDir,"artifacts"),{recursive:true}); const manifest=createManifest(runId); manifest.actions[0].status="running";
 for(let i=0;i<manifest.actions.length;i++){const action=manifest.actions[i]; action.status="running"; action.startedAt=new Date().toISOString(); try{const handler=handlers[action.id]; if(!handler) throw new Error(`No handler registered for ${action.id}`); const result=await handler({runDir,action,artifacts:manifest.artifacts}); result.artifacts?.forEach(a=>{if(!manifest.artifacts.includes(a))manifest.artifacts.push(a)}); action.metrics=result.metrics; action.outputs=result.artifacts??action.outputs; action.status="complete"; action.completedAt=new Date().toISOString();}catch(e){action.status="failed";action.error=e instanceof Error?e.message:String(e);action.completedAt=new Date().toISOString(); break;}}
 await fs.writeFile(path.join(runDir,"manifest.json"),JSON.stringify(manifest,null,2)); return manifest;
}
export { MESH_ACTIONS };
