import { randomBytes } from 'crypto'
import { sdk } from '../sdk'
import { openclawConfigJson } from '../fileModels/openclawConfig.json'

const { InputSpec } = sdk

const inputSpec = InputSpec.of({})

export const generateGatewayToken = sdk.Action.withInput(
  'generate-gateway-token',

  async ({ effects }) => ({
    name: 'Generate Gateway Token',
    description:
      'Generate a new token for accessing the OpenClaw Gateway web interface. Running this action will replace any existing token. Copy the token when displayed — it will not be shown again.',
    warning:
      'This will invalidate any previously generated gateway token. You will need to re-authenticate in the web UI with the new token.',
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async () => ({}),

  async ({ effects }) => {
    const token = randomBytes(32).toString('hex')

    await openclawConfigJson.merge(effects, {
      gateway: {
        auth: {
          mode: 'token',
          token,
        },
        controlUi: {
          enabled: true,
          allowInsecureAuth: true,
        },
      },
    })

    return {
      version: '1',
      title: 'Gateway Token Generated',
      message: "Copy this token now. It will not be shown again. When the UI is launched for the first time, this key will need to be pasted in     Overview > Gateway Token. Finally click 'Connect'",
      result: {
        value: token,
        copyable: true,
        masked: true,
        qr: false,
        type: 'single'
      },
    }
  },
)
