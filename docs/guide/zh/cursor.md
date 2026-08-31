# Cursor 配置

Cursor 是最流行的 AI 代码编辑器，基于 VS Code 深度集成 AI 能力，支持自定义 OpenAI API 端点。

## 方法一：设置界面（推荐）

1. 打开 Cursor → 进入 **Settings → Models**
2. 找到 **OpenAI API Key** 字段，填入：`sk-xxxxxxxxxxxx`
3. 点击 **Override OpenAI Base URL**，填入：`https://coolmoai.cc/v1`
4. 勾选需要使用的模型（如 gpt-4o、claude-sonnet-4-20250514）
5. 点击 **Verify** 按钮测试连接

::: tip
如果列表中没有你需要的模型，点击 **+ Add Model** 手动添加。
:::

## 方法二：环境变量

在 shell 配置文件中添加：

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

重新加载并重启 Cursor：

```bash
source ~/.zshrc
```

::: info
环境变量会影响所有读取它的程序。如果只想配置 Cursor，推荐使用方法一。
:::

## 验证配置

配置完成后，在 Cursor 中打开任意文件，按 `Cmd + L`（macOS）或 `Ctrl + L`（Windows/Linux）打开 Chat 面板，发送消息测试即可。
