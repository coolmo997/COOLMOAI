---
title: 什么是 coolmoAI
description: 了解 coolmoAI 的定位、文档范围、API Key、Base URL 和开发者接入路径。实际可用模型与服务限制以最新文档和控制台为准。
---

# 什么是 coolmoAI

coolmoAI 是面向开发者的 AI API 接入服务。当前公开文档提供 OpenAI API 兼容和 Anthropic API 兼容的接入说明，并提供 API Key、Base URL、工具配置、API 参考和常见错误排查内容。

> 实际可用模型、账号权限、接口参数和服务限制，以最新文档、控制台显示和接口返回为准。

## coolmoAI 可以做什么

- 通过控制台获取和管理 API Key。
- 根据文档配置 API Base URL。
- 使用 cURL、Python、Node.js 等方式验证 API 请求。
- 参考 OpenAI API 兼容接口文档完成 Chat Completions 调用。
- 按照工具文档配置 Cursor、Claude Code、Cline、Continue、Aider、Codex、Windsurf、ChatBox 和 Cherry Studio 等工具。
- 使用 FAQ 排查常见的 401、429、502 和 503 错误。

## 如何开始使用

1. 进入 [注册入口](https://coolmoai.cc/sign-up) 创建账号或登录已有账号。
2. 按照[快速开始](/guide/zh/getting-started)获取 API Key，并核对 Base URL。
3. 选择对应的 [工具配置文档](/guide/zh/)。
4. 通过[接口参考](/guide/zh/openai-api/)和示例完成最小请求测试。
5. 如果请求失败，先查看[常见问题](/guide/zh/faq)。

## 支持的接入方式

### OpenAI API 兼容接入

现有文档提供 `/v1/chat/completions` 的请求、响应、SDK 和 cURL 示例。具体兼容端点、字段和模型名称请以 API 参考和接口返回为准。

### Anthropic API 兼容接入

现有快速开始文档和 Claude Code 配置文档提供 Anthropic 相关接入说明。不同工具的 Base URL、环境变量和配置字段可能不同，请按对应工具页面操作。

### 工具配置

文档站提供多个 AI 编辑器、命令行工具、IDE 插件和桌面客户端的配置入口。每个工具的配置方式以对应页面为准，不同工具不要直接复用同一组字段。

## 使用边界

本页只说明公开文档中已经出现的接入路径，不承诺所有模型、所有参数或所有第三方工具都具有相同兼容范围。价格、额度、模型可用性、权限和其他服务条件不在本页固定描述。

如需了解具体配置，请进入：

- [快速开始](/guide/zh/getting-started)
- [OpenAI API 概览](/guide/zh/openai-api/)
- [常见问题](/guide/zh/faq)
- [开发者 AI API 接入指南](/ai-api-for-developers)
