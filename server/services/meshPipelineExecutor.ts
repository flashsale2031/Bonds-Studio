import {executeMeshAction,type MeshActionId,type MeshActionContext,type MeshActionResult} from "./meshActionRegistry";

export type PipelineStep={id:MeshActionId;status:"queued"|"running"|"complete"|"failed";result?:MeshActionResult};
export type PipelineRun={runId:string;status:"running"|"complete"|"failed";steps:PipelineStep[]};

export async function executeMeshPipeline(ctx:MeshActionContext,actions:MeshActionId[]):Promise<PipelineRun>{
 const run:PipelineRun={runId:ctx.runId,status:"running",steps:actions.map(id=>({id,status:"queued"}))};
 for(const step of run.steps){
  step.status="running";
  try{step.result=await executeMeshAction(step.id,ctx);step.status=step.result.ok?"complete":"failed";if(step.status==="failed"){run.status="failed";return run;}}
  catch(error){step.status="failed";step.result={ok:false,artifacts:[],metrics:{},error:error instanceof Error?error.message:"Unknown mesh action error"};run.status="failed";return run;}
 }
 run.status="complete";return run;
}
