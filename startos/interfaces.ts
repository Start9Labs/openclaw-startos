import { sdk } from './sdk'
import { uiPort } from './utils'
import { i18n } from './i18n'
import { openclawJson } from './fileModels/openclaw.json'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, 'ui-multi')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
  })
  const ui = sdk.createInterface(effects, {
    name: i18n('Web UI'),
    id: 'ui',
    description: i18n(
      'The OpenClaw Gateway web interface providing WebChat and control panel',
    ),
    type: 'ui',
    masked: true,
    schemeOverride: null,
    username: null,
    path: '',
    query: {
      token:
        (await openclawJson.read((o) => o.gateway.auth.token).const(effects)) ||
        '',
    },
  })

  const uiReceipt = await uiMultiOrigin.export([ui])

  return [uiReceipt]
})
