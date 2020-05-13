<template>
  <div>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import EbookReader from '../../components/ebook/ebook-reader.vue';
import EbookTitle from '../../components/ebook/ebook-title.vue';

export default {
  components: {
    EbookReader,
    EbookTitle,
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
