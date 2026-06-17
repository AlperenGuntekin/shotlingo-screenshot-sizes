// App Store + Google Play screenshot size requirements as of 2026.
// Verified against Apple's App Store Connect Help and Google Play's
// "Add or update screenshots" docs. PR with link to the canonical Apple/
// Google page if you spot drift.

export const APP_STORE_SIZES = [
  {
    id: 'iphone-6.9',
    label: 'iPhone 6.9"',
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Plus', 'iPhone 15 Pro Max', 'iPhone 15 Plus', 'iPhone 14 Pro Max'],
    portrait: { width: 1290, height: 2796 },
    landscape: { width: 2796, height: 1290 },
    minRequired: 1,
    maxAllowed: 10,
    required: true,
    notes: 'Required since iOS 18. Submitting this set covers all iPhones — Apple auto-scales for older devices if their sizes are omitted.',
  },
  {
    id: 'iphone-6.7',
    label: 'iPhone 6.7"',
    devices: ['iPhone 14 Plus', 'iPhone 13 Pro Max', 'iPhone 12 Pro Max'],
    portrait: { width: 1284, height: 2778 },
    landscape: { width: 2778, height: 1284 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Optional if 6.9" is provided (Apple scales).',
  },
  {
    id: 'iphone-6.5',
    label: 'iPhone 6.5"',
    devices: ['iPhone 11 Pro Max', 'iPhone XS Max', 'iPhone XR'],
    portrait: { width: 1242, height: 2688 },
    landscape: { width: 2688, height: 1242 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Legacy. Skip unless targeting iOS 13 baseline.',
  },
  {
    id: 'iphone-6.1',
    label: 'iPhone 6.1"',
    devices: ['iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12'],
    portrait: { width: 1179, height: 2556 },
    landscape: { width: 2556, height: 1179 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Optional if 6.9" is provided.',
  },
  {
    id: 'iphone-5.5',
    label: 'iPhone 5.5"',
    devices: ['iPhone 8 Plus', 'iPhone 7 Plus', 'iPhone 6s Plus'],
    portrait: { width: 1242, height: 2208 },
    landscape: { width: 2208, height: 1242 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Legacy iOS 14 cutoff. Most modern apps drop this.',
  },
  {
    id: 'ipad-13',
    label: 'iPad Pro 13" (M4)',
    devices: ['iPad Pro 13" (M4, 2024)'],
    portrait: { width: 2064, height: 2752 },
    landscape: { width: 2752, height: 2064 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Required if your app supports iPad and offers iPad-specific UI.',
  },
  {
    id: 'ipad-12.9',
    label: 'iPad Pro 12.9"',
    devices: ['iPad Pro 12.9" (3rd–6th gen)'],
    portrait: { width: 2048, height: 2732 },
    landscape: { width: 2732, height: 2048 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Required for iPad apps targeting the 12.9" Pro line.',
  },
  {
    id: 'ipad-11',
    label: 'iPad Pro 11" / iPad Air',
    devices: ['iPad Pro 11" (M4)', 'iPad Air (M2)'],
    portrait: { width: 1668, height: 2388 },
    landscape: { width: 2388, height: 1668 },
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'Optional if iPad Pro 12.9" set is provided.',
  },
  {
    id: 'mac',
    label: 'Mac',
    devices: ['MacBook', 'iMac', 'Mac Studio'],
    portrait: null,
    landscape: { width: 2880, height: 1800 },
    minRequired: 1,
    maxAllowed: 10,
    required: true,
    notes: 'Mac apps only. 1280×800, 1440×900, 2560×1600 and 2880×1800 all accepted.',
  },
  {
    id: 'apple-watch',
    label: 'Apple Watch Ultra',
    devices: ['Apple Watch Ultra 2'],
    portrait: { width: 410, height: 502 },
    landscape: null,
    minRequired: 0,
    maxAllowed: 10,
    required: false,
    notes: 'watchOS apps only.',
  },
  {
    id: 'apple-tv',
    label: 'Apple TV',
    devices: ['Apple TV 4K'],
    portrait: null,
    landscape: { width: 3840, height: 2160 },
    minRequired: 1,
    maxAllowed: 10,
    required: true,
    notes: 'tvOS apps only.',
  },
];

export const PLAY_STORE_SIZES = [
  {
    id: 'phone',
    label: 'Phone',
    minRequired: 2,
    maxAllowed: 8,
    aspectRatio: '16:9 or 9:16',
    minSide: 320,
    maxSide: 3840,
    required: true,
    notes: 'Required. 2:1 max aspect ratio. JPEG or 24-bit PNG (no alpha).',
  },
  {
    id: 'tablet-7',
    label: '7" tablet',
    minRequired: 0,
    maxAllowed: 8,
    aspectRatio: '16:10 or 10:16',
    minSide: 320,
    maxSide: 3840,
    required: false,
    notes: 'Optional. Same format rules as phone.',
  },
  {
    id: 'tablet-10',
    label: '10" tablet',
    minRequired: 0,
    maxAllowed: 8,
    aspectRatio: '16:10 or 10:16',
    minSide: 1080,
    maxSide: 7680,
    required: false,
    notes: 'Strongly recommended if your app supports tablets — Play Store ranks tablet-optimized apps higher on tablet devices.',
  },
  {
    id: 'wear-os',
    label: 'Wear OS',
    minRequired: 0,
    maxAllowed: 8,
    aspectRatio: '1:1',
    minSide: 384,
    maxSide: 1080,
    required: false,
    notes: 'Wear OS apps only.',
  },
  {
    id: 'android-tv',
    label: 'Android TV',
    minRequired: 0,
    maxAllowed: 8,
    aspectRatio: '16:9',
    minSide: 1280,
    maxSide: 3840,
    required: false,
    notes: 'Android TV apps only. 16:9 landscape only.',
  },
];

const APP_STORE_INDEX = new Map(APP_STORE_SIZES.map((s) => [s.id, s]));
const PLAY_STORE_INDEX = new Map(PLAY_STORE_SIZES.map((s) => [s.id, s]));

export function appStoreSize(id) {
  return APP_STORE_INDEX.get(id) || null;
}

export function playStoreSize(id) {
  return PLAY_STORE_INDEX.get(id) || null;
}

export function requiredAppStoreSizes() {
  return APP_STORE_SIZES.filter((s) => s.required);
}

export function requiredPlayStoreSizes() {
  return PLAY_STORE_SIZES.filter((s) => s.required);
}

export default { APP_STORE_SIZES, PLAY_STORE_SIZES };
