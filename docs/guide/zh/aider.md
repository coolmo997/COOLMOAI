# Aider 配置

Aider 是一款强大的终端 AI 结对编程工具，可在终端中直接与 AI 协作修改代码。

## 安装 Aider

```bash
pip install aider-chat
```

## 方法一：环境变量（推荐）

::: code-group
```bash [~/.zshrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_API_BASE="https://coolmoai.cc/v1"
```

```bash [~/.bashrc]
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_API_BASE="https://coolmoai.cc/v1"
```
:::

应用并启动：

```bash
source ~/.zshrc
aider --model gpt-4o
```

## 方法二：命令行参数

```bash
aider \
  --openai-api-key sk-xxxxxxxxxxxx \
  --openai-api-base https://coolmoai.cc/v1 \
  --model gpt-4o
```

## 方法三：配置文件

创建 `~/.aider.conf.yml`：

```yaml
openai-api-key: sk-xxxxxxxxxxxx
openai-api-base: https://coolmoai.cc/v1
model: gpt-4o
```

## 常用模型参数

```bash
aider --model gpt-4o                    # GPT-4o
aider --model gpt-4.1                   # GPT-4.1
aider --model claude-sonnet-4-20250514  # Claude 4 Sonnet
```

## 验证配置

```bash
aider --model gpt-4o --message "Say hello"
```
