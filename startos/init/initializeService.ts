import { randomBytes } from 'crypto'
import { mkdir } from 'fs/promises'
import { sdk } from '../sdk'
import { defaultAgentId } from '../fileModels/authProfiles.json'
import { openclawConfigJson } from '../fileModels/openclawConfig.json'
import { configureApiCredentials } from '../actions/configureApiCredentials'
import { generateGatewayToken } from '../actions/generateGatewayToken'
import { i18n } from '../i18n'

export const initializeService = sdk.setupOnInit(async (effects, kind) => {
  // Always update workspace bootstrap files on install and upgrade
  await mkdir(sdk.volumes.main.subpath('.openclaw/workspace/memory'), {
    recursive: true,
  })
  await sdk.SubContainer.withTemp(
    effects,
    { imageId: 'openclaw' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/data',
      readonly: false,
    }),
    'copy-soul',
    async (subc) => {
      await subc.execFail(
        [
          'cp',
          '/opt/workspace/SOUL.md',
          '/opt/workspace/IDENTITY.md',
          '/opt/workspace/HEARTBEAT.md',
          '/data/.openclaw/workspace/',
        ],
        { user: 'root' },
      )
      // Only seed MEMORY.md if it doesn't already exist, to preserve accumulated memories
      await subc.exec(
        [
          'sh',
          '-c',
          'test -f /data/.openclaw/workspace/MEMORY.md || cp /opt/workspace/MEMORY.md /data/.openclaw/workspace/MEMORY.md',
        ],
        { user: 'root' },
      )
    },
  )

  if (kind !== 'install') return

  // Create required directory structure for openclaw
  await mkdir(
    sdk.volumes.main.subpath(`.openclaw/agents/${defaultAgentId}/agent`),
    { recursive: true },
  )
  await mkdir(sdk.volumes.main.subpath('.openclaw/credentials'), {
    recursive: true,
  })

  // Generate initial gateway auth token
  const token = randomBytes(32).toString('hex')
  await openclawConfigJson.write(effects, {
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
    agents: {
      defaults: {
        model: {
          primary: 'anthropic/claude-sonnet-4-5',
          fallbacks: [],
        },
        heartbeat: {
          every: '24h',
          target: 'none',
        },
      },
    },
    skills: {
      load: {
        extraDirs: ['/opt/skills'],
      },
    },
  })

  // Don't initialize auth profiles - let openclaw handle defaults

  // Create a task prompting user to configure API credentials
  await sdk.action.createOwnTask(effects, configureApiCredentials, 'critical', {
    reason: i18n('Configure your AI provider credentials to use OpenClaw'),
  })

  // Create a task prompting user to generate a gateway token (so they can see it)
  await sdk.action.createOwnTask(effects, generateGatewayToken, 'critical', {
    reason: i18n(
      'Generate a gateway token to access the OpenClaw web interface',
    ),
  })
})
