<template>
  <div class="about">
    <ul class="ul">
      <li :class="{'active': active === index}"
        @click="toggle(index)"
        class="li"
        v-for="(item, index) in [1, 2, 3]" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    }
  },
  methods: {
    toggle(item) {
      this.active = item
    },
  },
}
</script>

<style>
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ul {
    width: 300px;
  }
  .li {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    width: 100px;
    border: 1px solid #089e8a;
  }
  .li.active::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 100%;
    background: cornflowerblue;
  }
</style>
