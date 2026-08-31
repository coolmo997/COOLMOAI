# Chat Completions

`/v1/chat/completions` 兼容 OpenAI Chat Completions API，适合复用已有 SDK、HTTP 客户端或第三方工具。

::: tip
OpenAI 现在推荐新项目使用 Responses API，但 Chat Completions 仍是已有项目平滑迁移的标准兼容接口。
:::

## 端点

```
POST https://coolmoai.cc/v1/chat/completions
```

## 常用请求字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `model` | 是 | 模型名称，如 `gpt-4o` |
| `messages` | 是 | 对话消息数组（至少一条）|
| `temperature` | 否 | 采样温度 |
| `max_tokens` | 否 | 最大输出 token 数 |
| `stream` | 否 | 启用流式输出；为 true 时返回 SSE 流 |

## 响应示例

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
      "content": "你好！有什么可以帮你的？"
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

## SDK 示例

::: code-group
```python [Python]
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxxxxxxxxxx",
    base_url="https://coolmoai.cc/v1",
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "你好！"}]
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
  messages: [{ role: "user", content: "你好！" }],
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
                {Role: openai.ChatMessageRoleUser, Content: "你好！"},
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
    "messages": [{"role": "user", "content": "你好！"}]
  }'
```
:::

## 流式输出

在请求体中添加 `"stream": true` 即可启用：

::: code-group
```python [Python]
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "你好！"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

```javascript [Node.js]
const stream = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "你好！" }],
  stream: true,
});
for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}
```
:::
