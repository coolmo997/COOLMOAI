# Continue 配置

Continue 是一款开源 AI 编程助手扩展，同时支持 VS Code 和 JetBrains IDE。

## 安装扩展

::: code-group
```bash [VS Code]
code --install-extension Continue.continue
```

```text [JetBrains]
Settings → Plugins → Marketplace → 搜索 "Continue" → Install
```
:::

## 配置步骤

编辑配置文件 `~/.continue/config.yaml`：

```yaml
models:
  - model: gpt-4o
    title: GPT-4o (coolmoAI)
    provider: openai
    apiKey: sk-xxxxxxxxxxxx
    apiBase: https://coolmoai.cc/v1

  - model: claude-sonnet-4-20250514
    title: Claude 4 Sonnet (coolmoAI)
    provider: openai
    apiKey: sk-xxxxxxxxxxxx
    apiBase: https://coolmoai.cc/v1

  - model: claude-opus-4-20250514
    title: Claude 4 Opus (coolmoAI)
    provider: openai
    apiKey: sk-xxxxxxxxxxxx
    apiBase: https://coolmoai.cc/v1
```

::: tip
保存配置文件后 Continue 会自动重载，无需重启 IDE。
:::

## 配置 Tab 自动补全

在 `config.yaml` 中添加：

```yaml
tabAutocompleteModel:
  model: gpt-4o-mini
  title: 自动补全 (coolmoAI)
  provider: openai
  apiKey: sk-xxxxxxxxxxxx
  apiBase: https://coolmoai.cc/v1
```

## 验证配置

按 `Cmd + L`（macOS）或 `Ctrl + L`（Windows/Linux）打开 Continue 面板，发送消息测试即可。
