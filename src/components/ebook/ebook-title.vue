<template>
  <transition name="slide-down">
    <div class="title-wrapper">
      <!-- 我怎么知道 -->
      <div class="left">
        <span class="icomoon icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icomoon icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icomoon icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icomoon icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
// import { ebookMixin } from '@/utils/mixin'
// export default {
//   mixins: [ebookMixin],
//   methods: {
//     back() {
//       this.$router.go(-1)
//     },
//     gotoBookStore() {
//       this.$router.push('/book-store')
//     }
//   }
// }
</script>

<style lang="less" rel="stylesheet/scss" scoped>
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  .px2rem(height, 48);
  box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
  .px2rem(font-size, 22);
  .left {
    flex-grow: 0;
    flex-shrink: 0;
    .px2rem(flex-basis, 37);
    .flex-right();
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex-grow: 0;
      flex-shrink: 0;
      .px2rem(flex-basis, 37);
      .flex-left();
    }
  }
}
</style>
