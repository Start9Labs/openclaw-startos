<p align="center">
  <img src="icon.png" alt="OpenClaw Logo" width="21%">
</p>

# OpenClaw for StartOS

This repository packages [OpenClaw](https://github.com/openclaw/openclaw) for StartOS.

OpenClaw is a personal AI assistant framework that runs on your own devices. It provides a unified control plane (Gateway) that connects to multiple messaging channels (WhatsApp, Telegram, Slack, Discord, Signal, and more), AI models (Claude, ChatGPT), and features a web-based chat interface.

## Features

- **WebChat Interface**: Browser-based chat for interacting with your AI assistant
- **Multi-Channel Support**: Connect WhatsApp, Telegram, Slack, Discord, Signal, and more
- **AI Model Integration**: Works with Anthropic (Claude) and OpenAI (ChatGPT)
- **Self-Hosted**: All data stays on your StartOS server

## Building from source

1. Set up your [environment](https://docs.start9.com/packaging-guide/environment-setup.html).

1. Clone this repository and `cd` into it.

1. Run `make`.

1. The resulting `.s9pk` can be side loaded into StartOS.

For a complete list of build options, see the [docs](https://docs.start9.com/packaging-guide/building.html)
