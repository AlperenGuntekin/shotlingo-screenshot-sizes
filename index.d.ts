export interface Dimensions {
  width: number;
  height: number;
}

export interface AppStoreSize {
  id: string;
  label: string;
  devices: string[];
  portrait: Dimensions | null;
  landscape: Dimensions | null;
  minRequired: number;
  maxAllowed: number;
  required: boolean;
  notes: string;
}

export interface PlayStoreSize {
  id: string;
  label: string;
  minRequired: number;
  maxAllowed: number;
  aspectRatio: string;
  minSide: number;
  maxSide: number;
  required: boolean;
  notes: string;
}

export const APP_STORE_SIZES: AppStoreSize[];
export const PLAY_STORE_SIZES: PlayStoreSize[];

export function appStoreSize(id: string): AppStoreSize | null;
export function playStoreSize(id: string): PlayStoreSize | null;
export function requiredAppStoreSizes(): AppStoreSize[];
export function requiredPlayStoreSizes(): PlayStoreSize[];

declare const _default: {
  APP_STORE_SIZES: AppStoreSize[];
  PLAY_STORE_SIZES: PlayStoreSize[];
};
export default _default;
