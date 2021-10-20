<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scope lang="scss">
// 使用scss报错原因 : 版本冲突
// npm uninstall sass-loader node-sass
// npm install sass-loader@8.0.2 sass@1.26.5  --save-dev

@import './style/commons.scss';
html,
body {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  padding: 0px;
  margin: 0px;
  overflow: scroll;
  min-width: 980px;
}
/* 浏览器自带样式 */
#js-atavi-extension-install {
  display: none !important;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
/* 根标签 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: hidden;
}
</style>
