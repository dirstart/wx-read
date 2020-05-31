<template>
  <div ref="wrapper" class="scroll-wrap">
    <!-- 内部的结构必须只有一个，否则会出现无法滚动的情况 -->
    <div class="only-one-element">
      <!-- 下拉刷新 -->
      <slot name="pulldown-slot">
        <div class="pulldown-wrapper">
          <div v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>Loading...</span>
            </div>
            <div v-show="!isPullingDown"><span>Refresh success</span></div>
          </div>
        </div>
      </slot>
      <!-- 列表本身 -->
      <slot>
      </slot>
      <!-- 上拉加载 -->
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 3,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Boolean,
      default: false
    },
    // 引入插件的属性（用better-scroll v1.0 是默认都有引入的）
    pullDownRefresh: {
      type: Boolean,
      default: false,
    },
    // 方案二：传 props 函数
    refreshData: {
      type: Function
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this._initScroll()
      }
    })
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return false;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: this.click,
        // 设置回弹动画的时长
        bounceTime: 800,
        // 配置下拉刷新插件
        pullDownRefresh: {
          threshold: 70,
          stop: 50,
        }
      })

      // 原生事件：滑动开始
      this.scroll.on('scrollStart', () => {
        console.log('scroll Start')
      })
      // 插件事件：下拉刷新
      this.scroll.on('pullingDown', this.pullDownHandler)
      // 原生事件
      this.scroll.on('scroll', this.scrollHandler)

      return true
    },
    // scrollHandler(pos) {
    //   console.log('pos.y', pos.y)
    // },
    // 下拉刷新：需要下拉到指定高度才会触发
    async pullDownHandler() {
      this.beforePullDown = false
      this.isPullingDown = true
      // 等待数据返回
      // 同步方案一：emit使用异步：
      // await new Promise((resolve) => {
      //   this.$emit('refreshData', resolve)
      // })
      // 同步方案二：直接props传
      await this.refreshData()

      console.log('等待 emit 结束')
      this.isPullingDown = false
      await this.finishPullDown()
    },
    // 结束刷新事件
    async finishPullDown() {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.scroll.finishPullDown()
          resolve()
        }, 600)
      })
      setTimeout(() => {
        this.beforePullDown = true
        this.scroll.refresh()
      }, 800)
    },
    // 获取数据后重置 better-scroll
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // eslint-disable-next-line prefer-rest-params
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    // 启用 better-scroll
    enable() {
      this.scroll && this.scroll.enable();
    },
    // 禁用 better-scroll
    disable() {
      this.scroll && this.scroll.disable();
    }
  }
};
</script>

<style scoped lang="less">
.scroll-wrap {
  width: 100%;
  height: 100%;
  // -webkit-overflow-scrolling:touch;
}
.pulldown-wrapper {
  position: absolute;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
</style>
