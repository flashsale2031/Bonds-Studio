# World location data notes

The Earth module currently uses a six-item `simulatedFocusProfiles` array. To support global location search, the upgrade will use the public `joelacus/world-cities` dataset at `https://github.com/joelacus/world-cities`.

The repository README describes the downloadable city records as JSON/CSV with city `name`, country code, and latitude/longitude, with population-threshold variants. The selected `world_cities_5000.json` asset was retrieved from `https://raw.githubusercontent.com/joelacus/world-cities/main/world_cities_5000.json`. It contains 69,580 records across 245 country codes, and all 69,580 records include latitude and longitude coordinates. The dataset covers towns and cities with population threshold 5,000 and is therefore used as a global city-location array, not a literal gazetteer of every named place, building, street, or address on Earth.

The UI will preserve the existing six profiles as the initial simulation profile list, while the new location command uses the larger global city array for lookup. For a selected city, the Earth scene will center the profile on that city’s coordinates and derive a deterministic local time display from the selected time option. The source and coverage boundary will be visible in the Earth control bar.
