export function createLocalVisionProvider(){
 const base=process.env.BONDS_AI_3D_VISION_URL;
 if(!base) throw new Error("BONDS_AI_3D_VISION_URL is required");
 const key=process.env.BONDS_AI_3D_VISION_API_KEY;
 return {async analyze(input){
  const r=await fetch(`${base.replace(/\/$/,"")}/analyze`,{method:"POST",headers:{"content-type":"application/json",...(key?{authorization:`Bearer ${key}`}:{})},body:JSON.stringify({...input,outputs:["image","depth","normal","segmentation","confidence"]})});
  if(!r.ok) throw new Error(`Configured AI 3D provider returned HTTP ${r.status}`);
  const result=await r.json();
  if(!result?.imageUrl) throw new Error("AI 3D provider response is missing imageUrl");
  return result;
 }};
}
