<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
import { ebookMixins } from '../../utils/mixin'

global.ePub = Epub
export default {
  data() {
    return {
      msg: process.env.VUE_APP_NGINX,
    };
  },
  mixins: [
    ebookMixins,
  ],
  created() {},
  mounted() {
    const { fileUrl } = this.$route.params;
    const targetUrl = `http://${process.env.VUE_APP_NGINX}/epub/${fileUrl}.epub`;

    this.setFilename(targetUrl).then(() => {
      this.initEpub(this.filename)
    })
  },
  methods: {
    // 初始化epub电子书
    initEpub(url) {
      this.book = new Epub(url);
      this.setCurrentBook(this.book);
      this.initRendition();
    },
    initRendition() {
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
      });
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
    // 下一页
    nextPage() {
      if (this.rendition) {
        this.rendition.next()
        this.hideTitleMenu()
      }
    },
    // 上一页
    prevPage() {
      if (this.rendition) {
        this.rendition.prev()
        this.hideTitleMenu()
      }
    },
    // 显隐顶部和底部菜单栏
    toggleTitleMenu() {
      if (this.menuVisible) {
        this.setSettingVisible(-1)
      }
      this.setMenuVisible(!this.menuVisible)
    },
    // 隐藏菜单栏
    hideTitleMenu() {
      this.setMenuVisible(false)
      this.setSettingVisible(-1)
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
