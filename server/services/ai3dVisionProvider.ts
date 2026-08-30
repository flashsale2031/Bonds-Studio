export type View = "front"|"back"|"left"|"right"|"above"|"beneath";
export type AnalyzeInput={image:string;view:View;prompt?:string;metric:{width:number;height:number;depth:number}};
export type AnalyzeOutput={imageUrl:string;depth?:unknown;normal?:unknown;segmentation?:unknown;confidence?:unknown};

export interface AI3DVisionProvider { analyze(input:AnalyzeInput):Promise<AnalyzeOutput>; }

/**
 * Provider-neutral adapter. Configure BONDS_AI_3D_VISION_URL server-side and
 * keep provider credentials out of the browser. The provider must return the
 * synthesized view plus optional depth/normal/segmentation/confidence maps.
 */
export function createHTTPVisionProvider(baseUrl:string, apiKey?:string):AI3DVisionProvider {
 return { async analyze(input){
  const response=await fetch(`${baseUrl.replace(/\/$/,"")}/analyze`,{method:"POST",headers:{"Content-Type":"application/json",...(apiKey?{"Authorization":`Bearer ${apiKey}`}:{})},body:JSON.stringify({...input,outputs:["image","depth","normal","segmentation","confidence"]})});
  if(!response.ok) throw new Error(`Vision provider returned ${response.status}`);
  return response.json();
 }};
}

export function registerAI3DVisionProvider(provider:AI3DVisionProvider){(globalThis as any).__BONDS_AI_3D_VISION_PROVIDER=provider;}

export function registerConfiguredProvider(){
 const url=process.env.BONDS_AI_3D_VISION_URL;
 if(!url) return false;
 registerAI3DVisionProvider(createHTTPVisionProvider(url,process.env.BONDS_AI_3D_VISION_API_KEY));
 return true;
}
