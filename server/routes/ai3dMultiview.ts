import type { Request, Response } from "express";

const VIEWS = ["front","back","left","right","above","beneath"] as const;
type View = typeof VIEWS[number];

type VisionProvider = { analyze:(input:{image:string;view:View;prompt?:string;metric:{width:number;height:number;depth:number}})=>Promise<{imageUrl:string;depth?:unknown;normal?:unknown;segmentation?:unknown;confidence?:unknown}> };

function getProvider():VisionProvider {
 const provider=(globalThis as any).__BONDS_AI_3D_VISION_PROVIDER as VisionProvider|undefined;
 if(!provider) throw new Error("AI 3D vision provider is not configured");
 return provider;
}

export async function createMultiView3DVision(req:Request,res:Response){
 try {
  const {sourceImage,prompt,metric}=req.body??{};
  if(typeof sourceImage!=="string"||!sourceImage) return res.status(400).json({error:"sourceImage is required"});
  if(!metric||![metric.width,metric.height,metric.depth].every((n:any)=>typeof n==="number"&&n>0)) return res.status(400).json({error:"metric width, height and depth are required"});
  const provider=getProvider();
  const views=await Promise.all(VIEWS.map(async view=>({view,...await provider.analyze({image:sourceImage,view,prompt,metric})})));
  return res.json({jobId:`mv-${Date.now()}`,status:"complete",views});
 } catch(error) { return res.status(503).json({status:"failed",error:error instanceof Error?error.message:"AI 3D vision unavailable"}); }
}
