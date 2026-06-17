# @shotlingo/screenshot-sizes

> Current App Store + Google Play screenshot size requirements (2026).

Pixel dimensions, aspect ratios, minimum count, and orientation for every
device class Apple and Google ask for — iPhone 6.9", 6.7", 6.5", 6.1", 5.5",
iPad Pro 13" / 12.9" / 11", Apple Watch, Apple TV, Mac, and Play Store
phone / 7" tablet / 10" tablet / Wear OS / Android TV.

## Install

```bash
npm install @shotlingo/screenshot-sizes
```

## Usage

```js
import {
  APP_STORE_SIZES,
  PLAY_STORE_SIZES,
  appStoreSize,
  requiredAppStoreSizes,
} from '@shotlingo/screenshot-sizes';

appStoreSize('iphone-6.9');
// {
//   id: 'iphone-6.9',
//   label: 'iPhone 6.9"',
//   devices: ['iPhone 16 Pro Max', 'iPhone 16 Plus', ...],
//   portrait: { width: 1290, height: 2796 },
//   landscape: { width: 2796, height: 1290 },
//   minRequired: 1,
//   maxAllowed: 10,
//   required: true,
//   notes: 'Required since iOS 18. Submitting this set covers all iPhones...'
// }

// Minimum set to upload for iOS submission:
requiredAppStoreSizes().map((s) => s.label);
// ['iPhone 6.9"', 'Mac', 'Apple TV']
```

## Why this exists

The official Apple + Google docs are scattered across half a dozen pages
that get out of date every WWDC / I/O. This package keeps the current
spec in one importable place so apps generating App Store / Play Store
screenshots programmatically don't have to hardcode 1290×2796 in twelve
files.

Verified against the canonical [App Store Connect Help](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)
and [Play Console "Add screenshots"](https://support.google.com/googleplay/android-developer/answer/9866151) docs as of 2026-06.

Maintained alongside [Shotlingo](https://shotlingo.com), the App Store
screenshot localization tool used by indie iOS/Android developers shipping
to 40+ language markets.

## License

MIT © [Alperen Güntekin](https://shotlingo.com)
