# OpenAI API Direct Usage

If you call the API directly via SDK or HTTP requests, simply point the Base URL to the relay address.

- **Base URL**: `https://coolmoai.cc/v1`
- **Auth**: `Authorization: Bearer sk-xxxxxxxxxxxx`

## API Docs

The OpenAI-compatible API docs are split into two sub-pages:

| Doc | Description |
|-----|-------------|
| [Chat Completions](./chat-completions) | Request params, SDK examples, and streaming for `/v1/chat/completions` |
| [Videos](./videos) | Create, poll, download and webhook for `/v1/videos` |

## Supported OpenAI-Compatible Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/chat/completions` | POST | Chat completion, supports streaming |
| `/v1/videos` | POST | Create a video generation task |
| `/v1/videos/{video_id}` | GET | Query video task status and progress |
| `/v1/videos/{video_id}/content` | GET | Download video, thumbnail, or spritesheet |

## Recommendations

- For existing OpenAI SDK projects, start with [Chat Completions](./chat-completions)
- For video generation or task status, go to [Videos](./videos)
- For third-party tool integration, just replace the Base URL and API Key
