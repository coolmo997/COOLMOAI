---
title: OpenAI、Claude、Gemini API 接入指南
description: 了解 coolmoAI 的 OpenAI 和 Anthropic 兼容接入方式、Base URL、API Key、模型核对和常见错误排查路径。
---

# OpenAI、Claude、Gemini API 接入指南

coolmoAI 的公开文档提供 OpenAI API 兼容接入示例，并提供 Anthropic 相关工具配置说明。页面标题中提到的模型或模型系列，不代表每个模型在所有账号、协议或时间点均可用。

> 接入前请以最新文档、控制台模型列表和 `/v1/models` 接口返回为准。

## OpenAI 兼容接口

OpenAI API 兼容文档提供以下内容：

- API Base URL 配置；
- `/v1/chat/completions` 请求方式；
- cURL、Python、Node.js 和 Go 示例；
- 非流式与流式输出说明；
- 请求字段和响应结构说明。

从[OpenAI API 概览](/guide/zh/openai-api/)开始，再查看 [Chat Completions](/guide/zh/openai-api/chat-completions)。

## Claude 与 Anthropic 接入

当前仓库包含 Claude Code 配置文档，使用 Anthropic 相关环境变量和配置方式。不同客户端对 Base URL、API 版本和模型字段的要求可能不同，请不要直接套用 OpenAI 工具的配置。

- [Claude Code 配置](/guide/zh/claude-code)
- [CC-MAX 站点接入](/guide/zh/cc-max)
- [Cherry Studio 配置](/guide/zh/cherry-studio)

## Gemini 接入前如何核对

当前公开文档没有单独的 Gemini 专属参数页面。需要使用 Gemini 或其他模型系列时，建议按以下顺序确认：

1. 在控制台或 `/v1/models` 响应中确认模型名称。
2. 确认账号是否有权限使用该模型。
3. 根据模型对应的协议选择 OpenAI 兼容或其他配置方式。
4. 使用最小请求验证模型、参数和返回格式。
5. 遇到错误时查看[常见问题](/guide/zh/faq)。

## Base URL 和 API Key

通用 OpenAI API 示例使用：

```text
Base URL: https://coolmoai.cc/v1
API Key: 从控制台创建并复制
```

Claude Code、ChatBox 和 Cherry Studio 等工具的地址格式可能不同，应以对应工具页面为准。API Key 不要写入公开仓库、截图或聊天记录。

## 常见错误排查

- `401 Unauthorized`：检查 API Key、空格、有效状态和模型权限。
- `429 Too Many Requests`：检查请求频率和账号可用额度，稍后重试。
- `502 / 503`：先确认上游服务状态；持续出现时按 FAQ 中的联系方式或维护流程处理。
- 模型不可用：核对模型名称、协议和账号权限。

## 相关入口

- [快速开始](/guide/zh/getting-started)
- [开发者 AI API 接入指南](/ai-api-for-developers)
- [常见问题](/guide/zh/faq)
- [注册 coolmoAI](https://coolmoai.cc/sign-up)
