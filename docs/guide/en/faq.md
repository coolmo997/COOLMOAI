# FAQ

## Connection Issues

### How do I verify the relay is working?

Use cURL to quickly test:

```bash
curl https://coolmoai.cc/v1/models \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx"
```

If you get a JSON list of models, the connection is working.

### Getting 401 Unauthorized

**Possible Causes:**
- API Key is incorrect (check for leading/trailing spaces)
- API Key has expired or been disabled
- API Key does not have permission for the requested model

**Solution:** Log in to the console and check the API Key status. Regenerate if necessary.

### Getting 429 Too Many Requests

::: info
Your request rate has exceeded the rate limit.
:::

**Solutions:**
- Wait and retry
- Check your rate limit quota in the console
- Contact admin if you need a higher quota

### Getting 502 / 503 Errors

**Possible cause:** The upstream API service is temporarily unavailable.

**Solution:** Wait a few minutes and retry. Contact admin if it persists.

---

## Configuration Issues

### Does the Base URL need `/v1`?

It depends on the tool:

| Tool | Base URL Format |
|------|----------------|
| Cursor | `https://coolmoai.cc/v1` ✅ needs /v1 |
| Claude Code | `https://coolmoai.cc` ✅ no /v1 needed |
| Cline | `https://coolmoai.cc/v1` ✅ needs /v1 |
| Continue | `https://coolmoai.cc/v1` ✅ needs /v1 |
| Aider | `https://coolmoai.cc/v1` ✅ needs /v1 |
| ChatBox | `https://coolmoai.cc` ✅ no /v1 needed |
| Cherry Studio | `https://coolmoai.cc` ✅ no /v1 needed |

::: tip Rule of thumb
Most tools need the /v1 suffix. Anthropic-based tools and some desktop clients append it automatically.
:::

### Environment variables and in-app settings conflict — what do I do?

In-app settings typically take higher priority. Use only one method to avoid confusion. If unsure, clear the environment variables and use in-app settings only.

### Which models are supported?

Visit the console or call the `/v1/models` endpoint for the full list. Common models include:

| Model | Description |
|-------|-------------|
| `gpt-4o` | OpenAI GPT-4o, multimodal |
| `gpt-4.1` | OpenAI GPT-4.1, latest |
| `gpt-4o-mini` | Lightweight GPT-4o for autocomplete |
| `claude-sonnet-4-20250514` | Claude 4 Sonnet, strong at coding |
| `claude-opus-4-20250514` | Claude 4 Opus, best reasoning |
| `gemini-2.5-pro` | Google Gemini 2.5 Pro |
