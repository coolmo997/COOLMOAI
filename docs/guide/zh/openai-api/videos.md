# Videos

`/v1/videos` 是异步视频生成 API。创建任务后，通过 `GET /v1/videos/{video_id}` 轮询状态和进度，完成后通过 `GET /v1/videos/{video_id}/content` 下载。

::: warning
视频 API 是异步的——不会像文本 API 那样立即返回最终内容。
:::

## 端点

- 创建任务：`POST https://coolmoai.cc/v1/videos`
- 轮询进度：`GET https://coolmoai.cc/v1/videos/{video_id}`
- 下载内容：`GET https://coolmoai.cc/v1/videos/{video_id}/content`

## 创建视频任务

### 常用请求字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `prompt` | 是 | 视频生成提示词 |
| `model` | 否 | 视频模型，如 `sora-2`，默认 `sora-2` |
| `seconds` | 否 | 时长：4、8 或 12，默认 4 |
| `size` | 否 | 分辨率，默认 `720x1280` |

### cURL 示例

```bash
curl https://coolmoai.cc/v1/videos \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  -F "model=sora-2" \
  -F "prompt=一只花猫在舞台上弹钢琴" \
  -F "seconds=8" \
  -F "size=1280x720"
```

## 轮询任务进度

建议轮询间隔 10 到 20 秒。`progress` 是大致百分比，`status` 是任务状态。

### 状态说明

| status | 说明 |
|--------|------|
| `queued` | 排队中 |
| `in_progress` | 处理中 |
| `completed` | 已完成 |
| `failed` | 失败 |

## 下载视频内容

默认返回 MP4 视频，使用 `variant` 参数获取其他格式：

```bash
# 下载视频
curl https://coolmoai.cc/v1/videos/video_123/content \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  --output video.mp4

# 下载缩略图
curl "https://coolmoai.cc/v1/videos/video_123/content?variant=thumbnail" \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  --output thumbnail.webp
```

## Webhook 回调（可选）

支持配置 Webhook 接收任务结果通知，触发事件：

- `video.completed`
- `video.failed`
