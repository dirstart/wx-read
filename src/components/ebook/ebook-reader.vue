<template>
  <div class="ebook-reader">
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
    ...mapGetters(['filename', 'menuVisible'])
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
      this.rendition.on('touchstart', (event) => {
        this.touchStartX = event.changedTouches[0].clientX
        this.touchTime = event.timeStamp
      })
      this.rendition.on('touchend', (event) => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const diffTime = event.timeStamp - this.touchTime
        if (diffTime < 500 && offsetX > 40) {
          this.prevPage()
        } else if (diffTime < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          // 如果时间小于 500ms 则判定是要展示中间的内容
          this.toggleTitleMenu()
        }
        // event.preventDefault()
        event.stopPropagation()
      })
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    toggleTitleMenu() {
      this.$store.dispatch('setMenuVisible', !this.menuVisible)
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
