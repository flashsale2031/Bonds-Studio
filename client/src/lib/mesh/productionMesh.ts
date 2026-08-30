export type MeshVertex = [number, number, number];
export type MeshFace = [number, number, number];
export type ProductionMesh = {
  vertices: MeshVertex[];
  faces: MeshFace[];
  dimensions: { width: number; height: number; depth: number };
  source: "silhouette-extrusion" | "metric-template";
};

type Metric = { width: number; height: number; depth: number };

function pushQuad(faces: MeshFace[], a: number, b: number, c: number, d: number) {
  faces.push([a, b, c], [a, c, d]);
}

/** Creates a watertight parametric mesh from a normalized rectangular envelope. */
export function createMetricMesh(metric: Metric): ProductionMesh {
  const w = metric.width / 2;
  const h = metric.height;
  const d = metric.depth / 2;
  const vertices: MeshVertex[] = [
    [-w, 0, -d], [w, 0, -d], [w, h, -d], [-w, h, -d],
    [-w, 0, d], [w, 0, d], [w, h, d], [-w, h, d],
  ];
  const faces: MeshFace[] = [];
  pushQuad(faces, 0, 1, 2, 3); pushQuad(faces, 4, 7, 6, 5);
  pushQuad(faces, 0, 4, 5, 1); pushQuad(faces, 1, 5, 6, 2);
  pushQuad(faces, 2, 6, 7, 3); pushQuad(faces, 4, 0, 3, 7);
  return { vertices, faces, dimensions: metric, source: "metric-template" };
}

/** Converts an image alpha mask into a watertight 2.5D production mesh. */
export async function createSilhouetteMesh(dataUrl: string, metric: Metric, sample = 96): Promise<ProductionMesh> {
  const image = new Image();
  image.src = dataUrl;
  await new Promise<void>((resolve, reject) => { image.onload = () => resolve(); image.onerror = () => reject(new Error("Unable to decode source image")); });
  const canvas = document.createElement("canvas"); canvas.width = sample; canvas.height = sample;
  const ctx = canvas.getContext("2d", { willReadFrequently: true }); if (!ctx) throw new Error("Canvas unavailable");
  ctx.clearRect(0, 0, sample, sample); ctx.drawImage(image, 0, 0, sample, sample);
  const pixels = ctx.getImageData(0, 0, sample, sample).data;
  const occupied: boolean[][] = Array.from({ length: sample }, () => Array(sample).fill(false));
  let minX = sample, maxX = -1, minY = sample, maxY = -1;
  for (let y = 0; y < sample; y++) for (let x = 0; x < sample; x++) {
    const a = pixels[(y * sample + x) * 4 + 3];
    const r = pixels[(y * sample + x) * 4]; const g = pixels[(y * sample + x) * 4 + 1]; const b = pixels[(y * sample + x) * 4 + 2];
    const opaque = a > 32 && !(a > 220 && r > 245 && g > 245 && b > 245);
    occupied[y][x] = opaque;
    if (opaque) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
  }
  if (maxX < 0) return createMetricMesh(metric);
  const sx = metric.width / Math.max(1, maxX - minX); const sy = metric.height / Math.max(1, maxY - minY);
  const z = metric.depth / 2; const vertices: MeshVertex[] = []; const faces: MeshFace[] = [];
  const front = new Int32Array(sample * sample); const back = new Int32Array(sample * sample); front.fill(-1); back.fill(-1);
  const id = (x:number,y:number) => y * sample + x;
  for (let y=minY; y<=maxY; y++) for (let x=minX; x<=maxX; x++) if (occupied[y][x]) {
    const px = (x-minX) * sx - metric.width/2; const py = metric.height - (y-minY)*sy;
    front[id(x,y)] = vertices.push([px, py, z]) - 1;
    back[id(x,y)] = vertices.push([px, py, -z]) - 1;
  }
  for (let y=minY; y<maxY; y++) for (let x=minX; x<maxX; x++) {
    if (!occupied[y][x]) continue;
    const a=front[id(x,y)], b=front[id(x+1,y)], c=front[id(x+1,y+1)], d=front[id(x,y+1)];
    if (a>=0 && b>=0 && c>=0 && d>=0) faces.push([a,c,b],[a,d,c]);
    const A=back[id(x,y)], B=back[id(x+1,y)], C=back[id(x+1,y+1)], D=back[id(x,y+1)];
    if (A>=0 && B>=0 && C>=0 && D>=0) faces.push([A,B,C],[A,C,D]);
  }
  const edge = (x:number,y:number, nx:number, ny:number) => occupied[y]?.[x] && !occupied[ny]?.[nx];
  for (let y=minY; y<=maxY; y++) for (let x=minX; x<=maxX; x++) if (occupied[y][x]) {
    const p=front[id(x,y)], q=back[id(x,y)];
    if (edge(x,y,x-1,y) && x>minX) { const p2=front[id(x-1,y)],q2=back[id(x-1,y)]; pushQuad(faces,p,q,q2,p2); }
    if (edge(x,y,x+1,y) && x<maxX) { const p2=front[id(x+1,y)],q2=back[id(x+1,y)]; pushQuad(faces,p,p2,q2,q); }
    if (edge(x,y,x,y-1) && y>minY) { const p2=front[id(x,y-1)],q2=back[id(x,y-1)]; pushQuad(faces,p2,q2,q,p); }
    if (edge(x,y,x,y+1) && y<maxY) { const p2=front[id(x,y+1)],q2=back[id(x,y+1)]; pushQuad(faces,p,p2,q2,q); }
  }
  return { vertices, faces, dimensions: metric, source: "silhouette-extrusion" };
}

export function meshToOBJ(mesh: ProductionMesh, name = "BondsStudioObject"): string {
  const lines = [`# Bonds Studio production mesh`, `o ${name.replace(/[^A-Za-z0-9_-]/g, "_")}`];
  for (const [x,y,z] of mesh.vertices) lines.push(`v ${x.toFixed(6)} ${y.toFixed(6)} ${z.toFixed(6)}`);
  for (const [a,b,c] of mesh.faces) lines.push(`f ${a+1} ${b+1} ${c+1}`);
  return `${lines.join("\n")}\n`;
}

export function downloadOBJ(mesh: ProductionMesh, name: string) {
  const blob = new Blob([meshToOBJ(mesh, name)], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `${name.replace(/[^A-Za-z0-9_-]/g, "_")}.obj`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
