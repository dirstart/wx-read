<template>
  <div class="ebook-reader">
    <button @click="nextPage">test</button>
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
import { mapGetters } from 'vuex'

global.ePub = Epub
export default {
  data() {
    return {
      msg: process.env.VUE_APP_NGINX,
      book: {},
      rendition: {},
    };
  },
  computed: {
    ...mapGetters(['filename'])
  },
  created() {},
  mounted() {
    const { fileUrl } = this.$route.params;
    const targetUrl = `http://${process.env.VUE_APP_NGINX}/epub/${fileUrl}.epub`;

    this.$store.dispatch('setFilename', targetUrl).then(() => {
      this.initEpub(this.filename)
    })
  },
  methods: {
    initEpub(url) {
      this.book = new Epub(url);
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
      })
      this.rendition.display()
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next()
      }
    }
  }
};
</script>

<style scoped lang="less">
#book {
  height: 100px;
  border: 1px solid #089e8a;
}
</style>
