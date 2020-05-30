<template>
  <div ref="wrapper" class="scroll-wrap">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this._initScroll()
      }
    })
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return false;
      }
      this.scroll = new BScroll(this.$refs.wrapper)
      return true
    }
  }
};
</script>

<style scoped lang="less">
.scroll-wrap {
  width: 100%;
  height: 100%;
}
</style>
