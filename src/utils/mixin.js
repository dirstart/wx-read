import { mapGetters, mapActions } from 'vuex'
import { FONT_SIZE_LIST, FONT_FAMILY_LIST } from '@/utils/book'

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
      'fontFamilyPopupVisible'
    ])
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
      'setDefaultFontSize',
      'setCurrentBook',
      'setFontFamilyPopupVisible',
    ]),
  }
}
