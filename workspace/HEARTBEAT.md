## Instructions

On each heartbeat tick, run the following `start-cli` commands to check the current server state, then update MEMORY.md with the results.

### Commands to run

1. `start-cli server metrics` — CPU, RAM, disk, temperature
2. `start-cli server time` — uptime
3. `start-cli package list` — installed packages and their status
4. `start-cli package stats` — per-package resource usage
5. `start-cli notification list` — recent notifications
6. `start-cli net tor list-services` — onion addresses
7. `start-cli net gateway list` — network gateways
8. `start-cli disk list` — disk usage
9. `start-cli backup target list` — backup targets

### After running the commands

Replace the `## Server State Snapshot` section in MEMORY.md with the new results. Keep all other content in MEMORY.md unchanged. Use this format:

```markdown
## Server State Snapshot

_Captured at heartbeat: <current timestamp>_

### Server Metrics
<output>

### Server Time
<output>

(... one subsection per command ...)
```

If MEMORY.md does not yet have a `## Server State Snapshot` section, append it to the end of the file.
