<template>
  <div class="wrap" ref="scrollEl">
    <div class="main">
      <button @click="showDialog">出现吧弹窗</button>
    </div>
    <div class="dialog-wrapper" ref="scrollElOther" v-if="visible" @click="closeDialog">
      <div class="dialog-content" @click.stop>
        <header @click="closeDialog">隐藏弹窗</header>
        <ul>
          <li>很多元素，需要滚动</li>
          <li>很多元素，需要滚动</li>
          <li>很多元素，需要滚动</li>
          <li>很多元素，需要滚动</li>
          <li>很多元素，需要滚动</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    showDialog() {
      this.visible = true
      this.afterDialogOpen()
    },
    closeDialog() {
      this.visible = false
      this.afterDialogClose()
    },
    afterDialogOpen() {
      this.$refs.scrollEl.classList.add('dialog-open')
      this.$refs.scrollElOther.classList.add('dialog-open')
    },
    afterDialogClose() {
      this.$refs.scrollEl.classList.remove('dialog-open')
      this.$refs.scrollElOther.classList.remove('dialog-open')
    }
  }
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100%;
  background: #088a9e;
  overflow: scroll;
  border: 5px solid #089e8a;

  .main {
    width: 100%;
    height: 100%;
    background: #eee;
  }

  .dialog-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    .dialog-content {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 300px;
      overflow: scroll;
      background: seagreen;

      li {
        margin-top: 10px;
        width: 100%;
        height: 150px;
        background: khaki;
      }
    }
  }
}
.dialog-open {
  position: fixed;
}
</style>
