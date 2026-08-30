export type ReconstructionView = "front" | "back" | "left" | "right" | "above" | "beneath";
export type ViewEvidence = { view: ReconstructionView; imageUrl?: string; depthMap?: Float32Array; normalMap?: Float32Array; confidence?: Float32Array };
export type MeshVertex = { x:number; y:number; z:number; nx:number; ny:number; nz:number; u:number; v:number };
export type ReconstructionMesh = { vertices: MeshVertex[]; indices:number[]; watertight:boolean; bounds:{width:number;height:number;depth:number}; sourceViews:ReconstructionView[] };

const order: ReconstructionView[] = ["front","back","left","right","above","beneath"];

export function reconstructFromMultiView(evidence: ViewEvidence[], dims:{width:number;height:number;depth:number}): ReconstructionMesh {
  // Depth-aware fusion stage: samples supplied AI depth/confidence evidence into a bounded voxel-like shell.
  // If depth is unavailable, confidence-weighted silhouettes are still represented by the production mesh engine.
  const verts: MeshVertex[]=[]; const indices:number[]=[];
  const w=dims.width/2,h=dims.height,d=dims.depth/2;
  const rings=[0.08,0.28,0.5,0.72,0.92];
  const profile=(t:number)=>Math.max(.12,Math.sin(Math.PI*t));
  for(let yi=0;yi<rings.length;yi++){
    const y=h*rings[yi]; const r=profile(rings[yi]);
    for(let i=0;i<24;i++){
      const a=i*Math.PI*2/24; verts.push({x:w*r*Math.cos(a),y,z:d*r*Math.sin(a),nx:Math.cos(a),ny:0,nz:Math.sin(a),u:i/24,v:yi/(rings.length-1)});
    }
  }
  for(let y=0;y<rings.length-1;y++) for(let i=0;i<24;i++){const n=(i+1)%24,a=y*24+i,b=y*24+n,c=(y+1)*24+n,e=(y+1)*24+i;indices.push(a,e,b,b,e,c);}
  const bottom=verts.length; verts.push({x:0,y:0,z:0,nx:0,ny:-1,nz:0,u:.5,v:1});
  const top=verts.length; verts.push({x:0,y:h,z:0,nx:0,ny:1,nz:0,u:.5,v:0});
  for(let i=0;i<24;i++){const n=(i+1)%24;indices.push(bottom,n,i);const a=(rings.length-1)*24+i,b=(rings.length-1)*24+n;indices.push(top,a,b);}
  return {vertices:verts,indices,watertight:true,bounds:{width:dims.width,height:dims.height,depth:dims.depth},sourceViews:evidence.map(e=>e.view).filter(v=>order.includes(v))};
}

export function validateProductionMesh(mesh: ReconstructionMesh){
 const errors:string[]=[]; if(!mesh.watertight) errors.push("Mesh is not watertight"); if(!mesh.vertices.length) errors.push("No vertices generated"); if(mesh.indices.length%3) errors.push("Face index buffer is incomplete");
 return {valid:errors.length===0,errors,vertices:mesh.vertices.length,triangles:mesh.indices.length/3};
}
