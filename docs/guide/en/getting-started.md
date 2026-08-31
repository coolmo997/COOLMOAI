# Getting Started

Welcome to coolmoAI. This guide will help you quickly connect to various AI coding tools.

## Basic Information

| Field | Value |
|-------|-------|
| API Base URL | `https://coolmoai.cc/v1` |
| API Key | Obtain from the console, format: `sk-xxxxxxxxxxxx` |
| Supported Protocols | OpenAI API compatible / Anthropic API compatible |
| Supported Models | GPT-4o, GPT-4.1, Claude 4 Sonnet, Claude 4 Opus, Gemini 2.5 Pro, etc. |

::: tip
Any tool that supports the OpenAI API format can connect to this relay by updating the Base URL and API Key.
:::

## Get an API Key

1. Visit the [coolmoAI Console](https://coolmoai.cc)
2. Register / Log in
3. Go to the **API Key Management** page
4. Click **Create API Key** and copy the generated key

::: warning
Keep your API Key safe. Do not expose it in public repositories or share it with others.
:::

## Verify Connection

Use the following code to quickly verify the relay is working:

::: code-group
```bash [cURL]
curl https://coolmoai.cc/v1/chat/completions \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxxxxxxxxxx",
    base_url="https://coolmoai.cc/v1",
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello"}]
)
print(response.choices[0].message.content)
```

```javascript [Node.js]
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "sk-xxxxxxxxxxxx",
  baseURL: "https://coolmoai.cc/v1",
});

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello" }],
});
console.log(response.choices[0].message.content);
```

```go [Go]
package main

import (
    "context"
    "fmt"
    openai "github.com/sashabaranov/go-openai"
)

func main() {
    config := openai.DefaultConfig("sk-xxxxxxxxxxxx")
    config.BaseURL = "https://coolmoai.cc/v1"
    client := openai.NewClientWithConfig(config)

    resp, err := client.CreateChatCompletion(
        context.Background(),
        openai.ChatCompletionRequest{
            Model: openai.GPT4o,
            Messages: []openai.ChatCompletionMessage{
                {Role: openai.ChatMessageRoleUser, Content: "Hello"},
            },
        },
    )
    if err != nil {
        panic(err)
    }
    fmt.Println(resp.Choices[0].Message.Content)
}
```
:::
