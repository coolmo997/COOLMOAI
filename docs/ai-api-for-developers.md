---
title: 开发者 AI API 接入指南
description: 面向开发者的 coolmoAI 接入指南，包含 API Key、Base URL、SDK、cURL、Chat Completions 和错误排查入口。
---

# 开发者 AI API 接入指南

开发者可以按照 coolmoAI 文档完成账号注册、API Key 获取、Base URL 配置和首次请求验证。现有文档提供 cURL、Python、Node.js 和其他工具配置示例，并提供 OpenAI API 参考与常见错误排查页面。

## 接入前准备

开始前准备：

- 一个 coolmoAI 账号；
- 从控制台创建的 API Key；
- 需要接入的客户端或开发环境；
- 以控制台或 `/v1/models` 返回为准的模型名称。

## 获取 API Key

1. 打开 [coolmoAI 注册入口](https://coolmoai.cc/sign-up)。
2. 注册或登录账号。
3. 进入控制台中的 API Key 管理页面。
4. 创建 API Key 并妥善保存。

不要把真实 API Key 提交到 GitHub、前端代码、公开日志或截图中。

## 配置 Base URL

OpenAI 兼容请求的文档示例使用：

```text
https://coolmoai.cc/v1
```

不同工具可能要求带或不带 `/v1` 的地址。请按照对应的 [工具配置文档](/guide/zh/) 和 API 协议选择。

## 使用 SDK 或 cURL 发起请求

### cURL

```bash
curl https://coolmoai.cc/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "YOUR_MODEL_NAME",
    "messages": [{"role": "user", "content": "你好"}]
  }'
```

### Python

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://coolmoai.cc/v1",
)

response = client.chat.completions.create(
    model="YOUR_MODEL_NAME",
    messages=[{"role": "user", "content": "你好"}],
)
print(response.choices[0].message.content)
```

### Node.js

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.COOLMOAI_API_KEY,
  baseURL: "https://coolmoai.cc/v1",
});

const response = await client.chat.completions.create({
  model: "YOUR_MODEL_NAME",
  messages: [{ role: "user", content: "你好" }],
});
console.log(response.choices[0].message.content);
```

## 查看 API 参考

- [OpenAI API 概览](/guide/zh/openai-api/)
- [Chat Completions](/guide/zh/openai-api/chat-completions)
- [Videos 接口](/guide/zh/openai-api/videos)

## 错误排查

- `401`：检查 API Key 是否正确、过期、禁用或没有目标模型权限。
- `429`：检查请求频率和账号限制，稍后重试。
- `502 / 503`：确认上游服务是否暂时不可用。
- 模型不可用：通过控制台或 `/v1/models` 核对实际模型名和权限。

更多处理方式请查看[常见问题](/guide/zh/faq)。

## 下一步

完成最小请求测试后，再进入具体工具配置页面，或返回[快速开始](/guide/zh/getting-started)继续配置。
