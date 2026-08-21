# Live deployment verification

Verified on 2026-08-21:

- GitHub Pages URL: https://flashsale2031.github.io/Bonds-Studio/
- Live HTML returns HTTP 200 and was last modified at 23:06:31 UTC.
- Live HTML contains `assets/earth-model/earth.obj` and no longer contains `assets/earth-blue-marble.png`.
- Live HTML contains the Bonds Agent UI.
- `assets/earth-model/earth.obj` returns HTTP 200 from GitHub Pages.
- GitHub Actions deployment for commit `da5a73d05cb2ece79792363629f1a79baba9242c` completed successfully.
- Live browser scene exposes `window.bondsEarth3d === true` and `window.bondsEarthShader === true`, confirming the replacement Earth scene initialized.
- Browser console showed no Earth loader errors during live verification.
