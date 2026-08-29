# Object Transformer Providers

The server exposes provider contracts for:

- image/vision analysis
- web specification research
- 3D geometry generation
- five-face texture generation
- environmental reconstruction

Configure `OBJECT_TRANSFORMER_PROVIDER` on the server only. Provider credentials must be stored as deployment secrets and never shipped to the browser.

## Production adapter contract

Implement `ObjectTransformerProvider` methods in a server-only adapter:

```text
analyzeImage({ imageData, mimeType })
researchObject({ objectName, visualAnalysis })
generateGeometry({ specifications, visualAnalysis, research })
generateFaceTextures({ geometry, visualAnalysis, research })
reconstructEnvironment({ sourceImage, geometry, sceneAnalysis, location })
```

The application should retain provenance metadata for every external reference: source, asset identifier, license/usage terms, retrieval time, and confidence. Do not automatically download or redistribute assets whose license does not permit the intended use.
