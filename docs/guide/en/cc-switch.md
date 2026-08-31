# CC Switch Configuration

CC Switch is a cross-platform desktop tool for managing and switching API configurations across multiple AI coding assistants (Claude Code, Codex, OpenCode, Gemini CLI, etc.) with one click.

## Installation

::: code-group
```bash [macOS (Homebrew)]
brew tap farion1231/ccswitch
brew install --cask cc-switch
```
:::

Or download the installer directly from the [Releases page](https://github.com/farion1231/ccswitch/releases):

| OS | Package |
|----|---------|
| Windows | `.msi` installer or portable `.zip` |
| macOS | `.dmg` (signed) |
| Linux | `.deb` / `.rpm` / `.AppImage` |

## Add a Custom Provider

1. Open CC Switch → click **Add Provider**
2. Set type to **Custom**
3. Fill in:

| Field | Value |
|-------|-------|
| Name | Custom name, e.g. `coolmoAI` |
| Base URL | `https://coolmoai.cc` |
| API Key | `sk-xxxxxxxxxxxx` |

4. Click **Save**
5. Enable the provider on the main screen
6. Restart your terminal or CLI tool for the config to take effect

::: tip No /v1 needed for Base URL
CC Switch automatically appends `/v1`. Just enter the domain — no suffix required.
:::

## Supported Tools

Once configured, CC Switch can manage API configurations for:

- **Claude Code** — Anthropic official CLI
- **Codex** — OpenAI CLI
- **OpenCode** — Open-source AI coding assistant
- **Gemini CLI** — Google Gemini CLI

After switching providers, tools automatically pick up the new config. Claude Code supports hot-switching without restart.
