<template>
  <div>
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="menuVisible">
        <div class="icon-wrapper">
          <span class="icomoon icon-menu" @click="showSetting(4)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icomoon icon-progress" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icomoon icon-bright" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icomoon icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <!-- 设置字体大小 -->
    <ebook-setting-font></ebook-setting-font>
    <!-- 设置字体格式 -->
    <ebook-setting-font-popup></ebook-setting-font-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import { ebookMixins } from '../../utils/mixin'
import ebookSettingFont from './ebook-setting-font.vue'
import ebookSettingFontPopup from './ebook-setting-font-popup.vue'

export default {
  components: {
    ebookSettingFont,
    ebookSettingFontPopup,
  },
  mixins: [
    ebookMixins,
  ],
  methods: {
    showSetting(key) {
      if (this.settingVisible === -1) {
        this.setSettingVisible(key)
      } else {
        this.setSettingVisible(-1)
      }
    },
  },
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, .15);
  .px2rem(height, 48);
  .px2rem(font-size, 22);
  .icon-wrapper {
    flex: 1;
    .flex-center();
  }
}

</style>
