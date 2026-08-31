# Cline 配置

Cline 是 VS Code 热门 AI 编程扩展，支持自主编写代码、执行命令和管理文件。

## 安装扩展

在 VS Code 扩展市场搜索 **Cline**，或通过 CLI 安装：

```bash
code --install-extension saoudrizwan.claude-dev
```

## 配置步骤

1. 安装后，点击侧边栏的 **Cline** 图标
2. 点击右上角的 **Settings** 图标
3. 在 API Provider 下拉框中选择 **OpenAI Compatible**
4. 填入以下信息：

| 字段 | 值 |
|------|-----|
| Base URL | `https://coolmoai.cc/v1` |
| API Key | `sk-xxxxxxxxxxxx` |
| Model ID | 模型名称，如 `claude-sonnet-4-20250514` |

5. 点击 **Save**

## 模型推荐

| 场景 | 推荐模型 |
|------|----------|
| 日常编程 | `gpt-4o` 或 `claude-sonnet-4-20250514`（性价比最高）|
| 复杂任务 | `claude-opus-4-20250514` 或 `gpt-4.1`（能力更强）|

## 验证配置

在 Cline 面板中发送消息，收到正常回复则说明配置成功。
