<template>
  <div class="home">
    <!-- <icon-svg class="icon-bookmark" name="bookmark"></icon-svg>
    <icon-svg class="icon-bookmark2" name="bookmark"></icon-svg> -->
    <div class="test" id="test1">test1</div>
    <div class="test" id="test2">test2</div>
    <div id="read"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Epub from 'epubjs';

global.ePub = Epub;

export default {
  name: 'Home',
  components: {
  },
  mounted() {
    this.book = new Epub('/2018_Book_AgileProcessesInSoftwareEngine.epub');
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight,
    }).display()
  },
};
</script>

<style lang="less" scoped>
@import url('../assets/styles/util.less');
.test {
  margin-top: 10px;;
  background: #089e8a;
}
#test1 {
  .px2rem(font-size, 100);
  .bordered();
}
#test2 {
  .px2rem(font-size, 50)
}
</style>
