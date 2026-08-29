const API_BASE = process.env.OBJECT_TRANSFORMER_API_BASE || "http://localhost:8787";

export async function createObjectJob({ objectName, imageData, mimeType }) {
  const response = await fetch(`${API_BASE}/api/object-transformer/jobs`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ objectName, imageData, mimeType, pipeline: "2d-to-3d" })
  });
  if (!response.ok) throw new Error(`Unable to create object job (${response.status})`);
  return response.json();
}

export async function getObjectJob(jobId) {
  const response = await fetch(`${API_BASE}/api/object-transformer/jobs/${encodeURIComponent(jobId)}`);
  if (!response.ok) throw new Error(`Unable to read object job (${response.status})`);
  return response.json();
}

export async function waitForObjectJob(jobId, { intervalMs = 1500, signal, onProgress } = {}) {
  while (!signal?.aborted) {
    const job = await getObjectJob(jobId);
    onProgress?.(job);
    if (["completed", "failed", "cancelled"].includes(job.status)) return job;
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, intervalMs);
      signal?.addEventListener("abort", () => { clearTimeout(timer); reject(new DOMException("Aborted", "AbortError")); }, { once: true });
    });
  }
  throw new DOMException("Aborted", "AbortError");
}
