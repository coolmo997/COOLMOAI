import { defineConfig } from 'vitepress'

const SITE_ORIGIN = 'https://coolmoai.cc'

type PageSeoMeta = {
  title: string
  htmlTitle?: string
  description: string
  canonicalPath: string
  inLanguage: string
  ogLocale: string
  schemaType: 'TechArticle' | 'CollectionPage'
}

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

const GUIDE_DESCRIPTIONS: Record<string, { zh: string; en: string }> = {
  index: {
    zh: 'coolmoAI 中文开发者文档入口，包含快速开始、AI 工具配置、OpenAI API 参考和常见问题排查。实际可用模型、权限和服务限制以最新文档、控制台和接口返回为准。',
    en: 'coolmoAI developer docs for setup, AI tool configuration, OpenAI-compatible API reference, and troubleshooting. Check current docs and API responses for limits.',
  },
  'getting-started': {
    zh: '了解如何注册 coolmoAI、创建 API Key、配置 Base URL，并使用 cURL 或 SDK 完成首次 API 请求。实际可用模型、权限和服务限制以最新文档、控制台和接口返回为准。',
    en: 'Register for coolmoAI, create an API Key, configure the Base URL, and make a first request with cURL or an SDK. Check current docs and API responses for limits.',
  },
  faq: {
    zh: '查看 coolmoAI 常见连接、鉴权、限流、上游错误和工具配置问题的排查方法。实际可用模型、权限和服务限制以最新文档、控制台和接口返回为准。',
    en: 'Troubleshoot coolmoAI connection, authentication, rate-limit, upstream error, and tool setup issues. Check current docs and API responses for limits.',
  },
  'openai-api/index': {
    zh: '查看 coolmoAI OpenAI API 兼容接口概览，包括 Base URL、Chat Completions、Videos 和第三方工具接入入口。具体字段和可用范围以 API 参考与接口返回为准。',
    en: 'coolmoAI OpenAI-compatible API overview: Base URL, Chat Completions, Videos, and third-party integration. Check current docs for fields and availability.',
  },
  'openai-api/chat-completions': {
    zh: '了解 coolmoAI 的 /v1/chat/completions 请求路径、常用字段、响应结构、流式输出和 Python、Node.js 示例。具体模型与权限以接口返回为准。',
    en: 'coolmoAI /v1/chat/completions reference with request fields, responses, streaming, and Python/Node.js examples. Check API responses for model availability.',
  },
  'openai-api/videos': {
    zh: '了解 coolmoAI 的 /v1/videos 接口文档，包括创建任务、查询状态、下载内容和 webhook 相关说明。具体可用能力与权限以接口返回为准。',
    en: 'coolmoAI /v1/videos reference for task creation, status, downloads, and webhooks. Check the API response for available capabilities and permissions.',
  },
}

function getGuidePageMeta(key: string, title: string): PageSeoMeta | undefined {
  const match = key.match(/^guide\/(zh|en)\/(.+)$/)
  if (!match) return undefined

  const [, locale, route] = match
  const language = locale === 'zh' ? 'zh-CN' : 'en-US'
  const routeTitle = title.replace(/\s*\|\s*coolmoAI$/, '')
  const description = GUIDE_DESCRIPTIONS[route]?.[locale] ?? (locale === 'zh'
    ? `${routeTitle}：coolmoAI 文档中的工具配置与 API 接入说明。具体协议、模型、权限和服务限制以当前文档和接口返回为准。`
    : `${routeTitle}: coolmoAI setup and API integration docs. Check current docs and API responses for limits.`)

  const htmlTitle = route === 'index'
    ? (locale === 'zh' ? 'coolmoAI 中文文档' : 'coolmoAI English Documentation')
    : (locale === 'zh' ? `${routeTitle}｜中文文档` : `${routeTitle} | English Docs`)

  return {
    title: route === 'index' ? (locale === 'zh' ? 'coolmoAI 中文文档' : 'coolmoAI English Documentation') : routeTitle,
    htmlTitle,
    description,
    canonicalPath: `/docs/${key}.html`,
    inLanguage: language,
    ogLocale: locale === 'zh' ? 'zh_CN' : 'en_US',
    schemaType: 'TechArticle',
  }
}

function getPageSeoMeta(key: string, title: string): PageSeoMeta | undefined {
  const seoPage = SEO_PAGES[key]
  if (seoPage) {
    return {
      ...seoPage,
      canonicalPath: getCanonicalPath(key),
      inLanguage: 'zh-CN',
      ogLocale: 'zh_CN',
      schemaType: 'TechArticle',
    }
  }

  if (key === 'index') {
    return {
      title: 'coolmoAI 文档',
      htmlTitle: 'coolmoAI 开发者文档',
      description: 'coolmoAI 文档入口，提供中文和英文开发者文档、快速开始、工具配置、OpenAI API 参考、接口示例和常见问题排查。',
      canonicalPath: '/docs/',
      inLanguage: 'zh-CN',
      ogLocale: 'zh_CN',
      schemaType: 'CollectionPage',
    }
  }

  return getGuidePageMeta(key, title)
}


export default defineConfig({
  base: '/docs/',
  transformHead({ page, title }) {
    const key = getSeoPageKey(page)
    const meta = getPageSeoMeta(key, title)
    if (!meta) return []

    const url = `${SITE_ORIGIN}${meta.canonicalPath}`
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': meta.schemaType,
      '@id': `${url}#${meta.schemaType === 'TechArticle' ? 'article' : 'page'}`,
      url,
      headline: meta.title,
      description: meta.description,
      inLanguage: meta.inLanguage,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    }

    return [
      ['meta', { name: 'description', content: meta.description }],
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: meta.canonicalPath === '/docs/' ? 'website' : 'article' }],
      ['meta', { property: 'og:site_name', content: 'coolmoAI' }],
      ['meta', { property: 'og:title', content: meta.title }],
      ['meta', { property: 'og:description', content: meta.description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: `${SITE_ORIGIN}/logo.png` }],
      ['meta', { property: 'og:locale', content: meta.ogLocale }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: meta.title }],
      ['meta', { name: 'twitter:description', content: meta.description }],
      ['meta', { name: 'twitter:image', content: `${SITE_ORIGIN}/logo.png` }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)],
    ]
  },
  transformHtml(html, id, { page }) {
    const key = getSeoPageKey(page)
    const currentTitle = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''
    const meta = getPageSeoMeta(key, currentTitle)
    if (meta) {
      const htmlTitle = `${meta.htmlTitle ?? meta.title} | coolmoAI`
      html = html.replace(/<title>[^<]*<\/title>/, `<title>${htmlTitle}</title>`)
    }

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
    logo: { src: '/logo.svg', alt: 'coolmoAI' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coolmo997/COOLMOAI' }
    ],
    footer: {
      message: 'coolmoAI - 统一 AI API 中转服务',
      copyright: 'Copyright © 2024-present coolmoAI'
    }
  }
})
