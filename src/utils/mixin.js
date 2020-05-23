import { mapGetters, mapActions } from 'vuex'
import { FONT_SIZE_LIST } from '@/utils/book'

// eslint-disable-next-line import/prefer-default-export
export const ebookMixins = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible',
      'settingVisible',
      'defaultFontFamily',
      'defaultFontSize',
      'currentBook',
    ])
  },
  data() {
    return {
      fontSizeList: FONT_SIZE_LIST,
    };
  },
  methods: {
    ...mapActions([
      'setFilename',
      'setMenuVisible',
      'setSettingVisible',
      'setDefaultFontFamily',
      'setDefaultFontSize',
      'setCurrentBook',
    ]),
  }
}
