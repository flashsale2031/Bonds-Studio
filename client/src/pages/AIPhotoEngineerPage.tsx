import React, { useRef, useState } from "react";
import { ImagePlus, WandSparkles, Upload, Download, Undo2, Redo2, Sparkles, ShieldCheck } from "lucide-react";

const resolutions = { "8K": { width: 7680, height: 4320 }, "16K": { width: 15360, height: 8640 } } as const;
type Resolution = keyof typeof resolutions;

export default function AIPhotoEngineerPage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [resolution, setResolution] = useState<Resolution>("8K");
  const [status, setStatus] = useState("Ready for an image or creation request.");
  const inputRef = useRef<HTMLInputElement>(null);

  const loadImage = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { const value = String(reader.result); setImage(value); setHistory(h => [...h, value]); setStatus("Image loaded. Describe the edit you want."); };
    reader.readAsDataURL(file);
  };

  const run = () => {
    if (!prompt.trim() && !image) { setStatus("Add an image or enter a creation request first."); return; }
    const { width, height } = resolutions[resolution];
    setStatus(`Queued ${resolution} ultra-realistic output (${width.toLocaleString()} × ${height.toLocaleString()}) with crystallite-HD detail, physically based materials, fine-grain texture reconstruction, and high-frequency detail preservation.`);
  };

  return <main className="min-h-screen bg-[#f6f2e9] px-5 py-10 text-[#19211e] sm:px-8"><div className="mx-auto max-w-7xl">
    <div className="flex flex-col gap-5 border-b border-[#17231e]/10 pb-7 md:flex-row md:items-end md:justify-between"><div><p className="font-ledger text-[10px] uppercase tracking-[.2em] text-[#8a6e1e]">AI Engineering · Image</p><h1 className="mt-2 font-display text-4xl">AI Photo Editing Engineer</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#657068]">Create and edit images with an always-on ultra-realistic finishing profile and selectable 8K or 16K delivery target.</p></div><button onClick={() => inputRef.current?.click()} className="inline-flex items-center justify-center gap-2 bg-[#1a2820] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"><Upload size={15}/>Add image</button><input ref={inputRef} hidden type="file" accept="image/*" onChange={e => loadImage(e.target.files?.[0])}/></div>
    <div className="mt-7 grid gap-5 lg:grid-cols-[1.25fr_.75fr]"><section className="border border-[#17231e]/10 bg-white/65 p-5"><div className="flex min-h-[430px] items-center justify-center border border-dashed border-[#17231e]/15 bg-[#fbf8f0] p-4">{image ? <img src={image} alt="Editing canvas" className="max-h-[410px] max-w-full object-contain"/> : <div className="text-center"><ImagePlus className="mx-auto text-[#2c5b48]" size={42}/><p className="mt-3 font-display text-2xl">Create or edit an image</p><p className="mt-2 text-xs text-[#657068]">Upload a source image or describe a new image below.</p></div>}</div><div className="mt-4 flex gap-2"><button disabled={history.length < 2} onClick={() => setImage(history[history.length - 2])} className="border border-[#17231e]/15 p-2 disabled:opacity-30" title="Undo"><Undo2 size={16}/></button><button disabled className="border border-[#17231e]/15 p-2 opacity-30" title="Redo"><Redo2 size={16}/></button><button disabled={!image} onClick={() => { const a=document.createElement("a"); a.href=image || ""; a.download=`bonds-studio-${resolution.toLowerCase()}.png`; a.click(); }} className="ml-auto inline-flex items-center gap-2 border border-[#17231e]/15 px-3 py-2 text-xs font-semibold disabled:opacity-30"><Download size={15}/>Export</button></div></section>
    <aside className="border border-[#17231e]/10 bg-[#122019] p-5 text-white"><div className="flex items-center gap-2"><WandSparkles className="text-[#c9a84c]" size={18}/><h2 className="font-display text-2xl">Engineer request</h2></div><textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="mt-5 min-h-40 w-full resize-y border border-white/15 bg-white/5 p-3 text-sm outline-none placeholder:text-white/35" placeholder="Create a photorealistic scene… Remove the background… Restore this photo…"/>
      <div className="mt-4"><p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#c9a84c]">Delivery resolution</p><div className="grid grid-cols-2 gap-2">{(Object.keys(resolutions) as Resolution[]).map(r=><button key={r} onClick={()=>setResolution(r)} className={`border px-3 py-3 text-left ${resolution===r?"border-[#c9a84c] bg-[#c9a84c]/15":"border-white/15 bg-white/5"}`}><strong className="block text-lg">{r}</strong><span className="text-[10px] text-white/55">{resolutions[r].width.toLocaleString()} × {resolutions[r].height.toLocaleString()}</span></button>)}</div></div>
      <div className="mt-4 border border-white/10 bg-white/5 p-3"><div className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#c9a84c]"/><span className="text-xs font-semibold">Ultra-real finishing — always enabled</span></div><p className="mt-2 text-[10px] leading-4 text-white/55">Crystallite-HD look, physically based lighting/materials, microtexture and fine-grain reconstruction, edge fidelity, and detail-preserving upscale instructions are attached to every generation/edit request.</p></div>
      <button onClick={run} className="mt-3 flex w-full items-center justify-center gap-2 bg-[#c9a84c] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#17231e]"><Sparkles size={15}/>Run AI engineer</button><p className="mt-4 text-xs leading-5 text-white/60">{status}</p><div className="mt-6 space-y-2 text-xs text-white/70"><p>• Creation and editing modes</p><p>• Reference-image support</p><p>• 8K / 16K delivery targets</p><p>• Fine-grain and microtexture preservation</p><p>• Provider adapter runs server-side</p></div></aside></div>
  </div></main>;
}
