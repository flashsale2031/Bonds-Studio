# Bonds Studio Earth module sources

The Earth surface texture is the NASA Blue Marble equirectangular image downloaded as `assets/earth-blue-marble.png` from NASA Earth Observatory imagery. NASA describes Blue Marble as global true-color Earth imagery and maintains the collection at https://science.nasa.gov/earth/earth-observatory/collections/blue-marble/.

The geographic labels currently rendered on the 3D globe use explicit latitude/longitude coordinates for major cities, including New York, São Paulo, London, Cairo, Lagos, Cape Town, Dubai, Mumbai, Tokyo, Singapore, Sydney, Mexico City, Los Angeles, Paris, Nairobi, and Reykjavík. These coordinates are used to place marker points and text sprites on the sphere.

Natural Earth was reviewed as a future source for richer country boundaries and place-name layers. Its official terms page states that its raster and vector map data are public domain and may be modified and used commercially: https://www.naturalearthdata.com/about/terms-of-use/.

The current implementation uses Three.js from https://unpkg.com/three@0.160.0/build/three.min.js, a WebGL sphere, the NASA texture, and lightweight canvas text sprites. It retains a CSS fallback background, uses capped pixel ratio, and continues to support drag rotation, touch rotation, wheel zoom, and pinch zoom.
