import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object, string, some, literals, number, any } = matches

// Auth Profiles: ~/.openclaw/agents/<agentId>/agent/auth-profiles.json

// Default agent ID - openclaw uses 'main' for the primary agent
export const defaultAgentId = 'main'

// OpenClaw profile types
const tokenProfileShape = object({
  type: literals('token'),
  provider: string,
  token: string,
})

const oauthProfileShape = object({
  type: literals('oauth'),
  provider: string,
  access: string,
  refresh: string.optional(),
  expires: number.optional(),
})

const profileShape = some(tokenProfileShape, oauthProfileShape)

// The file has a top-level "profiles" key with "provider:label" entries
const shape = object({
  profiles: any,
})

export const authProfilesJson = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: `.openclaw/agents/${defaultAgentId}/agent/auth-profiles.json`,
  },
  shape,
)

// Type exports for use in actions
export type TokenProfile = {
  type: 'token'
  provider: string
  token: string
}

export type OAuthProfile = {
  type: 'oauth'
  provider: string
  access: string
  refresh?: string
  expires?: number
}

export type AuthProfile = TokenProfile | OAuthProfile

export type AuthProfilesFile = {
  profiles: Record<string, AuthProfile>
}
