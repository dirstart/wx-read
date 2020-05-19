import { mapGetters } from 'vuex'

// eslint-disable-next-line import/prefer-default-export
export const ebookMixins = {
  computed: {
    ...mapGetters(['filename', 'menuVisible'])
  }
}
