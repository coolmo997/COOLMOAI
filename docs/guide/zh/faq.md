# 常见问题

## 连接问题

### 如何验证中转站是否正常工作？

使用 cURL 快速测试：

```bash
curl https://coolmoai.cc/v1/models \
  -H "Authorization: Bearer sk-xxxxxxxxxxxx"
```

如果返回 JSON 模型列表，说明连接正常。

### 收到 401 Unauthorized

**可能原因：**
- API Key 错误（检查是否有多余空格）
- API Key 已过期或被禁用
- API Key 没有权限访问所请求的模型

**解决方案：** 登录控制台检查 API Key 状态，必要时重新生成。

### 收到 429 Too Many Requests

::: info
请求频率超出了速率限制。
:::

**解决方案：**
- 等待后重试
- 在控制台检查速率限制配额
- 如需更高配额，联系管理员

### 收到 502 / 503 错误

**可能原因：** 上游 API 服务暂时不可用。

**解决方案：** 等待几分钟后重试。若持续出现，联系管理员。

---

## 配置问题

### Base URL 是否需要 `/v1`？

取决于工具：

| 工具 | Base URL 格式 |
|------|---------------|
| Cursor | `https://coolmoai.cc/v1` ✅ 需要 /v1 |
| Claude Code | `https://coolmoai.cc` ✅ 不需要 /v1 |
| Cline | `https://coolmoai.cc/v1` ✅ 需要 /v1 |
| Continue | `https://coolmoai.cc/v1` ✅ 需要 /v1 |
| Aider | `https://coolmoai.cc/v1` ✅ 需要 /v1 |
| ChatBox | `https://coolmoai.cc` ✅ 不需要 /v1 |
| Cherry Studio | `https://coolmoai.cc` ✅ 不需要 /v1 |

::: tip 规律
大多数工具需要 `/v1` 后缀。基于 Anthropic 协议的工具和部分桌面客户端会自动追加。
:::

### 环境变量和应用内设置冲突怎么办？

应用内设置优先级通常更高。建议只使用一种方式，避免混用。如不确定，清除环境变量后只用应用内设置。

### 支持哪些模型？

访问控制台或调用 `/v1/models` 接口获取完整列表。常用模型：

| 模型 | 说明 |
|------|------|
| `gpt-4o` | OpenAI GPT-4o，多模态 |
| `gpt-4.1` | OpenAI GPT-4.1，最新版 |
| `gpt-4o-mini` | 轻量级 GPT-4o，适合自动补全 |
| `claude-sonnet-4-20250514` | Claude 4 Sonnet，代码能力强 |
| `claude-opus-4-20250514` | Claude 4 Opus，推理最强 |
| `gemini-2.5-pro` | Google Gemini 2.5 Pro |
