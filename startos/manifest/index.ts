import { setupManifest } from '@start9labs/start-sdk'
import { i18n } from '../i18n'
import { short, long } from './i18n'
import { STARTOS_VERSION } from '../utils'

export const manifest = setupManifest({
  id: 'openclaw',
  title: 'OpenClaw',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/openclaw-startos',
  upstreamRepo: 'https://github.com/openclaw/openclaw',
  supportSite: 'https://github.com/openclaw/openclaw/issues',
  marketingSite: 'https://github.com/openclaw/openclaw',
  donationUrl: null,
  docsUrl:
    'https://github.com/Start9Labs/openclaw-startos/blob/master/docs/instructions.md',
  description: { short, long },
  volumes: ['main'],
  images: {
    openclaw: {
      source: {
        dockerBuild: {
          workdir: '.',
          buildArgs: {
            STARTOS_VERSION,
          },
        },
      },
      arch: ['x86_64'],
    },
  },
  alerts: {
    install: i18n(
      'Use ONLY with EXTREME Caution! Do NOT install OpenClaw on a server containing important services or data. DO NOT install OpenClaw on a server that has Bitcoin keys i.e. LND or CLN. OpenClaw uses an LLM of your choosing allowing it to run commands based on your prompts. In addition to privacy concerns when using OpenAI or Anthropic, OpenClaw can run destructive commands to uninstall other services, or could even brick your server.',
    ),
  },
  dependencies: {},
  // dependencies: {
  //   synapse: {
  //     description:
  //       'Used as a Matrix homeserver for multi-channel messaging.',
  //     optional: true,
  //     metadata: {
  //       title: 'Synapse Matrix Homeserver',
  //       icon: 'https://matrix.org/images/matrix-logo.svg',
  //     },
  //   },
  // },
})
