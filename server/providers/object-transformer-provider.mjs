/** Provider contract for production object reconstruction.
 * Implementations are selected server-side through environment configuration.
 * No provider credentials belong in client code.
 */
export class ObjectTransformerProvider {
  async analyzeImage(_input) { throw new Error("VISION_PROVIDER_NOT_CONFIGURED"); }
  async researchObject(_input) { throw new Error("RESEARCH_PROVIDER_NOT_CONFIGURED"); }
  async generateGeometry(_input) { throw new Error("THREED_PROVIDER_NOT_CONFIGURED"); }
  async generateFaceTextures(_input) { throw new Error("TEXTURE_PROVIDER_NOT_CONFIGURED"); }
  async reconstructEnvironment(_input) { throw new Error("ENVIRONMENT_PROVIDER_NOT_CONFIGURED"); }
}

export function createProviderFromEnv(env = process.env) {
  const provider = env.OBJECT_TRANSFORMER_PROVIDER || "stub";
  if (provider === "stub") return new ObjectTransformerProvider();
  throw new Error(`Unsupported OBJECT_TRANSFORMER_PROVIDER: ${provider}`);
}
