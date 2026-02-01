import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string } = matches

// start-cli config.yaml shape - only validate what we care about
const shape = object({
  host: string.optional().onMismatch(undefined),
})

export const startCliConfigYaml = FileHelper.yaml(
  { base: sdk.volumes.main, subpath: '.startos/config.yaml' },
  shape,
)
