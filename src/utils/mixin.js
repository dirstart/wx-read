import { mapGetters, mapActions } from 'vuex'
import { FONT_SIZE_LIST, FONT_FAMILY_LIST, themeList } from '@/utils/book'
import * as Storage from '@/utils/localStorage'

// eslint-disable-next-line import/prefer-default-export
export const ebookMixins = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible',
      'settingVisible',
      'defaultFontFamily',
      'defaultFontSize',
      'defaultTheme',
      'currentBook',
      'fontFamilyPopupVisible',
    ]),
    themeList() {
      return themeList(this)
    }
  },
  data() {
    return {
      fontSizeList: FONT_SIZE_LIST,
      fontFamilyList: FONT_FAMILY_LIST,
    };
  },
  methods: {
    ...mapActions([
      'setFilename',
      'setMenuVisible',
      'setSettingVisible',
      'setDefaultFontFamily',
      'setDefaultTheme',
      'setDefaultFontSize',
      'setCurrentBook',
      'setFontFamilyPopupVisible',
    ]),
    /**
     * 这里另外写了一堆方法的原因主要是：
     * 1、设置当前程序内的配置
     * 2、将当前程序的配置保存在 localStorage 里面，用于下次记忆
     */
    setFontFamily(font) {
      this.currentBook.rendition.themes.font(font)
      this.setDefaultFontFamily(font).then(() => {
        // this.switchTheme()
        Storage.saveFontFamily(this.filename, font)
      })
    },
    setFontSize(size) {
      // 某个版本规定了要加 px
      this.currentBook.rendition.themes.fontSize(size + 'px')
      this.setDefaultFontSize(size).then(() => {
        Storage.saveFontSize(this.filename, size)
      })
    },
    setTheme(theme) {
      this.setDefaultTheme(theme).then(() => {
        this.currentBook.rendition.themes.select(theme)
        Storage.saveTheme(this.filename, theme)
      })
    },
  }
}
