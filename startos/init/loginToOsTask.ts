import { sdk } from '../sdk'
import { loginToOs } from '../actions/loginToOs'
import { i18n } from '../i18n'

export const loginToOsTask = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  await sdk.action.createOwnTask(effects, loginToOs, 'critical', {
    reason: i18n('Login to StartOS to enable start-cli authentication'),
  })
})
