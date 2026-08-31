# Chat Completions

`/v1/chat/completions` is compatible with the OpenAI Chat Completions API, ideal for reusing existing SDKs, HTTP clients, or third-party tools.

::: tip
OpenAI now recommends the Responses API for new projects, but Chat Completions remains the standard compatible interface for smooth integration of existing projects.
:::

## Endpoint

```
POST https://coolmoai.cc/v1/chat/completions
```

## Common Request Fields

| Field | Required | Description |
|-------|----------|-------------|
| `model` | Yes | Model name, e.g. `gpt-4o` |
| `messages` | Yes | Array of conversation messages (at least one) |
| `temperature` | No | Sampling temperature |
| `max_tokens` | No | Maximum output tokens |
| `stream` | No | Enable streaming; returns SSE stream when true |

## Response Example

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1738960610,
  "model": "gpt-4o-2024-08-06",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 13,
    "completion_tokens": 9,
    "total_tokens": 22
  }
}
```

## SDK Examples

::: code-group
```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxxxxxxxxxx",
    base_url="https://coolmoai.cc/v1",
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}]
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
  messages: [{ role: "user", content: "Hello!" }],
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

    resp, _ := client.CreateChatCompletion(
        context.Background(),
        openai.ChatCompletionRequest{
            Model: openai.GPT4o,
            Messages: []openai.ChatCompletionMessage{
                {Role: openai.ChatMessageRoleUser, Content: "Hello!"},
            },
        },
    )
    fmt.Println(resp.Choices[0].Message.Content)
}
```

```bash [cURL]
curl https://coolmoai.cc/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```
:::

## Streaming

Add `"stream": true` to enable streaming:

::: code-group
```python [Python]
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

```javascript [Node.js]
const stream = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello!" }],
  stream: true,
});
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}
```

```bash [cURL]
curl https://coolmoai.cc/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'
```
:::
