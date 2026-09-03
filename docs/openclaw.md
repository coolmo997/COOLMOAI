---
title: OpenClaw 接入 coolmoAI
description: OpenClaw 接入 coolmoAI 的配置前检查和文档入口。具体协议、字段与模型设置需以经核对的专项文档为准。
---

# OpenClaw 接入 coolmoAI

当前 GitHub 文档仓库尚未提供 OpenClaw 专属配置文件、参数表或经过核对的完整接入步骤。因此，本页先作为公开入口，提供通用 API 接入前检查项，不把 OpenClaw 的具体兼容性描述为已验证事实。

> 如果你需要完整的 OpenClaw 教程，请先确认 OpenClaw 的协议、配置字段、Base URL 格式和模型设置。

## 接入前检查

1. 确认 OpenClaw 支持的 API 协议。
2. 从 coolmoAI 控制台创建 API Key。
3. 根据协议选择对应的 Base URL。
4. 从控制台或 `/v1/models` 响应中确认模型名称。
5. 先执行一个最小请求，再进行复杂工作流配置。

## 通用 OpenAI 兼容信息

如果 OpenClaw 使用 OpenAI API 兼容协议，可先参考：

```text
Base URL: https://coolmoai.cc/v1
API Key: 从控制台获取
```

这段信息不替代 OpenClaw 官方配置说明。OpenClaw 可能对字段名称、路径或鉴权方式有自己的要求。

## 如何验证连接

- 使用有效 API Key；
- 使用控制台中确认可用的模型名称；
- 发送最小请求；
- 保存错误码和响应摘要，不要公开 API Key；
- 根据错误码查看 [常见问题](/guide/zh/faq)。

## 相关文档

- [快速开始](/guide/zh/getting-started)
- [开发者 AI API 接入指南](/ai-api-for-developers)
- [OpenAI API 概览](/guide/zh/openai-api/)
- [常见问题](/guide/zh/faq)
- [注册 coolmoAI](https://coolmoai.cc/sign-up)

如需补充 OpenClaw 专项配置，建议以 OpenClaw 官方文档和实际测试结果为事实来源。
