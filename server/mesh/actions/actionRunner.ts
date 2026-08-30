import { ACTIONS, type ActionRecord, type MeshRunManifest } from "./actionManifest";

type Handler=(ctx:{runId:string;objectName:string;action:ActionRecord;workspace:string})=>Promise<ActionRecord>;
const handlers=new Map<string,Handler>();
export function registerAction(id:string,handler:Handler){handlers.set(id,handler);}
export async function runAction(manifest:MeshRunManifest,actionId:string,workspace:string){
 if(!ACTIONS.includes(actionId as any)) throw new Error(`Unknown mesh action: ${actionId}`);
 const index=manifest.actions.findIndex(a=>a.id===actionId); if(index<0) throw new Error(`Action not present in manifest: ${actionId}`);
 const action={...manifest.actions[index],status:"running" as const,startedAt:new Date().toISOString()}; manifest.actions[index]=action;
 const handler=handlers.get(actionId); if(!handler){manifest.actions[index]={...action,status:"failed",error:"Action handler is not registered",completedAt:new Date().toISOString()};throw new Error(manifest.actions[index].error);}
 try{const done=await handler({runId:manifest.runId,objectName:manifest.objectName,action,workspace});manifest.actions[index]={...done,status:"complete",completedAt:done.completedAt??new Date().toISOString()};return manifest;}catch(e){manifest.actions[index]={...action,status:"failed",error:e instanceof Error?e.message:String(e),completedAt:new Date().toISOString()};throw e;}
}
export async function runAllActions(manifest:MeshRunManifest,workspace:string){for(const action of manifest.actions){if(action.status==="complete"||action.status==="skipped")continue;await runAction(manifest,action.id,workspace);}return manifest;}
