<template>
  <div class="home">
    <span class="icon-bookmark"></span>
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
    console.log('test', this.book)
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight,
    }).display()
  },
};
</script>
