# Continue Configuration

Continue is an open-source AI coding assistant extension that supports both VS Code and JetBrains IDEs.

## Install Extension

::: code-group
```bash [VS Code]
code --install-extension Continue.continue
```

```text [JetBrains]
Settings → Plugins → Marketplace → search "Continue" → Install
```
:::

## Configuration Steps

Edit the config file `~/.continue/config.yaml`:

```yaml
models:
  - model: gpt-4o
    title: GPT-4o (coolmoAI)
    provider: openai
    apiKey: sk-xxxxxxxxxxxx
    apiBase: https://coolmoai.cc/v1

  - model: claude-sonnet-4-20250514
    title: Claude 4 Sonnet (coolmoAI)
    provider: openai
    apiKey: sk-xxxxxxxxxxxx
    apiBase: https://coolmoai.cc/v1

  - model: claude-opus-4-20250514
    title: Claude 4 Opus (coolmoAI)
    provider: openai
    apiKey: sk-xxxxxxxxxxxx
    apiBase: https://coolmoai.cc/v1
```

::: tip
Continue automatically reloads after saving the config file — no IDE restart needed.
:::

## Configure Tab Autocomplete

To enable Tab autocomplete, add to `config.yaml`:

```yaml
tabAutocompleteModel:
  model: gpt-4o-mini
  title: Autocomplete (coolmoAI)
  provider: openai
  apiKey: sk-xxxxxxxxxxxx
  apiBase: https://coolmoai.cc/v1
```

## Verify Configuration

Press `Cmd + L` (macOS) or `Ctrl + L` (Windows/Linux) to open the Continue panel and send a message to test.
