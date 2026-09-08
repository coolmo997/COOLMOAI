# CC Switch 配置

CC Switch 是一款跨平台桌面工具，可一键管理和切换多个 AI 编程助手（Claude Code、Codex、OpenCode、Gemini CLI 等）的 API 配置。

## 安装

::: code-group
```bash [macOS (Homebrew)]
brew tap farion1231/ccswitch
brew install --cask cc-switch
```
:::

或直接从 [Releases 页面](https://github.com/farion1231/cc-switch/releases) 下载安装包：

| 操作系统 | 安装包 |
|---------|--------|
| Windows | `.msi` 安装包 或 便携 `.zip` |
| macOS | `.dmg`（已签名）|
| Linux | `.deb` / `.rpm` / `.AppImage` |

## 添加自定义提供商

1. 打开 CC Switch → 点击 **Add Provider**
2. 类型选择 **Custom**
3. 填入：

| 字段 | 值 |
|------|-----|
| Name | 自定义名称，如 `coolmoAI` |
| Base URL | `https://coolmoai.cc` |
| API Key | `sk-xxxxxxxxxxxx` |

4. 点击 **Save**
5. 在主界面启用该提供商
6. 重启终端或 CLI 工具使配置生效

::: tip Base URL 不需要 /v1
CC Switch 会自动追加 `/v1`，只需填写域名即可。
:::

## 支持的工具

配置完成后，CC Switch 可以管理以下工具的 API 配置：

- **Claude Code** — Anthropic 官方 CLI
- **Codex** — OpenAI CLI
- **OpenCode** — 开源 AI 编程助手
- **Gemini CLI** — Google Gemini CLI

切换提供商后，工具会自动读取新配置。Claude Code 支持不重启直接热切换。
