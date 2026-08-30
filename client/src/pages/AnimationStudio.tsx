import React,{useMemo,useState} from "react";
import {listAssets,type AssetRecord} from "../lib/animation/assetLibrary";
import {createAssetInsertEvent} from "../lib/animation/assetDrop";

type SceneNode={id:string;name:string;assetId:string;position:{x:number;y:number;z:number}};
export default function AnimationStudio(){
 const [assets]=useState<AssetRecord[]>(()=>listAssets()); const [nodes,setNodes]=useState<SceneNode[]>([]); const [selected,setSelected]=useState<string>(); const [query,setQuery]=useState("");
 const filtered=useMemo(()=>assets.filter(a=>`${a.name} ${a.category} ${a.folder}`.toLowerCase().includes(query.toLowerCase())),[assets,query]);
 const add=(asset:AssetRecord)=>{const node={id:crypto.randomUUID(),name:asset.name,assetId:asset.id,position:{x:0,y:0,z:0}};setNodes(n=>[...n,node]);window.dispatchEvent(new CustomEvent("bonds-animation-asset-insert",{detail:createAssetInsertEvent(asset,"scene",node.position)}));setSelected(node.id)};
 return <main className="animation-studio" style={{display:"grid",gridTemplateColumns:"280px 1fr 300px",height:"100vh",gap:12,padding:12}}>
  <aside><h2>Asset Library</h2><input aria-label="Search assets" placeholder="Search assets" value={query} onChange={e=>setQuery(e.target.value)} style={{width:"100%"}}/><div>{filtered.map(a=><button key={a.id} onClick={()=>add(a)} style={{display:"block",width:"100%",textAlign:"left",marginTop:6}}>{a.name}<small> · {a.category}</small></button>)}</div></aside>
  <section><header><h1>Animation Studio</h1><span>Scene / 3D Viewport / Timeline</span></header><div className="viewport" style={{height:"65vh",border:"1px solid currentColor",display:"grid",placeItems:"center"}}><div>3D Viewport — {nodes.length} scene object{nodes.length===1?"":"s"}</div></div><div className="timeline" style={{height:"25vh",border:"1px solid currentColor",marginTop:8,padding:8}}><strong>Timeline</strong><div>{nodes.map(n=><div key={n.id}>{n.name}</div>)}</div></div></section>
  <aside><h2>Scene Hierarchy</h2>{nodes.map(n=><button key={n.id} onClick={()=>setSelected(n.id)} style={{display:"block",width:"100%",textAlign:"left"}}>{selected===n.id?"▶ ":""}{n.name}</button>)}<h2>Inspector</h2>{selected&&<p>Selected: {nodes.find(n=>n.id===selected)?.name}</p>}</aside>
 </main>;
}
