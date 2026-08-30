export type EngineName="sf3d"|"triposr"|"trellis";
export type EngineConfig={name:EngineName;command:string;capabilities:string[]};

/** Open-source local engines. Install them on the GPU worker; the web app never needs model weights. */
export const OPEN_SOURCE_3D_STACK:EngineConfig[]=[
 {name:"sf3d",command:"python -m sf3d.server",capabilities:["single-image mesh","UV unwrap","illumination disentanglement","material parameters"]},
 {name:"triposr",command:"python -m triposr.server",capabilities:["fast single-image reconstruction","OBJ/GLB"]},
 {name:"trellis",command:"python -m trellis.server",capabilities:["image/text to 3D","mesh","3D Gaussian","radiance field"]}
];

export function chooseOpenSourceEngine(opts:{gpuVramGb:number;needsPBR:boolean;needsFastDraft:boolean}):EngineConfig{
 if(opts.needsPBR && opts.gpuVramGb>=16) return OPEN_SOURCE_3D_STACK[0];
 if(opts.needsFastDraft && opts.gpuVramGb>=6) return OPEN_SOURCE_3D_STACK[1];
 return OPEN_SOURCE_3D_STACK[2];
}
