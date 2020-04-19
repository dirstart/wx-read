<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/**
 * 1rem = 1html.fontSize = 屏宽度 / 10 ~ [375/360/411/414] / 10
 * 常见的设计图的 dpr：[640, 750, 1080]
 */
// document.addEventListener('DOMContentLoaded', () => {
//   const html = document.querySelector('html')
//   let fontSize = window.innerWidth / 10
//   fontSize = fontSize > 50 ? 50 : fontSize
//   html.style.fontSize = `${fontSize}px`;
// });
</script>

<style lang="less" scoped>
@import './assets/styles/reset.less';
</style>
