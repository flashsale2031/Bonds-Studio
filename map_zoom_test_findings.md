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
