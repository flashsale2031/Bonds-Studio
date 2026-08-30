export type ReconstructionView = "front" | "back" | "left" | "right" | "above" | "beneath";
export type VisionMap = { width:number; height:number; data:Float32Array; format:"depth"|"normal"|"segmentation" };
export type VisionView = { view:ReconstructionView; imageUrl:string; depth?:VisionMap; normal?:VisionMap; segmentation?:VisionMap; confidence?:VisionMap; };
export type VisionJobRequest = { sourceImage:string; views:ReconstructionView[]; prompt?:string; metric:{width:number;height:number;depth:number}; };
export type VisionJobResult = { jobId:string; status:"queued"|"processing"|"complete"|"failed"; views:VisionView[]; error?:string };

const endpoint = "/api/ai/3d/multiview";

export async function createMultiViewVisionJob(request:VisionJobRequest, signal?:AbortSignal):Promise<VisionJobResult>{
 const response=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...request,outputMaps:["depth","normal","segmentation","confidence"]}),signal});
 if(!response.ok) throw new Error(`Multi-view vision service returned ${response.status}`);
 return response.json();
}

export async function pollMultiViewVisionJob(jobId:string, signal?:AbortSignal):Promise<VisionJobResult>{
 const response=await fetch(`${endpoint}/${encodeURIComponent(jobId)}`,{signal});
 if(!response.ok) throw new Error(`Multi-view vision job returned ${response.status}`);
 return response.json();
}

export function isVisionComplete(result:VisionJobResult){return result.status==="complete" && result.views.length>=6 && result.views.every(v=>Boolean(v.imageUrl));}
