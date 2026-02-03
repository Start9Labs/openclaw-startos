import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string, boolean, literal, arrayOf } = matches

const telegramChannelShape = object({
  enabled: boolean,
  botToken: string.optional().onMismatch(undefined),
  dmPolicy: string.optional().onMismatch(undefined),
})

const whatsappChannelShape = object({
  dmPolicy: string.optional().onMismatch(undefined),
  allowFrom: arrayOf(string).optional().onMismatch(undefined),
})

const channelsShape = object({
  telegram: telegramChannelShape.optional().onMismatch(undefined),
  whatsapp: whatsappChannelShape.optional().onMismatch(undefined),
})

const shape = object({
  gateway: object({
    auth: object({
      mode: literal('token'),
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
  channels: channelsShape.optional().onMismatch(undefined),
})

export const openclawJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '.openclaw/openclaw.json' },
  shape,
)
