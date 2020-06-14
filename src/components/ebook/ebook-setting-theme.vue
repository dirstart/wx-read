<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-if="menuVisible && settingVisible === 1">
      <div class="setting-theme">
        <div class="setting-theme-item" v-for="(item, index) in themeList"
          :key="index"
          @click="setTheme(item.name)">
          <div class="preview"
            :class="{'selected': item.name === defaultTheme}"
            :style="{background: item.style.body.background}"></div>
          <div class="text"
            :class="{'selected': item.name === defaultTheme}">{{item.alias}}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixins } from '@/utils/mixin'

export default {
  mixins: [
    ebookMixins,
  ],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.setting-wrapper {
  position: absolute;
  .px2rem(bottom, 48);
  left: 0;
  z-indx: 100;
  width: 100%;
  .px2rem(height, 90);
  .box-shadow-px2rem(0, -8, 8, rgba(0, 0, 0, .15));
  .setting-theme {
    height: 100%;
    display: flex;
    .setting-theme-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .px2rem(padding, 5);
      box-sizing: border-box;
      .preview {
        flex: 1;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border: none;
        &.selected {
          .box-shadow-px2rem(0, 4, 6, rgba(0, 0, 0, .1));
          border: 2px solid #5e6369;
        }
      }
      .text {
        flex-grow: 0;
        flex-shrink: 0;
        .px2rem(flex-basis, 40);
        .px2rem(font-size, 14);
        .flex-center();
      }
    }
  }
}
</style>
