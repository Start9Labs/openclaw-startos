import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string, boolean, literals, arrayOf } = matches

const shape = object({
  gateway: object({
    auth: object({
      mode: literals('token'),
      token: string,
    }),
    controlUi: object({
      enabled: boolean,
      allowInsecureAuth: boolean,
    }),
  }),
  agents: object({
    defaults: object({
      model: object({
        primary: string,
        fallbacks: arrayOf(string),
      }),
      heartbeat: object({
        every: string,
        target: string,
      }),
    }),
  }),
  skills: object({
    load: object({
      extraDirs: arrayOf(string),
    }),
  }),
})

export const openclawConfigJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '.openclaw/openclaw.json' },
  shape,
)
