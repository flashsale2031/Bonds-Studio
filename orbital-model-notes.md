# Bonds Studio orbital model

The simulation uses a lightweight Keplerian approximation based on NASA/JPL Solar System Dynamics' Approximate Positions of the Planets guidance: https://ssd.jpl.nasa.gov/planets/approx_pos.html.

JPL states that the approximate planetary elements are suitable when full integrated-ephemeris accuracy is not required and that the listed elements are valid for 1800 AD–2050 AD. The model uses semi-major axis, eccentricity, mean longitude, longitude of perihelion, and orbital period approximations for Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.

JPL identifies Horizons as the recommended service for high-precision positions: https://ssd.jpl.nasa.gov/planets/orbits.html. The static Bonds Studio page does not call Horizons, so the displayed positions are approximate and intended for a graphic UI, not navigation or scientific measurement.

The scene uses a geocentric presentation: Earth stays centered, the Moon is placed on a date-driven approximate orbit around Earth, and the Sun and planets are computed from heliocentric positions and converted to relative Earth-centered screen positions. This is an observational display choice; physically, Earth and the other planets orbit the Sun.

The simulation controls are in `index.html`: date/time input, playback speed (1 day/second, 7 days/second, 30 days/second, or 1 year/second), and play/pause. The simulation initializes to the user's current local date/time and updates the displayed date while playing.
