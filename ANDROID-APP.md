# Android App download / upgrade flow

Bonds Studio is a GitHub-hosted web project. The **Android App** action in the header menu points users to the latest GitHub release.

## Preferred release asset

Publish the Android build with this exact asset name:

`bonds-studio.apk`

The header automatically derives the GitHub repository when the site is hosted on GitHub Pages and sends users to:

`https://github.com/<owner>/<repo>/releases/latest/download/bonds-studio.apk`

On Android, that link is the download/upgrade entry point for the APK. Android will use the normal package-installer flow; users must allow installation from the browser/source when required by their device settings.

## Custom repository or release host

Set `VITE_ANDROID_APK_URL` during the web build to override the automatically derived destination. This can point directly at an APK or at a release page.

## Upgrade behavior

The button intentionally targets the **latest release**, not a version-pinned file. Publishing a newer APK under the same `bonds-studio.apk` release asset path makes the button the stable update entry point for the web application.

The web site does not silently install or replace an Android application. The user controls the Android download and installation confirmation.
