import type {Request,Response} from "express";
import {runOpenSource3D} from "../services/openSource3dEngine";

export async function generateAI3DObject(req:Request,res:Response){
 try{
  const {imagePath,outputDir,engine,textureResolution}=req.body??{};
  if(typeof imagePath!=="string"||typeof outputDir!=="string") return res.status(400).json({error:"imagePath and outputDir are required"});
  const result=await runOpenSource3D({imagePath,outputDir,engine,textureResolution});
  return res.status(result.status==="complete"?200:502).json(result);
 }catch(error){return res.status(500).json({status:"failed",error:error instanceof Error?error.message:"3D generation failed"});}
}
