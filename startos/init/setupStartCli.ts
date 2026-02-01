import { mkdir } from 'fs/promises'
import { sdk } from '../sdk'
import { startCliConfigYaml } from '../fileModels/startCliConfig.yaml'

export const setupStartCli = sdk.setupOnInit(async (effects) => {
  // Get the OS IP to construct the host URL
  const osIp = await sdk.getOsIp(effects)
  const hostUrl = `https://${osIp}`

  // Ensure .startos directory exists
  await mkdir(sdk.volumes.main.subpath('.startos'), { recursive: true })

  // Update start-cli config with host URL
  await startCliConfigYaml.merge(effects, { host: hostUrl })
})
