# CC-MAX Site Integration

CC-MAX is coolmoAI's dedicated high-speed access node, providing a more stable connection experience for heavy users.

## How to Connect

Simply replace the Base URL in all your tools with the CC-MAX node address.

::: code-group
```bash [Environment Variables]
# Claude Code
export ANTHROPIC_BASE_URL="https://coolmoai.cc"
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx"

# OpenAI-compatible tools
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_BASE_URL="https://coolmoai.cc/v1"
```
:::

::: tip
CC-MAX nodes use the same API Key as the default node — no additional application needed.
:::

## Comparison with Default Node

| | Default Node | CC-MAX Node |
|--|--|--|
| Address | `coolmoai.cc` | `coolmoai.cc` (same) |
| Use Case | Daily usage | High-frequency / Professional |
| Stability | Standard | Optimized |
