<template>
  <div class="all-wrap">
    <m-fission-list :data="data"
      ref="scroll"
      :refresh-data="refreshData"
      v-if="data.length > 0"
      :pull-up-load="true"
    >
      <ul>
        <li @click="test" v-for="(item, index) in data" :key="index">
          <img :src="`/images/${index + 1}.jpg`" alt="">
        </li>
      </ul>
    </m-fission-list>
    <m-loading v-if="isLoading"></m-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      pageNo: 0,
      pageSize: 5,
      isLoading: false,
    };
  },
  created() {
    this.data = [1, 2, 3, 4, 5, 6]
  },
  mounted() {
  },
  methods: {
    test() {
      console.log('11')
    },
    // 方案一
    // async refreshData(resolve) {
    //   setTimeout(() => {
    //     console.log('refresh ok')
    //     resolve(true)
    //   }, 2000)
    // }
    // 方案二
    refreshData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('refresh ok')
          resolve(true)
        }, 2000)
      })
    }
  }
};
</script>

<style scoped lang="less">
.all-wrap {
  width: 100%;
  height: 100%;
  border: 1px solid #089e8a;
  ul > li {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    font-size: 0;
    > img {
      width: 100%;
    }
  }
}
</style>
