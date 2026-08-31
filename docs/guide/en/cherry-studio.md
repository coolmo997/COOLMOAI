# Cherry Studio Configuration

Cherry Studio is a feature-rich desktop AI client supporting multi-model chat, knowledge bases, AI image generation, and more.

## Download & Install

Visit the [Cherry Studio website](https://cherry-ai.com) to download and install.

## Configuration Steps

1. Open Cherry Studio → click the **Settings** icon on the left
2. Select the **Model Services** tab
3. Click **Add Custom Provider**, or select an existing OpenAI or Anthropic provider

   > Note: Use **Anthropic** for Claude models; use **OpenAI** for all other models

4. Fill in:

| Field | Value |
|-------|-------|
| Provider Name | `coolmoAI` (custom name) |
| API Address | `https://coolmoai.cc` |
| API Key | `sk-xxxxxxxxxxxx` |

5. Click **Add**
6. Copy a model name from the Model Marketplace
7. Click **Save**

::: tip
Cherry Studio supports multiple API providers simultaneously. You can freely switch between providers and models during a conversation.
:::

## Verify Configuration

Go back to the chat interface, switch to the newly configured model in the top right, and send a message to test.
