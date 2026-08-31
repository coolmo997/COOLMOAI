# Codex CLI Guide

This guide walks you through using Codex CLI locally and connecting it to the coolmoAI API.

## What is Codex CLI

Codex CLI is a local terminal AI coding assistant that helps you with:
- Code generation
- Code modification
- Automated command execution
- Project analysis

## Prerequisites

### 1. Install Node.js

Recommended: Node.js 20 or higher. Download: [nodejs.org](https://nodejs.org)

### 2. Install Codex CLI

```bash
npm install -g @openai/codex
```

Verify installation:

```bash
codex --version
```

## Configure API

### Config File Location

Default paths:

| OS | Path |
|----|------|
| Windows | `C:\Users\<username>\.codex\config.toml` |
| macOS / Linux | `~/.codex/config.toml` |

### Basic Configuration

Edit `config.toml`:

```toml
model = "gpt-4o"

[model_providers.default]
name = "default"
base_url = "https://coolmoai.cc/v1"
env_key = "OPENAI_API_KEY"
```

### Set API Key

::: code-group
```bash [macOS / Linux]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
```

```powershell [Windows (PowerShell)]
setx OPENAI_API_KEY "sk-xxxxxxxxxxxx"
```
:::

## Start Codex

Navigate to your project:

```bash
cd your-project
codex
```

## Basic Usage

```bash
codex                              # Interactive mode
codex "Write a Python web scraper"  # Single command
codex -m gpt-4o "Optimize this code"  # Specify model
```

## Advanced: Multiple Models

```toml
model = "gpt-4o"

[model_providers.main]
base_url = "https://coolmoai.cc/v1"
env_key = "OPENAI_API_KEY"

[models]
gpt-4o = { provider = "main" }
gpt-4.1 = { provider = "main" }
```

## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| 401 / 403 | API Key incorrect or invalid | Check key and env var |
| 404 | Wrong API address | Verify URL includes `/v1` |
| Model unavailable | Wrong model name or no access | Check model name in console |
