import { sdk } from '../sdk'
import { configureApiCredentials } from './configureApiCredentials'
import { connectTelegram } from './connectTelegram'
import { connectWhatsapp } from './connectWhatsapp'
import { configureSynapse } from './configureSynapse'
import { loginToOs } from './loginToOs'

export const actions = sdk.Actions.of()
  .addAction(configureApiCredentials)
  .addAction(connectTelegram)
  .addAction(connectWhatsapp)
  // .addAction(configureSynapse)
  .addAction(loginToOs)
