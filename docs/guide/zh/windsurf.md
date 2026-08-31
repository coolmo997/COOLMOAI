# Windsurf 配置

Windsurf 是 Codeium 的 AI 代码编辑器（前身为 Codeium Editor），内置 Cascade AI 助手。

## 配置步骤

1. 打开 Windsurf → **Settings**
2. 搜索 `openai` 相关设置
3. 填入：
   - **API Key**：`sk-xxxxxxxxxxxx`
   - **Base URL**：`https://coolmoai.cc/v1`
4. 选择需要使用的模型

## 环境变量配置

也可以通过环境变量配置：

::: code-group
```bash [~/.zshrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_BASE_URL="https://coolmoai.cc/v1"
```

```bash [~/.bashrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_BASE_URL="https://coolmoai.cc/v1"
```
:::

配置完成后重启 Windsurf。

::: tip
Windsurf 同时支持内置 Cascade 模型和自定义 API 模型。配置中转站后，可以自由切换不同模型。
:::
