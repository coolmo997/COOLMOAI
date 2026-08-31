# OpenAI API 概览

如果你通过 SDK 或 HTTP 请求直接调用 API，只需将 Base URL 指向中转站地址即可。

- **Base URL**：`https://coolmoai.cc/v1`
- **Auth**：`Authorization: Bearer sk-xxxxxxxxxxxx`

## API 文档

OpenAI 兼容 API 文档分为两个子页面：

| 文档 | 说明 |
|------|------|
| [Chat Completions](./chat-completions) | `/v1/chat/completions` 的请求参数、SDK 示例和流式输出 |
| [Videos](./videos) | `/v1/videos` 的创建、轮询、下载和 Webhook |

## 支持的 OpenAI 兼容端点

| 端点 | 方法 | 说明 |
|------|------|------|
| `/v1/chat/completions` | POST | 对话补全，支持流式输出 |
| `/v1/videos` | POST | 创建视频生成任务 |
| `/v1/videos/{video_id}` | GET | 查询视频任务状态和进度 |
| `/v1/videos/{video_id}/content` | GET | 下载视频、缩略图或精灵图 |

## 推荐

- 已有 OpenAI SDK 项目，直接从 [Chat Completions](./chat-completions) 开始
- 视频生成或任务查询，参考 [Videos](./videos)
- 第三方工具集成，只需替换 Base URL 和 API Key
