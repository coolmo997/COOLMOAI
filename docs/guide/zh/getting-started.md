# 快速开始

欢迎使用 coolmoAI，本指南帮助你快速接入各类 AI 编程工具。

## 基础信息

| 字段 | 值 |
|------|-----|
| API Base URL | `https://coolmoai.cc/v1` |
| API Key | 从控制台获取，格式：`sk-xxxxxxxxxxxx` |
| 支持协议 | OpenAI API 兼容 / Anthropic API 兼容 |
| 支持模型 | GPT-4o、GPT-4.1、Claude 4 Sonnet、Claude 4 Opus、Gemini 2.5 Pro 等 |

::: tip
任何支持 OpenAI API 格式的工具，只需替换 Base URL 和 API Key，即可接入本中转站。
:::

## 获取 API Key

1. 访问 [coolmoai.cc](https://coolmoai.cc) 控制台
2. 注册 / 登录
3. 进入「API Key 管理」页面
4. 点击「创建 API Key」并复制

::: warning
请妥善保管你的 API Key，不要在公开仓库或群组中暴露。
:::

## 验证连接

使用以下代码快速验证中转站是否正常工作：

::: code-group
```bash [cURL]
curl https://coolmoai.cc/v1/chat/completions \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "你好"}]
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
    messages=[{"role": "user", "content": "你好"}]
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
  messages: [{ role: "user", content: "你好" }],
});
console.log(response.choices[0].message.content);
```
:::
