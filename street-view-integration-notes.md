# Bonds Studio street-level mapping research

## Google Maps Platform

Official Google documentation says the Maps JavaScript API requires an API key for authentication and billing, with key restrictions recommended for production: https://developers.google.com/maps/documentation/javascript/get-api-key.

The official Street View Service supports interactive panoramas, location and point-of-view controls, markers, overlays, and standalone panorama containers: https://developers.google.com/maps/documentation/javascript/streetview.

Conclusion: an embedded in-page Google Street View experience should use the Google Maps JavaScript API with an authorized, restricted API key. The static Bonds Studio page does not currently have such a key, so the safe fallback is to provide official Google Maps Street View links for selected coordinates rather than scrape or embed unlicensed imagery.

## Mapillary

MapillaryJS is a client-side WebGL library for interactive street-imagery experiences: https://mapillary.github.io/mapillary-js/. Mapillary API documentation states that API requests require client or user access tokens: https://www.mapillary.com/developer/api-documentation.

Conclusion: Mapillary is a viable alternative for street-level imagery, but it also requires authenticated tokens and a proper integration. It should not be wired with an unapproved token in a public static page.

## Planned safe implementation

Keep the NASA Blue Marble Earth texture and accurate latitude/longitude markers. Add country/city drill-down metadata and official Google Maps Street View links generated from coordinates. Add a configurable provider hook for a future API-key-backed embedded Street View panel. Do not attempt to create a full-world street-view texture, scrape Street View tiles, or expose secrets in client code.
