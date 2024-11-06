import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FerrumC Documentation",
  base: "/",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: "Detailed and extensive documentation for the 1.21.1 FerrumC Rust Minecraft Server",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
