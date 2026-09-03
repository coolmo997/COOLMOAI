import { defineConfig } from 'vitepress'

const SITE_ORIGIN = 'https://coolmoai.cc'

const SEO_PAGES: Record<string, { title: string; description: string }> = {
  'what-is-coolmoai': {
    title: '什么是 coolmoAI',
    description: '了解 coolmoAI 的定位、文档范围、API Key、Base URL 和开发者接入路径。实际可用模型与服务限制以最新文档和控制台为准。',
  },
  'openai-claude-gemini-api': {
    title: 'OpenAI、Claude、Gemini API 接入指南',
    description: '了解 coolmoAI 的 OpenAI 和 Anthropic 兼容接入方式、Base URL、API Key、模型核对和常见错误排查路径。',
  },
  'ai-api-for-developers': {
    title: '开发者 AI API 接入指南',
    description: '面向开发者的 coolmoAI 接入指南，包含 API Key、Base URL、SDK、cURL、Chat Completions 和错误排查入口。',
  },
  openclaw: {
    title: 'OpenClaw 接入 coolmoAI',
    description: 'OpenClaw 接入 coolmoAI 的配置前检查和文档入口。具体协议、字段与模型设置需以经核对的专项文档为准。',
  },
  'cc-site': {
    title: 'CC-SITE 接入 coolmoAI',
    description: 'CC-SITE 接入 coolmoAI 的配置前检查和文档入口。具体协议、字段与模型设置需以经核对的专项文档为准。',
  },
}

function getSeoPageKey(page: string) {
  return page.replace(/^\//, '').replace(/\.md$/, '')
}

function getCanonicalPath(key: string) {
  return `/docs/${key}`
}


export default defineConfig({
  base: '/docs/',
  transformHead({ page }) {
    const key = getSeoPageKey(page)
    const meta = SEO_PAGES[key]
    if (!meta) return []

    const url = `${SITE_ORIGIN}${getCanonicalPath(key)}`
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      '@id': `${url}#article`,
      url,
      headline: meta.title,
      description: meta.description,
      inLanguage: 'zh-CN',
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    }

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:site_name', content: 'coolmoAI' }],
      ['meta', { property: 'og:title', content: meta.title }],
      ['meta', { property: 'og:description', content: meta.description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:locale', content: 'zh_CN' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: meta.title }],
      ['meta', { name: 'twitter:description', content: meta.description }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)],
    ]
  },
  transformHtml(html, id, { page }) {
    const key = getSeoPageKey(page)
    if (!SEO_PAGES[key]) return html

    // Root-level Chinese pages do not have page-for-page English translations.
    // Keep the language switcher useful by sending it to the English docs home
    // instead of VitePress's generated non-existent counterpart path.
    return html.replace(/href=\"\/docs\/guide\/en\/[^\"]+\.html\"/g, 'href=\"/docs/guide/en/\"')
  },
  title: 'coolmoAI',
  description: '统一 AI API 中转服务，支持 OpenAI / Claude / Gemini 等主流模型',
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/guide/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/guide/zh/' },
          { text: '快速开始', link: '/guide/zh/getting-started' },
          {
            text: '产品与接入',
            items: [
              { text: '什么是 coolmoAI', link: '/what-is-coolmoai' },
              { text: '开发者 API 接入', link: '/ai-api-for-developers' },
              { text: 'OpenAI / Claude / Gemini 接入', link: '/openai-claude-gemini-api' },
              { text: 'OpenClaw 接入检查', link: '/openclaw' },
              { text: 'CC-SITE 接入检查', link: '/cc-site' },
            ]
          },
          {
            text: '工具配置',
            items: [
              { text: 'Cursor', link: '/guide/zh/cursor' },
              { text: 'Claude Code', link: '/guide/zh/claude-code' },
              { text: 'Cline', link: '/guide/zh/cline' },
              { text: 'Continue', link: '/guide/zh/continue' },
              { text: 'Aider', link: '/guide/zh/aider' },
              { text: 'Windsurf', link: '/guide/zh/windsurf' },
            ]
          },
          { text: '常见问题', link: '/guide/zh/faq' },
        ],
        sidebar: [
          {
            text: '介绍',
            items: [
              { text: '快速开始', link: '/guide/zh/getting-started' },
              { text: '什么是 coolmoAI', link: '/what-is-coolmoai' },
              { text: '开发者 API 接入', link: '/ai-api-for-developers' },
              { text: 'OpenAI / Claude / Gemini 接入', link: '/openai-claude-gemini-api' },
              { text: 'OpenClaw 接入检查', link: '/openclaw' },
              { text: 'CC-SITE 接入检查', link: '/cc-site' },
              { text: '常见问题', link: '/guide/zh/faq' },
            ]
          },
          {
            text: 'AI 编辑器',
            items: [
              { text: 'Cursor', link: '/guide/zh/cursor' },
              { text: 'Windsurf', link: '/guide/zh/windsurf' },
            ]
          },
          {
            text: '命令行工具',
            items: [
              { text: 'Claude Code', link: '/guide/zh/claude-code' },
              { text: 'CC Switch', link: '/guide/zh/cc-switch' },
              { text: 'CC-MAX 站点接入', link: '/guide/zh/cc-max' },
              { text: 'Aider', link: '/guide/zh/aider' },
              { text: 'Codex', link: '/guide/zh/codex' },
            ]
          },
          {
            text: 'IDE 插件',
            items: [
              { text: 'Cline', link: '/guide/zh/cline' },
              { text: 'Continue', link: '/guide/zh/continue' },
            ]
          },
          {
            text: '桌面客户端',
            items: [
              { text: 'ChatBox', link: '/guide/zh/chatbox' },
              { text: 'Cherry Studio', link: '/guide/zh/cherry-studio' },
            ]
          },
          {
            text: 'API 参考',
            items: [
              {
                text: 'OpenAI API',
                items: [
                  { text: '概览', link: '/guide/zh/openai-api/' },
                  { text: 'Chat Completions', link: '/guide/zh/openai-api/chat-completions' },
                  { text: 'Videos', link: '/guide/zh/openai-api/videos' },
                ]
              },
            ]
          },
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/guide/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/guide/en/' },
          { text: 'Getting Started', link: '/guide/en/getting-started' },
          {
            text: 'Tools',
            items: [
              { text: 'Cursor', link: '/guide/en/cursor' },
              { text: 'Claude Code', link: '/guide/en/claude-code' },
              { text: 'Cline', link: '/guide/en/cline' },
              { text: 'Continue', link: '/guide/en/continue' },
              { text: 'Aider', link: '/guide/en/aider' },
              { text: 'Windsurf', link: '/guide/en/windsurf' },
            ]
          },
          { text: 'FAQ', link: '/guide/en/faq' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Getting Started', link: '/guide/en/getting-started' },
              { text: 'FAQ', link: '/guide/en/faq' },
            ]
          },
          {
            text: 'AI Editors',
            items: [
              { text: 'Cursor', link: '/guide/en/cursor' },
              { text: 'Windsurf', link: '/guide/en/windsurf' },
            ]
          },
          {
            text: 'CLI Tools',
            items: [
              { text: 'Claude Code', link: '/guide/en/claude-code' },
              { text: 'CC Switch', link: '/guide/en/cc-switch' },
              { text: 'CC-MAX Site Integration', link: '/guide/en/cc-max' },
              { text: 'Aider', link: '/guide/en/aider' },
              { text: 'Codex', link: '/guide/en/codex' },
            ]
          },
          {
            text: 'IDE Extensions',
            items: [
              { text: 'Cline', link: '/guide/en/cline' },
              { text: 'Continue', link: '/guide/en/continue' },
            ]
          },
          {
            text: 'Desktop Clients',
            items: [
              { text: 'ChatBox', link: '/guide/en/chatbox' },
              { text: 'Cherry Studio', link: '/guide/en/cherry-studio' },
            ]
          },
          {
            text: 'API Reference',
            items: [
              {
                text: 'OpenAI API',
                items: [
                  { text: 'Overview', link: '/guide/en/openai-api/' },
                  { text: 'Chat Completions', link: '/guide/en/openai-api/chat-completions' },
                  { text: 'Videos', link: '/guide/en/openai-api/videos' },
                ]
              },
            ]
          },
        ]
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coolmo997/COOLMOAI' }
    ],
    footer: {
      message: 'coolmoAI - 统一 AI API 中转服务',
      copyright: 'Copyright © 2024-present coolmoAI'
    }
  }
})
