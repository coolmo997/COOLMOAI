# Cline Configuration

Cline is a popular AI coding extension for VS Code that supports autonomous code writing, command execution, and file management.

## Install Extension

Search for **Cline** in the VS Code Extension Marketplace, or install via CLI:

```bash
code --install-extension saoudrizwan.claude-dev
```

## Configuration Steps

1. After installation, click the **Cline** icon in the sidebar
2. Click the **Settings** icon in the top right
3. Select **OpenAI Compatible** in the API Provider dropdown
4. Fill in the following:

| Field | Value |
|-------|-------|
| Base URL | `https://coolmoai.cc/v1` |
| API Key | `sk-xxxxxxxxxxxx` |
| Model ID | Model name, e.g. `claude-sonnet-4-20250514` |

5. Click **Save**

## Model Recommendations

| Use Case | Model |
|----------|-------|
| Daily coding | `gpt-4o` or `claude-sonnet-4-20250514` (best value) |
| Complex tasks | `claude-opus-4-20250514` or `gpt-4.1` (more powerful) |

## Verify Configuration

Send a message in the Cline panel. If you receive a normal response, the configuration is successful.
