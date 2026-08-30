export type ActionStatus="pending"|"running"|"complete"|"failed"|"skipped";
export type ActionArtifact={id:string;path:string;kind:"mesh"|"texture"|"material"|"uv"|"lod"|"collision"|"report"|"manifest";mime?:string;sha256?:string};
export type ActionRecord={id:string;name:string;status:ActionStatus;startedAt?:string;completedAt?:string;durationMs?:number;inputs:string[];outputs:ActionArtifact[];metrics?:Record<string,number|string|boolean>;error?:string};
export type MeshRunManifest={schemaVersion:"1.0";runId:string;objectName:string;engine:string;dimensions:{width:number;height:number;depth:number};actions:ActionRecord[];finalArtifact?:ActionArtifact;createdAt:string;updatedAt:string};
export const ACTIONS=["prepare-input","ai-reconstruct","validate-mesh","normalize-metrics","repair-mesh","remesh","uv-unwrap","normals","materials","lod","collision","final-validation","export-glb"] as const;
