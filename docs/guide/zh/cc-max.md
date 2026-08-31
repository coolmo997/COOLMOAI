# CC-MAX 站点接入

CC-MAX 是 coolmoAI 专属的高速接入节点，为频繁使用的用户提供更稳定的连接体验。

## 接入方式

将所有工具的 Base URL 替换为 CC-MAX 节点地址即可。

::: code-group
```bash [环境变量]
# Claude Code
export ANTHROPIC_BASE_URL="https://coolmoai.cc"
export ANTHROPIC_API_KEY="sk-xxxxxxxxxxxx"

# OpenAI 兼容工具
export OPENAI_API_KEY="sk-xxxxxxxxxxxx"
export OPENAI_BASE_URL="https://coolmoai.cc/v1"
```
:::

::: tip
CC-MAX 节点与默认节点使用相同的 API Key，无需额外申请。
:::

## 与默认节点的区别

| 对比 | 默认节点 | CC-MAX 节点 |
|------|----------|-------------|
| 地址 | `coolmoai.cc` | `coolmoai.cc`（相同） |
| 适用场景 | 日常使用 | 高频 / 专业用途 |
| 稳定性 | 标准 | 优化 |
