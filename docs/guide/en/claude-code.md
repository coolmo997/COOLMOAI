# Claude Code Configuration

Claude Code is Anthropic's official CLI AI coding assistant that lets you write, debug, and refactor code directly in your terminal.

## Prerequisites

Make sure Claude Code CLI is installed:

```bash
npm install -g @anthropic-ai/claude-code
```

## Method 1: Environment Variables (Recommended)

Add to your shell config file:

::: code-group
```bash [~/.zshrc]
export ANTHROPIC_BASE_URL="https://coolmoai.cc"
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx"
```

```bash [~/.bashrc]
export ANTHROPIC_BASE_URL="https://coolmoai.cc"
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx"
```
:::

Apply and start:

```bash
source ~/.zshrc
claude
```

## Method 2: Inline at Launch

Useful for temporary use or multi-account switching:

```bash
ANTHROPIC_BASE_URL="https://coolmoai.cc" \
ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx" \
claude
```

## Method 3: Config File

Edit `~/.claude/settings.json`:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://coolmoai.cc",
    "ANTHROPIC_API_KEY": "sk-xxxxxxxxxxxx"
  }
}
```

::: info Priority
Launch args > Environment variables > Config file. Higher priority overrides lower priority.
:::

::: warning Important
`ANTHROPIC_BASE_URL` does **not** need a `/v1` suffix — Claude Code appends the path automatically. This differs from OpenAI's `OPENAI_BASE_URL`.
:::

## Verify Configuration

After starting Claude Code, send a simple question to test:

```bash
claude "Hello, please reply in English"
```

If you receive a normal response, the configuration is successful.
