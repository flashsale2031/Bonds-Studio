# Bonds Studio map zoom test findings

- Local page loaded successfully from `/home/ubuntu/Bonds-Studio/index.html`.
- Leaflet loaded successfully from the pinned CDN URL.
- Dispatching a zoom gesture and allowing one animation frame activated `.earth-stage--local-map`.
- The map panel reported `Community / neighborhood` at the highest tested zoom.
- The local map contained the selected New York marker, Leaflet zoom controls, and visible `© OpenStreetMap contributors` attribution.
- The screen-sized map transitioned from the initial `Globe` state to city/neighborhood detail without removing the Earth module.
- The implementation uses on-demand OSM tiles only when the user opens the local map panel; it does not prefetch or cache OSM tiles for offline use.
- Offline fallback is retained as coordinate/name text because the OSM tile policy prohibits offline tile prefetching on the public tile server.

The London selection test succeeded: the local map popup changed to London, the Street View link updated to London coordinates, and the globe view recentered through the shared Earth-view controller. During rapid zoom updates, the map can show temporary blank tile gaps while the on-demand raster tiles are still loading; the implementation should debounce map zoom updates and invalidate the Leaflet size after the panel transition to improve this behavior.

Production verification exposed a deployment issue: the GitHub Pages page loaded the Three.js Earth module, but `window.L` was false during the live zoom test, so the local map panel did not activate. The pinned Leaflet CDN script needs a production-safe loading fallback or corrected loading order/SRI handling before this feature is considered complete.

The corrected deployment is publicly serving `vendor/leaflet.js` with HTTP 200 and the live HTML references the local vendor path. The verification browser session still reported `window.L === false`, indicating a stale service-worker/browser cache or script execution state rather than a missing deployed asset. The next verification step is to unregister the prior service worker and reload the live page.

After unregistering the stale service worker and reloading with a cache-busting query, the live page successfully loaded `https://flashsale2031.github.io/Bonds-Studio/vendor/leaflet.js`; browser verification reported Leaflet version 1.9.4. The earlier failure was caused by the stale service-worker cache, not the deployed asset.

For the 90-degree Earth correction, local browser testing reached the full keyboard tilt range successfully. The computed Earth wrapper scale at 90 degrees was approximately 1.193, and the Three.js Earth controller was present. The latest refinement removes the remaining flat CSS surface overlays, increases the real sphere’s 90-degree scale compensation, and adds camera-side fill lighting so the WebGL texture remains legible.

The final live build passed the 90-degree verification after deployment. The production Earth controller was active, the WebGL canvas measured 430 × 430 pixels, and the adaptive Earth wrapper scale reached approximately 1.290 at full vertical tilt, confirming the globe expands instead of collapsing edge-on.

The inflated mesh local test passed the structural checks, the browser reported no runtime error beyond the expected Three.js legacy-build warning, and the Earth texture URL loaded successfully at 2048 × 1024. The refined geometry uses 96 × 64 sphere segments, radial pressure deformation, recomputed normals, a depth shell, and an outer atmosphere shell.
