# @shotlingo/screenshot-sizes

[![npm version](https://img.shields.io/npm/v/@shotlingo/screenshot-sizes.svg)](https://www.npmjs.com/package/@shotlingo/screenshot-sizes)
[![npm downloads](https://img.shields.io/npm/dm/@shotlingo/screenshot-sizes.svg)](https://www.npmjs.com/package/@shotlingo/screenshot-sizes)
[![license](https://img.shields.io/npm/l/@shotlingo/screenshot-sizes.svg)](https://github.com/AlperenGuntekin/shotlingo-screenshot-sizes/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AlperenGuntekin/shotlingo-screenshot-sizes.svg?style=social)](https://github.com/AlperenGuntekin/shotlingo-screenshot-sizes)

> Current App Store + Google Play screenshot size requirements (2026).

Pixel dimensions, aspect ratios, minimum count, and orientation for every
device class Apple and Google currently ask for — iPhone 6.9" through legacy
3.5", iPad 13" through 9.7", every Apple Watch class (Ultra 3, Series 11–3),
Mac, Apple TV, Apple Vision Pro, and Google Play phone / 7" tablet / 10"
tablet / Wear OS / Android TV.

Verified against [Apple App Store Connect Help](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications/)
and [Google Play Console help](https://support.google.com/googleplay/android-developer/answer/9866151).
Maintained alongside [Shotlingo](https://shotlingo.com) — an AI-powered App
Store screenshot localization tool used by indie iOS / Android developers
shipping to 40+ language markets.

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
  playStoreSize,
  requiredAppStoreSizes,
  requiredPlayStoreSizes,
} from '@shotlingo/screenshot-sizes';

appStoreSize('iphone-6.9');
// {
//   id: 'iphone-6.9',
//   label: 'iPhone 6.9"',
//   devices: ['iPhone Air', 'iPhone 17 Pro Max', ...],
//   portrait: { width: 1320, height: 2868 },
//   landscape: { width: 2868, height: 1320 },
//   required: true,
//   minCount: 1,
//   maxCount: 10,
//   notes: 'Required base size for all new submissions...'
// }

// The minimum set to upload for an iOS submission:
requiredAppStoreSizes().map((s) => s.label);
// ['iPhone 6.9"', 'iPad 13"', 'Apple Watch Ultra 3', 'Mac', 'Apple TV', 'Apple Vision Pro']
```

### Use in a Fastlane Snapfile

```ruby
# Snapfile — pull the canonical iPhone 6.9" size from this package
# rather than hardcoding 1320x2868 in every screenshot generator.
devices(["iPhone 17 Pro Max"]) # screenshot at 1320x2868
languages(%w[en-US ja de fr es])
```

## Companion tool

[**App Store Screenshot Sizes 2026 reference (Shotlingo)**](https://shotlingo.com/tools/app-store-screenshot-sizes) —
the same data rendered as a sortable, copy-to-clipboard reference page with
"Last verified" stamps per row. The page also exposes:

- A JSON dataset at [/tools/app-store-screenshot-sizes.json](https://shotlingo.com/tools/app-store-screenshot-sizes.json)
- A CSV at [/tools/app-store-screenshot-sizes.csv](https://shotlingo.com/tools/app-store-screenshot-sizes.csv)
- An embeddable iframe widget for ASO blogs and dev wikis

If you want to localize App Store screenshots into 40+ languages at all of
the above sizes in one upload, [Shotlingo](https://shotlingo.com) is the tool
this dataset was extracted from.

## See also

- [`@shotlingo/locale-codes`](https://www.npmjs.com/package/@shotlingo/locale-codes) — App Store + Play Store locale codes for 40+ supported languages (ISO 639-1 → App Store Connect + Play Console mapping with RTL flag).
- [`@shotlingo/text-expansion`](https://www.npmjs.com/package/@shotlingo/text-expansion) — translation length expansion ratios per target language for App Store screenshot localization (avoid German text overflowing your buttons).

## Related tools

- [App Store locale codes lookup](https://shotlingo.com/tools/app-store-locale-codes) — interactive search + copy-to-clipboard for every supported locale.
- [Text expansion calculator](https://shotlingo.com/tools/text-expansion-calculator) — estimate translated string length so screenshot text overlays don't overflow.

## License

MIT © [Alperen Güntekin](https://shotlingo.com)

---

<sub>Made by [AI screenshot localizer](https://shotlingo.com) — Shotlingo, an AI-powered App Store screenshot localization tool for 40+ languages.</sub>
