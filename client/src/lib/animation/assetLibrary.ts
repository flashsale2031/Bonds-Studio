export type AssetCategory="Characters"|"Objects"|"Environments"|"Meshes"|"Materials"|"Textures"|"HDRIs"|"Prefabs"|"VFX"|"Audio"|"Animations"|"Cameras"|"Lights"|"Scripts";
export type AssetRecord={id:string;name:string;category:AssetCategory;folder:string;version:number;url:string;thumbnailUrl?:string;mimeType:string;createdAt:string;updatedAt:string;metadata:Record<string,string|number|boolean>};
const key="bonds.animation.assets.v1";
export function listAssets():AssetRecord[]{try{return JSON.parse(localStorage.getItem(key)||"[]")}catch{return[]}}
export function saveAsset(asset:AssetRecord){const assets=listAssets().filter(a=>a.id!==asset.id);assets.push(asset);localStorage.setItem(key,JSON.stringify(assets));return asset}
export function removeAsset(id:string){localStorage.setItem(key,JSON.stringify(listAssets().filter(a=>a.id!==id)))}
export function createAsset(input:Omit<AssetRecord,"id"|"version"|"createdAt"|"updatedAt">):AssetRecord{const now=new Date().toISOString();return saveAsset({...input,id:crypto.randomUUID(),version:1,createdAt:now,updatedAt:now})}
export function newVersion(id:string,changes:Partial<AssetRecord>){const old=listAssets().find(a=>a.id===id);if(!old)throw new Error("Asset not found");return saveAsset({...old,...changes,version:old.version+1,updatedAt:new Date().toISOString()})}
