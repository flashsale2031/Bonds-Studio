import type {AssetRecord} from "./assetLibrary";
export type AssetDropTarget="scene"|"timeline"|"material"|"character"|"environment";
export type AssetInsertEvent={asset:AssetRecord;target:AssetDropTarget;position?:{x:number;y:number;z:number};trackId?:string};
export function createAssetInsertEvent(asset:AssetRecord,target:AssetDropTarget,position?:{x:number;y:number;z:number},trackId?:string):AssetInsertEvent{return {asset,target,position,trackId}};
