<template>
  <div>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/ebook-reader.vue';
import EbookTitle from '../../components/ebook/ebook-title.vue';
import EbookMenu from '../../components/ebook/ebook-menu.vue';

export default {
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
