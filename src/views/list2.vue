<template>
  <div class="all-wrap">
    <m-fission-list :data="data"
      ref="scroll"
      :refresh-data="refreshData"
      :load-more="loadMore"
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
    this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    // 23 % 5 = 4...3
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
          this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
          resolve(true)
        }, 500)
      })
    },
    loadMore() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('load more')
          if (this.data.length === 15) {
            resolve({
              isPullUpEnd: true
            })
          } else {
            resolve({
              isPullUpEnd: false
            })
          }
        }, 500)
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
      opacity: 1;
    }
  }
}
</style>
