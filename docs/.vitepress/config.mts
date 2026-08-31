import { defineConfig } from 'vitepress'

export default defineConfig({
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
