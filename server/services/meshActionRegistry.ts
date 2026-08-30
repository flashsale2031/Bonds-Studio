export type MeshActionId="prepare-input"|"ai-reconstruction"|"validate-mesh"|"normalize-metrics"|"repair-mesh"|"remesh"|"uv-unwrap"|"normals"|"materials"|"lod"|"collision"|"final-validation"|"export-glb";
export type MeshActionContext={runId:string;inputDir:string;outputDir:string;source?:string;metrics?:{width:number;height:number;depth:number};};
export type MeshActionResult={ok:boolean;artifacts:string[];metrics:Record<string,number|string|boolean>;error?:string};
export type MeshActionHandler=(ctx:MeshActionContext)=>Promise<MeshActionResult>;

const handlers=new Map<MeshActionId,MeshActionHandler>();
export function registerMeshAction(id:MeshActionId,handler:MeshActionHandler){handlers.set(id,handler);}
export function getMeshAction(id:MeshActionId){return handlers.get(id);}
export async function executeMeshAction(id:MeshActionId,ctx:MeshActionContext){const handler=getMeshAction(id);if(!handler) throw new Error(`No executable handler registered for ${id}`);return handler(ctx);}
export function listRegisteredMeshActions(){return [...handlers.keys()];}
