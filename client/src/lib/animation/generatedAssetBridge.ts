import {createAsset,type AssetCategory,type AssetRecord} from "./assetLibrary";
export type GeneratedArtifact={name:string;url:string;thumbnailUrl?:string;mimeType?:string;category:AssetCategory;metadata?:Record<string,string|number|boolean>};
export function registerGeneratedArtifact(a:GeneratedArtifact):AssetRecord{return createAsset({name:a.name,url:a.url,thumbnailUrl:a.thumbnailUrl,category:a.category,folder:"Generated",mimeType:a.mimeType||"model/gltf-binary",metadata:{source:"ai-3d-pipeline",...(a.metadata||{})}})}
export function insertGeneratedAsset(asset:AssetRecord,target:"scene"|"timeline"|"material"|"character"|"environment"){return {type:"BONDS_ASSET_INSERT",assetId:asset.id,target,assetUrl:asset.url}};
