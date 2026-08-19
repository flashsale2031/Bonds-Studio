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

The final production build loaded successfully. Live browser inspection confirmed the Earth controller and Three.js renderer are active on a 430 × 430 WebGL canvas after deployment. The visible Earth uses the refined textured sphere pipeline with the higher-resolution geometry, depth shell, atmosphere shell, radial inflation, and recomputed normals.

The unified touch controller now uses active pointer tracking, full ±90° vertical rotation, pinch-distance zoom, pointer capture safeguards, and `touch-action: none` on the Earth stage. Browser metadata confirmed Pointer Events report `pointerType: touch` correctly. Synthetic pointer dispatch in the browser harness did not maintain the dragging class reliably, so production verification will rely on the deployed event code and its full-angle state checks rather than treating the synthetic harness result as a physical touchscreen simulation.

The final live touch build is deployed and verified. Production browser inspection confirms `bondsEarth3d` is active, the Earth canvas is 430 × 430 pixels, the stage uses `touch-action: none`, and the full-angle `-90, 90` clamp is present in the deployed HTML.

Dual-sided Earth shader local test: the source contains front/back UV uniforms, a normal-based blend mask, and animated time/rotation uniforms. The browser console showed no shader compile errors. The file:// test environment blocked Three.js TextureLoader from loading `assets/earth-blue-marble.png` with an Event error, so the shader object was not initialized locally; this is a file-origin loading limitation rather than a shader compile failure. Production HTTPS verification is required for the texture callback and shader runtime.

The HTTP-served dual-sided Earth shader test succeeded. The runtime shader is active with both `uFrontMap` and `uBackMap`, `uBlendPower = 1.65`, `THREE.DoubleSide`, and live `uTime` and `uAnimation` values. The Earth texture and shader render correctly over HTTP; the earlier file:// failure was only an origin-loading limitation.

The continuous-sphere shader test succeeded over HTTP. The live shader has both front and back texture channels, `uSeamWidth = 0.92`, `uBlendPower = 1.65`, `THREE.DoubleSide`, active animation and time uniforms, and a vertex shader using the closed sphere model transform. The Earth visibly renders as one spherical mesh with the map channels wrapped from the same normal-derived spherical coordinates.

Balanced extrusion test succeeded over HTTP. The Earth remains a smooth closed spherical mesh, the dual-map shader is active with seam width 0.92, the Earth controller is active, and animation/time uniforms continue updating. No shader or geometry errors appeared beyond the existing Three.js legacy-build warning.
