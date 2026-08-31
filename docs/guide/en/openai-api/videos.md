# Videos

`/v1/videos` is an async video generation API. After creating a task, poll `GET /v1/videos/{video_id}` for status and progress, then download via `GET /v1/videos/{video_id}/content` when complete.

::: warning
The video API is asynchronous — it does not return the final content immediately like the text API.
:::

## Endpoints

- Create task: `POST https://coolmoai.cc/v1/videos`
- Poll progress: `GET https://coolmoai.cc/v1/videos/{video_id}`
- Download content: `GET https://coolmoai.cc/v1/videos/{video_id}/content`

## Create a Video Task

### Common Request Fields

| Field | Required | Description |
|-------|----------|-------------|
| `prompt` | Yes | Video generation prompt |
| `model` | No | Video model, e.g. `sora-2`, default `sora-2` |
| `seconds` | No | Duration: 4, 8, or 12, default 4 |
| `size` | No | Resolution, default `720x1280` |

### cURL Example

```bash
curl https://coolmoai.cc/v1/videos \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  -F "model=sora-2" \
  -F "prompt=A calico cat playing a piano on stage" \
  -F "seconds=8" \
  -F "size=1280x720"
```

## Poll Video Task Progress

Recommended polling interval: 10 to 20 seconds.

### Status Values

| status | Description |
|--------|-------------|
| `queued` | Waiting in queue |
| `in_progress` | Processing |
| `completed` | Done |
| `failed` | Failed |

## Download Video Content

By default returns MP4 video. Use the `variant` query param for other formats:

```bash
# Download video
curl https://coolmoai.cc/v1/videos/video_123/content \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  --output video.mp4

# Download thumbnail
curl "https://coolmoai.cc/v1/videos/video_123/content?variant=thumbnail" \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx" \
  --output thumbnail.webp
```

## Optional: Webhook Callback

Configure a webhook to receive task result notifications. Events triggered:

- `video.completed`
- `video.failed`
