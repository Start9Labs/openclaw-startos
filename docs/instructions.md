# Instructions for OpenClaw on StartOS

OpenClaw is a personal AI assistant framework that runs on your own devices. It provides a unified control plane (Gateway) that connects to multiple messaging channels, AI models, and features a web-based chat interface.

## Initial Setup

1. After installing OpenClaw, access the Web UI from the service's interface page.

2. On first launch, you'll need to configure your AI provider credentials:
   - **Anthropic (Claude)**: Provide your Anthropic API key or authenticate via Claude Pro/Max OAuth
   - **OpenAI (ChatGPT)**: Provide your OpenAI API key

3. The configuration is stored persistently in the data volume and will be preserved across restarts and updates.

## Features

- **WebChat Interface**: A browser-based chat interface for interacting with your AI assistant
- **Multi-Agent Routing**: Support for isolated workspaces and multiple agents
- **Messaging Integrations**: Connect WhatsApp, Telegram, Slack, Discord, Signal, and more
- **Voice Control**: Optional voice wake and talk mode (requires additional configuration)
- **Browser Automation**: Canvas UI rendering capabilities

## Configuration

The Gateway configuration file is located at `/data/.openclaw/openclaw.json`. You can modify settings through the web interface or by editing this file directly.

Example minimal configuration:
```json
{
  "agent": {
    "model": "anthropic/claude-opus-4-5"
  }
}
```

## Security

- By default, the Gateway uses DM pairing mode, requiring approval codes for unknown senders
- Per-session sandbox mode is available for group/channel safety
- All data is stored locally on your StartOS server

## Troubleshooting

- If the service fails to start, check that you have sufficient memory available (recommended: 2GB+)
- For messaging integration issues, ensure the respective channel configurations are correct
- Check the service logs through the StartOS interface for detailed error messages

## Resources

- [OpenClaw GitHub Repository](https://github.com/openclaw/openclaw)
- [StartOS Documentation](https://docs.start9.com/)
