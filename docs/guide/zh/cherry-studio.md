# Cherry Studio 配置

Cherry Studio 是功能丰富的桌面 AI 客户端，支持多模型对话、知识库、AI 图像生成等。

## 下载安装

访问 [Cherry Studio 官网](https://cherry-ai.com) 下载安装。

## 配置步骤

1. 打开 Cherry Studio → 点击左侧 **Settings** 图标
2. 选择 **Model Services** 标签
3. 点击 **Add Custom Provider**，或选择已有的 OpenAI 或 Anthropic 提供商

   > 说明：Claude 模型使用 **Anthropic**；其他模型使用 **OpenAI**

4. 填入：

| 字段 | 值 |
|------|-----|
| Provider Name | `coolmoAI`（自定义名称）|
| API Address | `https://coolmoai.cc` |
| API Key | `sk-xxxxxxxxxxxx` |

5. 点击 **Add**
6. 从模型市场复制一个模型名称
7. 点击 **Save**

::: tip
Cherry Studio 支持同时配置多个 API 提供商，对话中可自由切换提供商和模型。
:::

## 验证配置

回到聊天界面，在右上角切换到刚配置的模型，发送消息测试即可。
