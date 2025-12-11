import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'hello-world',
  title: 'Hello World',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-startos',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  docsUrl:
    'https://github.com/Start9Labs/hello-world-startos/blob/master/instructions.md',
  description: {
    short: 'Bare bones example of a StartOS service',
    long: 'Hello World is a template service that provides examples of basic StartOS features.',
  },
  volumes: ['main'],
  images: {
    'hello-world': {
      source: { dockerTag: 'start9/hello-world' },
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
