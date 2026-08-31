# Windsurf Configuration

Windsurf is Codeium's AI code editor (formerly Codeium Editor) with a built-in Cascade AI assistant.

## Configuration Steps

1. Open Windsurf → **Settings**
2. Search for `openai` settings
3. Fill in:
   - **API Key**: `sk-xxxxxxxxxxxx`
   - **Base URL**: `https://coolmoai.cc/v1`
4. Select the model you want to use

## Environment Variables

You can also configure via environment variables:

::: code-group
```bash [~/.zshrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_BASE_URL="https://coolmoai.cc/v1"
```

```bash [~/.bashrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_BASE_URL="https://coolmoai.cc/v1"
```
:::

Restart Windsurf after configuration.

::: tip
Windsurf supports both its built-in Cascade models and custom API models. After configuring the relay, you can switch between different models freely.
:::
