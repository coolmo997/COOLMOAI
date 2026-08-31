# Claude Code 配置

Claude Code 是 Anthropic 官方 CLI AI 编程助手，可以直接在终端中编写、调试和重构代码。

## 前提条件

确保已安装 Claude Code CLI：

```bash
npm install -g @anthropic-ai/claude-code
```

## 方法一：环境变量（推荐）

在 shell 配置文件中添加：

::: code-group
```bash [~/.zshrc]
export ANTHROPIC_BASE_URL="https://coolmoai.cc"
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx"
```

```bash [~/.bashrc]
export ANTHROPIC_BASE_URL="https://coolmoai.cc"
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx"
```
:::

应用并启动：

```bash
source ~/.zshrc
claude
```

## 方法二：启动时内联

适合临时使用或多账号切换：

```bash
ANTHROPIC_BASE_URL="https://coolmoai.cc" \
ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx" \
claude
```

## 方法三：配置文件

编辑 `~/.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://coolmoai.cc",
    "ANTHROPIC_API_KEY": "sk-xxxxxxxxxxxx"
  }
}
```

::: info 优先级
启动参数 > 环境变量 > 配置文件，高优先级会覆盖低优先级。
:::

::: warning 注意
`ANTHROPIC_BASE_URL` **不需要** `/v1` 后缀——Claude Code 会自动追加路径。这与 OpenAI 的 `OPENAI_BASE_URL` 不同。
:::

## 验证配置

启动 Claude Code 后，发送一个简单问题测试：

```bash
claude "你好，请用中文回复"
```

收到正常回复则说明配置成功。
