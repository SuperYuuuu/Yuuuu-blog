---
# 提供三种布局 doc、page、home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layou

# https://vitepress.dev/reference/default-theme-home-page
layout: home
home: true
#
title: Yuuuu
titleTemplate: 致敬大师
editLink: true
lastUpdated: true
  
hero:
  name: Yuuuu
  text: 手握日月摘星辰，世间无我这般人
  tagline: /男/年轻/想挣钱
  image:
    src: /avatar.jpg
    alt: avatar
  
  # 按钮相关
  actions:
    - theme: brand
      text: 进入主页
      link: /column/Algothrim/
    - theme: alt
      text: 个人成长
      link: /column/Growing/

# 按钮下方的描述
features:
  - icon: 🌈🌧
    title: Java后端
    details: 程序猿，国内某银行搬砖。
    link: /column/views/guide
  - icon: 💪
    title: gamer
    details: 喜欢和朋友打游戏
  - icon: 👀
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---


<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue'
</script>

<home/>