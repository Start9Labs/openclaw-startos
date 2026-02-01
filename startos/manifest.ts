import { setupManifest } from '@start9labs/start-sdk'
import { STARTOS_VERSION } from './utils'

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
  description: {
    short: 'Personal AI assistant that runs on your own devices',
    long: 'OpenClaw is a personal AI assistant framework that feels local, fast, and always-on. It provides a unified control plane (Gateway) that connects to multiple messaging channels (WhatsApp, Telegram, Slack, Discord, Signal, and more), AI models (Claude, ChatGPT), and features voice control, browser automation, and a web-based chat interface.',
  },
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
    },
  },
  alerts: {
    install:
      'Use ONLY with EXTREME Caution! Do NOT install OpenClaw on a server containing important services or data. DO NOT install OpenClaw on a server that has Bitcoin keys i.e. LND or CLN. OpenClaw uses an LLM of your choosing allowing it to run commands based on your prompts. In addition to privacy concerns when using OpenAI or Anthropic, OpenClaw can run destructive commands to uninstall other services, or could even brick your server.',
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
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
