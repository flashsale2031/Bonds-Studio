import type {Request,Response} from "express";
import {executeMeshAction,type MeshActionId} from "../services/meshActionRegistry";

export async function runMeshAction(req:Request,res:Response){
 try{
  const id=req.params.action as MeshActionId;
  const {runId,inputDir,outputDir,source,metrics}=req.body??{};
  if(!runId||!inputDir||!outputDir)return res.status(400).json({ok:false,error:"runId, inputDir and outputDir are required"});
  const result=await executeMeshAction(id,{runId,inputDir,outputDir,source,metrics});
  return res.status(result.ok?200:422).json({action:id,...result});
 }catch(error){return res.status(500).json({ok:false,error:error instanceof Error?error.message:"Mesh action failed"});}
}
