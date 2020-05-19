<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <!-- 设置字体大小 -->
      <div class="setting-font-size">
        <!-- 减小字体 -->
        <div class="preview" ref="left">
          <span :style="styleLeft" ref="leftText">A</span>
        </div>
        <!-- 拖动条 -->
        <div class="select">
          <div class="select-wrapper"
            v-for="(item, index) in fontSizeList"
            :key="index"
            ref="item">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <!-- 增大字体 -->
        <div class="preview" ref="right">
          <span :style="styleRight" ref="rightText">A</span>
        </div>
      </div>
      <!-- 设置字体类型 -->
      <div class="setting-font-family" @click.stop="showFontFamilySetting">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">{{defaultFontFamily}}</span>
        </div>
        <div class="setting-font-family-icon-wrapper">
          <span class="icon-forward"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { ebookMixins } from '@/utils/mixin'

export default {
  mixins: [ebookMixins],
  data() {
    return {
      styleLeft: {},
      styleRight: {}
    }
  },
  watch: {
    settingVisible(v) {
      if (v === 0) {
        this.$nextTick(() => {
          this.genStyle()
        })
      }
    }
  },
  methods: {
    genStyle() {
      const left = this.$refs.left.getBoundingClientRect().width
      const right = this.$refs.left.getBoundingClientRect().width
      const leftText = this.$refs.leftText.getBoundingClientRect().width
      const rightText = this.$refs.leftText.getBoundingClientRect().width
      const item = this.$refs.item[0].getBoundingClientRect().width
      this.styleLeft = {
        marginLeft: `${(left + item - leftText) / 2}px`,
        fontSize: `${this.fontSizeList[0].fontSize}px`
      }
      this.styleRight = {
        marginRight: `${(right + item - rightText) / 2}px`,
        fontSize: `${this.fontSizeList[this.fontSizeList.length - 1].fontSize}px`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.setting-wrapper {
  position: absolute;
  .px2rem(bottom, 48);
  .px2rem(height, 90);
  left: 0;
  z-index: 190;
  display: flex;
  flex-direction: column;
  width: 100%;
  .box-shadow-px2rem(0, -8, 8, rgba(0, 0, 0, .15));
  .setting-font-size {
    flex: 2;
    display: flex;
    height: 100%;
    .preview {
      flex-grow: 0;
      flex-shrink: 0;
      .px2rem(flex-basis, 40);
    }
    // 拖动栏整行
    .select {
      display: flex;
      flex: 1;
      // 拖动栏的每一块
      .select-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        &:first-child {
          .line {
            &:first-child {
              border-top: none;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border-top: none;
            }
          }
        }
        .line {
          flex: 1;
          height: 0;
        }
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          .px2rem(height, 7);
          .point {
            position: absolute;
            .px2rem(top, -8);
            .px2rem(left, -10);
            .px2rem(width, 20);
            .px2rem(height, 20);
            .box-shadow-px2rem(0, 4, 4, rgba(0, 0, 0, .15));
            .flex-center();
            border-radius: 50%;
            .small-point {
              .px2rem(width, 5);
              .px2rem(height, 5);
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .setting-font-family {
    flex: 1;
    .px2rem(font-size, 14);
    .flex-center();
    .setting-font-family-text-wrapper {
      .flex-center();
    }
    .setting-font-family-icon-wrapper {
      .flex-center();
    }
  }
}
</style>
