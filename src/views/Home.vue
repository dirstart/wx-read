<template>
  <div class="home">
    <icon-svg name="bookmark"></icon-svg>
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
