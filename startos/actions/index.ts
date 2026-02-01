import { sdk } from '../sdk'
import { configureApiCredentials } from './configureApiCredentials'
import { configureSynapse } from './configureSynapse'
import { generateGatewayToken } from './generateGatewayToken'
import { loginToOs } from './loginToOs'

export const actions = sdk.Actions.of()
  .addAction(configureApiCredentials)
  // .addAction(configureSynapse)
  .addAction(generateGatewayToken)
  .addAction(loginToOs)
