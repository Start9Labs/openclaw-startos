import { sdk } from '../sdk'
import { loginToOs } from '../actions/loginToOs'

export const loginToOsTask = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  await sdk.action.createOwnTask(effects, loginToOs, 'critical', {
    reason: 'Login to StartOS to enable start-cli authentication',
  })
})
