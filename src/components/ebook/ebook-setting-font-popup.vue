<template>
  <transition name="popup-slide-up">
    <div class="ebook-popup-list" v-if="fontFamilyPopupVisible">
      <div class="ebook-popup-title">
        <div class="ebook-popup-title-icon">
          <span class="icon-down2"></span>
        </div>
        <span class="ebook-popup-title-text">
          Select Font
        </span>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div class="ebook-popup-item" v-for="(item, index) in fontFamilyList"
          :key="index"
          :class="{'selected': defaultFontFamily === item.font}"
          @click="setFontFamily(item.font)">
          {{item.font}}
          <div class="ebook-popup-item-check" v-if="defaultFontFamily === item.font">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixins } from '@/utils/mixin'

export default {
  mixins: [ebookMixins],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
  }
};
</script>

<style lang="less" scoped>
.ebook-popup-list {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 290;
  width: 100%;
  .ebook-popup-title {
    position: relative;
    .px2rem(font-size, 14);
    .flex-center();
    .px2rem(height, 36);
    .ebook-popup-title-icon {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      .px2rem(padding-left, 12);
      .flex-center();
    }
  }
  .ebook-popup-list-wrapper {
    .px2rem(height, 160);
    overflow: scroll;
    // .flex-center();
    .ebook-popup-item {
      position: relative;
      &.selected {
        color: #346cb9;
        font-weight: bold;
      }
      .flex-left();
      .px2rem(font-size, 12);
      .px2rem(height, 40);
      .px2rem(padding-left, 12);
      .ebook-popup-item-check {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        .flex-center();
        .px2rem(padding-right, 12);
      }
    }
  }
}
</style>
