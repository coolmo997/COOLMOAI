# Aider Configuration

Aider is a powerful terminal AI pair programming tool that collaborates with AI to modify code directly in your terminal.

## Install Aider

```bash
pip install aider-chat
```

## Method 1: Environment Variables (Recommended)

::: code-group
```bash [~/.zshrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_API_BASE="https://coolmoai.cc/v1"
```

```bash [~/.bashrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_API_BASE="https://coolmoai.cc/v1"
```
:::

Apply and start:

```bash
source ~/.zshrc
aider --model gpt-4o
```

## Method 2: Command Line Arguments

```bash
aider \
  --openai-api-key sk-xxxxxxxxxxxx \
  --openai-api-base https://coolmoai.cc/v1 \
  --model gpt-4o
```

## Method 3: Config File

Create `~/.aider.conf.yml`:

```yaml
openai-api-key: sk-xxxxxxxxxxxx
openai-api-base: https://coolmoai.cc/v1
model: gpt-4o
```

## Common Model Arguments

```bash
aider --model gpt-4o                    # GPT-4o
aider --model gpt-4.1                   # GPT-4.1
aider --model claude-sonnet-4-20250514  # Claude 4 Sonnet
```

## Verify Configuration

```bash
aider --model gpt-4o --message "Say hello"
```
