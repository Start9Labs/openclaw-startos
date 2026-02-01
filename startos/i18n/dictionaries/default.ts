export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting OpenClaw Gateway!': 0,
  'Web Interface': 1,
  'OpenClaw Gateway is ready': 2,
  'OpenClaw Gateway is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The OpenClaw Gateway web interface providing WebChat and control panel': 5,

  // actions/configureApiCredentials.ts
  'Configure API Credentials': 6,
  'Configure your primary and optional fallback AI model, including provider credentials': 7,
  'API Key': 8,
  'Your Anthropic API key from console.anthropic.com': 9,
  'OAuth (Claude Pro/Max)': 10,
  'Access Token': 11,
  'OAuth access token from Claude Pro/Max subscription': 12,
  'Refresh Token': 13,
  'OAuth refresh token (optional)': 14,
  'Your OpenAI API key from platform.openai.com': 15,
  'OAuth (ChatGPT Plus)': 16,
  'OAuth access token from ChatGPT Plus subscription': 17,
  'Model': 18,
  'Select the Anthropic model to use': 19,
  'Authentication': 20,
  'How to authenticate with Anthropic': 21,
  'Select the OpenAI model to use': 22,
  'How to authenticate with OpenAI': 23,
  'Anthropic (Claude)': 24,
  'OpenAI': 25,
  'Disabled': 26,
  'Primary LLM': 27,
  'Select your primary AI model and provider': 28,
  'Fallback LLM (Optional)': 29,
  'Select a fallback AI model used when the primary is unavailable (rate limited, auth failure, etc.)': 30,

  // actions/generateGatewayToken.ts
  'Generate Gateway Token': 31,
  'Generate a new token for accessing the OpenClaw Gateway web interface. Running this action will replace any existing token. Copy the token when displayed — it will not be shown again.': 32,
  'This will invalidate any previously generated gateway token. You will need to re-authenticate in the web UI with the new token.': 33,
  'Gateway Token Generated': 34,
  "Copy this token now. It will not be shown again. When the UI is launched for the first time, this key will need to be pasted in     Overview > Gateway Token. Finally click 'Connect'": 35,

  // actions/loginToOs.ts
  'StartOS Master Password': 36,
  'Your StartOS server master password': 37,
  'Enter master password': 38,
  'Login to StartOS': 39,
  'Authenticate start-cli with your StartOS server': 40,
  'This will give root access to your StartOS server to this package. Only do this for a server designated for development purposes.': 41,
  'No host configured. The host URL is set automatically from the OS IP address.': 42,
  'Login Successful': 43,
  'start-cli is now authenticated with your StartOS server.': 44,

  // init/loginToOsTask.ts
  'Login to StartOS to enable start-cli authentication': 45,

  // init/initializeService.ts
  'Configure your AI provider credentials to use OpenClaw': 46,
  'Generate a gateway token to access the OpenClaw web interface': 47,

  // main.ts (check-login oneshot)
  'Login to StartOS to enable start-cli authentication for managing the server': 48,

  // manifest alerts
  'Use ONLY with EXTREME Caution! Do NOT install OpenClaw on a server containing important services or data. DO NOT install OpenClaw on a server that has Bitcoin keys i.e. LND or CLN. OpenClaw uses an LLM of your choosing allowing it to run commands based on your prompts. In addition to privacy concerns when using OpenAI or Anthropic, OpenClaw can run destructive commands to uninstall other services, or could even brick your server.': 49,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
