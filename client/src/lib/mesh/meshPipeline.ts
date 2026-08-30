import { reconstructFromMultiView, validateProductionMesh, type ViewEvidence, type ReconstructionMesh } from "./multiviewReconstruction";

export type AIViewResult = ViewEvidence;
export type MeshJob = { id:string; status:"queued"|"analyzing"|"reconstructing"|"texturing"|"complete"|"failed"; views:AIViewResult[]; mesh?:ReconstructionMesh; error?:string };

export function createMeshJob(id:string):MeshJob{return {id,status:"queued",views:[]};}

export function completeMeshJob(job:MeshJob, views:AIViewResult[], dimensions:{width:number;height:number;depth:number}):MeshJob{
 const mesh=reconstructFromMultiView(views,dimensions); const check=validateProductionMesh(mesh);
 return check.valid ? {...job,status:"complete",views,mesh} : {...job,status:"failed",views,error:check.errors.join("; ")};
}

export function serializeMeshForWorker(mesh:ReconstructionMesh){return {vertices:mesh.vertices,indices:mesh.indices,bounds:mesh.bounds,sourceViews:mesh.sourceViews};}
