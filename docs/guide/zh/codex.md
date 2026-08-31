# Codex CLI 使用指南

本指南帮助你在本地使用 Codex CLI 并接入 coolmoAI API。

## 什么是 Codex CLI

Codex CLI 是一款本地终端 AI 编程助手，可以帮助你：
- 生成代码
- 修改代码
- 自动执行命令
- 分析项目

## 前提条件

### 1. 安装 Node.js

推荐 Node.js 20 或更高版本。下载：[nodejs.org](https://nodejs.org)

### 2. 安装 Codex CLI

```bash
npm install -g @openai/codex
```

验证安装：

```bash
codex --version
```

## 配置 API

### 配置文件位置

| 操作系统 | 路径 |
|---------|------|
| Windows | `C:\Users\<用户名>\.codex\config.toml` |
| macOS / Linux | `~/.codex/config.toml` |

### 基础配置

编辑 `config.toml`：

```toml
model = "gpt-4o"

[model_providers.default]
name = "default"
base_url = "https://coolmoai.cc/v1"
env_key = "OPENAI_API_KEY"
```

### 设置 API Key

::: code-group
```bash [macOS / Linux]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
```

```powershell [Windows (PowerShell)]
setx OPENAI_API_KEY "sk-xxxxxxxxxxxx"
```
:::

## 启动 Codex

进入项目目录：

```bash
cd your-project
codex
```

## 基本用法

```bash
codex                                  # 交互模式
codex "写一个 Python 爬虫"               # 单次命令
codex -m gpt-4o "优化这段代码"           # 指定模型
```

## 进阶：多模型配置

```toml
model = "gpt-4o"

[model_providers.main]
base_url = "https://coolmoai.cc/v1"
env_key = "OPENAI_API_KEY"

[models]
gpt-4o = { provider = "main" }
gpt-4.1 = { provider = "main" }
```

## 常见错误排查

| 错误 | 原因 | 解决方案 |
|------|------|----------|
| 401 / 403 | API Key 错误或无效 | 检查 Key 和环境变量 |
| 404 | API 地址错误 | 确认 URL 包含 `/v1` |
| 模型不可用 | 模型名称错误或无权限 | 在控制台检查模型名称 |
