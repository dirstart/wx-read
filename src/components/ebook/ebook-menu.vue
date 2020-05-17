<template>
  <transition name="slide-up">
    <div class="menu-wrapper" v-show="menuVisible">
      <div class="icon-wrapper">
        <span class="icomoon icon-menu"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icomoon icon-progress"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icomoon icon-bright"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icomoon icon-A"></span>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['menuVisible'])
  }
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
  box-shadow: 0 4px 4px rgba(0, 0, 0, .15);
  .px2rem(height, 48);
  .px2rem(font-size, 22);
  .icon-wrapper {
    flex: 1;
    .flex-center();
  }
}

</style>
