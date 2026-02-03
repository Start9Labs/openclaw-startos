import { VersionInfo } from '@start9labs/start-sdk'

export const v_2026_2_1_0_a0 = VersionInfo.of({
  version: '2026.2.1:0-alpha.0',
  releaseNotes: {
    en_US:
      'Update to OpenClaw 2026.2.1: agent system improvements (Pi AI 0.50.9), TLS 1.3 minimum, security fixes, improved Telegram and Discord channel handling.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
