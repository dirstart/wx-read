# wx-read

## 开发日志

- 2020年4月29日 - 今天用了一个错误的 epub 文件，让我误以为是代码错误，折腾了很久。
  > 经验：以后需要多几个文件格式来对照；特别是这种没用过的第三方依赖（当然，并不是依赖的问题）；

  **测试是否是可用的 epub 文件工具：小新 pdf 阅读器。经验之谈**
  !! 这也体现了测试的重要性。
 
- 2020年5月16日 - 今天终于把教程原项目的icon之类的东西导入了；之前导入失败的时
候像个无头的苍蝇。去理解font-face和iconmoon、iconfont的原理后，瞬间就解决了。去
熟悉原理，牢记基础，大多数问题都能迎刃而解。

- 2020年5月17日，发现昨天的问题解决的根本原因不是我想的那样。
  [这是一些网上和我有相同问题的：stackoverflow](https://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts#)
  > 虽然他们没有帮我解决问题，但是给我提供了解决问题的思路。
  ```
  @font-face {
    font-family: 'icomoon';
    src:  url('/fonts/icomoon.eot?eu5z6r');
    src:  url('/fonts/icomoon.eot?eu5z6r#iefix') format('embedded-opentype'),
      url('/fonts/icomoon.ttf?eu5z6r') format('truetype'),
      url('/fonts/icomoon.woff?eu5z6r') format('woff'),
      url('/fonts/icomoon.svg?eu5z6r#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  ```
  **1、根本原因是我把它所需要的资源文件 fonts 放在了 assets 里面，但它引用的路径是 public 路径。**
  **2、而我昨天偶然的解决是因为：我试错的时候有一次偶然试对了（这个时候刚好也把 fonts 扔进了public），浏览器成功加载并且缓存了！！！然后我以为是我的另一个方法解决了，就删掉了public里的 fonts。实际上正确的解决方案仍是放进 public 里面。**

  但昨天的感想没有错hhh，真是巧合，牢记基础是快速彻底解决问题的必要因素；剩下的就交给运气了。
  vue-cli 的 public 里的文件，在 localhost 是能直接看到的：例如本项目的`http://localhost:8081/reset.css`

- 2020年5月17日 - 看教程有感
  > 刚看到教程说到“样式覆盖的问题”。最近刚好遇见这个，有感而发：在 vue-cli 中，你不写 scoped 其实很容易就造成样式覆盖了（捂脸，我在目前公司的商城的项目中被这个问题坑到两次了；特别是开发环境和测试还没问题，一上生产就发现了）。

  **vue的懒加载机制，可能会导致本地开发的时候样式被覆盖没有被发现哦！！！（当然，这不能怪懒加载。）**

- 2020年5月24日
  * defaultFontSize：完全意义上的第一次进入 vuex 里面的默认值
  * localStorage.fontSize：上一次进入后，再次进入网站的默认值

- 2020年5月30日
  * 学习 better-scroll 最好先看文档，网上有把事件名大小写弄错的，更有很多跟不上新的版本的。
  * 先看文档，先看文档，先看文档。
  * 待添加：mockJS 的拦截功能

- 2020年5月31日
  * 思考关于如何通过 emit 搭配 async/await 使用。**发现不行**。
    > 替代方法一：emit 传 Promise-resolve 进去
      ```
      // await new Promise((resolve) => {
      //   this.$emit('refreshData', resolve)
      // })
      ```
      方法二：直接在 props 传函数（网上说不推荐，不过看 elementUI 应该也是这么做的）
      ```
      await this.refreshData()
      ```

- 2020年5月31日
  * 终于明白了，下拉刷新的 div 结构是怎么出来的。
    > 这里其实我觉得**文档**写的不够仔细。其所需要的结构，需要让其高度为**超出视口的高度**。即如果设置 absolute，高度为 80px，实际上我们在设置位置的时候，要设置 `top:-80px;`。另外，这里我们所悬停的高度其实是在初始化通过 JS 设置的，而不是 CSS
      ```
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 配置下拉刷新插件
        pullDownRefresh: {
          threshold: 70,
          // ！！！这个 stop非常关键，这是控制其悬停的高度
          // 回弹停留的距离，也意味着这是你的 refresh 和 一些提示所能够拥有的高度
          stop: 80,
        }
      })
      ```
      **这里的 stop 即是我们想要的下拉刷新的视口高度。**
  * 上拉加载和下拉刷新还是，有些差别的
    > 可以不需要配置 stop 里的东西。不过最后需要 finishPullUp 的思路是类似的。
      ```
      this.scroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad: this.pullUpLoad,
      })
      ```


* * *

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

* * *

* viewport - 用于静止用户对页面进行缩放。
