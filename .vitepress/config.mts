import { defineConfig } from 'vitepress'
import {nav} from "./realConf";
import {sidebar} from "./realConf/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Yuuuu-blog/',
  title: "Yuuuu-bolg",
  description: "博客",
  themeConfig: {
    logo: '/avatar.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SuperYuuuu' }
    ],
    outline: {
      level: [1, 6],
      label: '目录'
    },
    search: {
      provider: 'local'
    },
    i18nRouting: true
  }
})