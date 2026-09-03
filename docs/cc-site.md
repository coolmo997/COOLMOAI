---
title: CC-SITE 接入 coolmoAI
description: CC-SITE 接入 coolmoAI 的配置前检查和文档入口。具体协议、字段与模型设置需以经核对的专项文档为准。
---

# CC-SITE 接入 coolmoAI

当前 GitHub 文档仓库没有 CC-SITE 专属页面或经过核对的配置说明。本页不推断 CC-SITE 与 CC-MAX、Claude Code 或其他工具之间的关系，只提供通用 API 接入文档入口和配置核对清单。

> 在发布 CC-SITE 专项教程前，应先确认其官方协议、配置字段、Base URL、鉴权方式和模型字段。

## 配置前检查

- CC-SITE 支持哪一种 API 协议？
- Base URL 是否需要 `/v1`？
- API Key 应配置在哪个字段？
- 模型名称从哪里获取？
- 是否存在独立的超时、流式输出或代理设置？

## 通用接入路径

1. 进入 [注册入口](https://coolmoai.cc/sign-up) 注册或登录。
2. 在控制台创建 API Key。
3. 参考[快速开始](/guide/zh/getting-started)确认协议和 Base URL。
4. 在 CC-SITE 中填入经过核对的 API Key、地址和模型名。
5. 先发送最小请求，再配置完整使用场景。

如果 CC-SITE 使用 OpenAI API 兼容协议，可以先阅读 [OpenAI API 概览](/guide/zh/openai-api/)，但不要在未核对前直接套用其全部字段。

## 错误排查入口

- `401`：检查 API Key 和权限。
- `429`：检查请求频率或账号限制。
- `502 / 503`：确认上游服务和请求配置。
- 模型不可用：检查模型名称、协议和账号可用范围。

详细排查请参考[常见问题](/guide/zh/faq)。

## 相关文档

- [开发者 AI API 接入指南](/ai-api-for-developers)
- [快速开始](/guide/zh/getting-started)
- [工具配置文档](/guide/zh/)
- [API 参考](/guide/zh/openai-api/)

如需将本页扩展为完整教程，请以 CC-SITE 的官方配置资料或实测结果补充事实。
