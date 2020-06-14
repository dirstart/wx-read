<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from 'epubjs';
import { ebookMixins } from '../../utils/mixin'
import {
  getFontFamily,
  saveFontFamily,
  getFontSize,
  saveFontSize,
  getTheme,
  saveTheme,
} from '../../utils/localStorage'

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

    console.log('test', targetUrl)

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
      this.rendition.display().then(() => {
        this.initFontFamily()
        this.initFontSize()
        this.initTheme()
      })
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
        event.stopPropagation()
      })
      // epubjs的字体设置hook
      this.rendition.hooks.content.register((contents) => {
        Promise.all([
          contents.addStylesheet('/fonts-family/daysOne.css'),
          contents.addStylesheet('/fonts-family/cabin.css'),
          contents.addStylesheet('/fonts-family/montserrat.css'),
          contents.addStylesheet('/fonts-family/tangerine.css')
        ]).then((data) => {
          console.log('加载字体完毕', data);
        })
      })
    },
    initFontFamily() {
      const font = getFontFamily(this.filename)
      if (!font) {
        saveFontFamily(this.filename, this.defaultFontFamily)
      } else {
        this.setFontFamily(font)
      }
    },
    initFontSize() {
      let fontSize = getFontSize(this.filename)
      if (!fontSize) {
        fontSize = 16
        saveFontSize(fontSize)
      }

      this.setFontSize(fontSize)
    },
    initTheme() {
      let theme = getTheme(this.filename)
      if (!theme) {
        theme = 'Default'
        saveTheme(this.filename, theme)
      }

      this.setDefaultTheme(theme)
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
      if (this.fontFamilyPopupVisible) {
        this.setFontFamilyPopupVisible(false)
      }
      this.setMenuVisible(!this.menuVisible)
    },
    // 隐藏菜单栏
    hideTitleMenu() {
      this.setMenuVisible(false)
      this.setSettingVisible(-1)
      this.setFontFamilyPopupVisible(false)
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
