# Cursor Configuration

Cursor is the most popular AI code editor, deeply integrating AI capabilities based on VS Code, with support for custom OpenAI API endpoints.

## Method 1: Settings UI (Recommended)

1. Open Cursor → go to **Settings → Models**
2. Find the **OpenAI API Key** field and enter: `sk-xxxxxxxxxxxx`
3. Click **Override OpenAI Base URL** and enter: `https://coolmoai.cc/v1`
4. Check the models you want to use (e.g. gpt-4o, claude-sonnet-4-20250514)
5. Click the **Verify** button to test the connection

::: tip
If the model you need is not in the list, click **+ Add Model** to add it manually.
:::

## Method 2: Environment Variables

Add environment variables to your shell config file:

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

Reload and restart Cursor:

```bash
source ~/.zshrc
```

::: info
Environment variables affect all programs that read them. If you only want to configure Cursor, Method 1 is recommended.
:::

## Verify Configuration

After configuring, open a file in Cursor and press `Cmd + L` (macOS) or `Ctrl + L` (Windows/Linux) to open the Chat panel and send a message to test.
