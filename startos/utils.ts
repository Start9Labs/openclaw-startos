// Here we define any constants or functions that are shared by multiple components
// throughout the package codebase.

import { sdk } from './sdk'

export const uiPort = 18789

// StartOS version for start-cli - update this to match your target StartOS version
export const STARTOS_VERSION = '0.4.0-alpha.18'

export function mainMounts() {
  return sdk.Mounts.of().mountVolume({
    volumeId: 'main',
    subpath: null,
    mountpoint: '/data',
    readonly: false,
  })
}
