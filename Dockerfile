FROM node:22-bookworm

ARG STARTOS_VERSION

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    jq \
    && rm -rf /var/lib/apt/lists/*

# Install openclaw using the official install script (non-interactive)
ENV HOME=/opt/openclaw-home
RUN mkdir -p /opt/openclaw-home && \
    curl -fsSL https://openclaw.bot/install.sh | bash -s -- --no-prompt --no-onboard

# Install start-cli from StartOS release
RUN curl -fsSL "https://github.com/Start9Labs/start-os/releases/download/v${STARTOS_VERSION}/start-cli_$(uname -m)-linux" -o /usr/local/bin/start-cli \
    && chmod +x /usr/local/bin/start-cli

# Stage skill files (loaded via extraDirs in openclaw.json)
COPY skills/start-cli/SKILL.md /opt/skills/start-cli/SKILL.md

# Stage workspace bootstrap files
COPY workspace/SOUL.md /opt/workspace/SOUL.md
COPY workspace/IDENTITY.md /opt/workspace/IDENTITY.md
COPY workspace/MEMORY.md /opt/workspace/MEMORY.md
COPY workspace/HEARTBEAT.md /opt/workspace/HEARTBEAT.md

# Set runtime environment variables
ENV NODE_ENV=production
ENV HOME=/data
ENV OPENCLAW_STATE_DIR=/data/.openclaw
# Include openclaw binary paths - both npm global and where openclaw may install its native binary
ENV PATH="/opt/openclaw-home/.openclaw/bin:/usr/local/lib/node_modules/openclaw/bin:/usr/local/bin:$PATH"

WORKDIR /data

# The entrypoint will be provided by the StartOS daemon configuration
# Default command runs the gateway
CMD ["openclaw", "gateway", "--port", "18789", "--bind", "lan"]
