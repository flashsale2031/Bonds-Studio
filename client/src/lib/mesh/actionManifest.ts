export type MeshActionStatus="queued"|"running"|"complete"|"failed"|"skipped";
export type MeshAction={id:string;name:string;description:string;status:MeshActionStatus;startedAt?:string;completedAt?:string;inputs:string[];outputs:string[];metrics?:Record<string,number|string|boolean>;error?:string};
export const MESH_ACTIONS:Omit<MeshAction,"status">[]=[
{id:"prepare-input",name:"Prepare Input",description:"Normalize source image and metadata",inputs:["source-image"],outputs:["normalized-image"]},
{id:"ai-reconstruction",name:"AI Reconstruction",description:"Generate multi-view geometry evidence",inputs:["normalized-image","metric-template"],outputs:["views","depth","normals","segmentation"]},
{id:"validate-mesh",name:"Validate Mesh",description:"Check geometry integrity",inputs:["mesh"],outputs:["validation"]},
{id:"normalize-metrics",name:"Normalize Metrics",description:"Apply dimensions and coordinate origin",inputs:["mesh","metric-template"],outputs:["normalized-mesh"]},
{id:"repair-mesh",name:"Repair Mesh",description:"Repair topology and normals",inputs:["normalized-mesh"],outputs:["repaired-mesh"]},
{id:"remesh",name:"Remesh",description:"Optimize topology and polygon density",inputs:["repaired-mesh"],outputs:["optimized-mesh"]},
{id:"uv-unwrap",name:"UV Unwrap",description:"Create production UV layout",inputs:["optimized-mesh"],outputs:["uv-mesh"]},
{id:"normals",name:"Normals",description:"Recalculate and validate normals",inputs:["uv-mesh"],outputs:["normal-mesh"]},
{id:"materials",name:"Materials",description:"Attach PBR material metadata and textures",inputs:["normal-mesh","texture-set"],outputs:["material-mesh"]},
{id:"lod",name:"LOD",description:"Generate optimized levels of detail",inputs:["material-mesh"],outputs:["lod-set"]},
{id:"collision",name:"Collision",description:"Generate collision geometry",inputs:["material-mesh"],outputs:["collision-mesh"]},
{id:"final-validation",name:"Final Validation",description:"Validate production deliverable",inputs:["material-mesh","lod-set","collision-mesh"],outputs:["validation-report"]},
{id:"export-glb",name:"Export GLB",description:"Package production asset",inputs:["material-mesh","lod-set","collision-mesh"],outputs:["asset.glb"]}
];
export function createManifest(runId:string):{runId:string;createdAt:string;actions:MeshAction[];artifacts:string[]}{return {runId,createdAt:new Date().toISOString(),actions:MESH_ACTIONS.map(a=>({...a,status:"queued"})),artifacts:[]};}
