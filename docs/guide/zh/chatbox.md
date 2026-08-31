# ChatBox 配置

ChatBox 是一款跨平台桌面 AI 聊天客户端，支持 Windows、macOS 和 Linux。

## 下载安装

访问 [ChatBox 官网](https://chatboxai.app) 下载对应平台的安装包。

## 配置步骤

1. 打开 ChatBox → 点击左下角 **Settings**
2. 选择 **OpenAI API** 作为 AI 模型提供商
3. 填入：

| 字段 | 值 |
|------|-----|
| API Domain | `https://coolmoai.cc` |
| API Key | `sk-xxxxxxxxxxxx` |
| Model | 手动输入模型名，如 `gpt-4o` |

4. 点击 **Save**

::: info
ChatBox 的 API Domain 字段**不需要** `/v1` 后缀——应用会自动追加。
:::

## 验证配置

保存后在聊天中发送消息，收到正常回复则说明配置成功。
