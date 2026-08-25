# Battery browser verification

The `/settings/battery` route renders inside Bonds Studio and is reachable from the System Settings context. Charging Mode displays browser battery telemetry with a fallback when the Battery Status API is unavailable, an estimated full-charge time, captured-light control from 0 to 10,000 lux, a standard display setting from 100 to 1,000 nits, photon factor, estimated input power, remaining energy, and an explicit photovoltaic simulation disclaimer.

Battery Saver Mode renders as the second required tab with a local-browser switch and status cards for saver state, battery availability, and charging detection. The UI explicitly states that it does not modify operating-system power controls.
