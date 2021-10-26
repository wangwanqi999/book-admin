<template>
  <div id="app1">
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
  // 此处设置overflow scroll 滚动之后 会导致右侧出现多余滚动条
  // overflow: scroll;
  // overflow-y: scroll;
  min-width: 980px;
  overflow: hidden;
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
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
// v-modal修改的弹出框是背景颜色的
// ::v-deep .v-modal {
//   background-color: red !important;
// }
.v-modal {
  background-color: rgb(97, 91, 91) !important;
}
</style>
