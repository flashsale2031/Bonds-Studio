# Bonds Studio Object Transformer backend

The service in `server/object-transformer.mjs` provides provider-neutral APIs for the 2D→3D pipeline.

## Endpoints

- `GET /api/object-transformer/health` — service/adapters status.
- `POST /api/object-transformer/research?q=...` — approved web research adapter.
- `POST /api/object-transformer/geocode?q=...` — geocoding adapter.
- `POST /api/object-transformer/jobs` — creates an asynchronous transformation job.
- `GET /api/object-transformer/jobs/:id` — returns job progress and generated metadata.

## Production adapters

Set these as server-side environment variables; never ship them in Vite/browser code:

- `RESEARCH_ENDPOINT`, optional `RESEARCH_API_KEY`
- `VISION_ENDPOINT`, optional `VISION_API_KEY`
- `MODEL_GENERATION_ENDPOINT`, optional `MODEL_GENERATION_API_KEY`
- `GEOCODER_ENDPOINT` (defaults to OpenStreetMap Nominatim)
- `OBJECT_TRANSFORMER_PORT`
- `OBJECT_TRANSFORMER_DATA_DIR`
- `CORS_ORIGIN`

The backend deliberately does not scrape arbitrary sites, bypass access controls, or download copyrighted assets without authorization. Production asset acquisition should use licensed APIs/catalogs and retain source/license metadata. The five directional texture jobs and environment reconstruction jobs are represented explicitly so an approved vision/search/asset provider can fill them.
