<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
};
/**
 * 1rem = 1html.fontSize = 屏宽度 / 10 ~ [375/360/411/414] / 10
 * 常见的设计图的 dpr：[640, 750, 1080]
 */
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = `${fontSize}px`;
});
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
