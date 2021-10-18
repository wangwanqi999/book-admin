<template>
  <div id="home">
    <ul class="nav nablist" id="nav">
      <li @click="goLogin">登录</li>
      <li @click="goAbout">中心管理库</li>
    </ul>
    <router-view id="view" class="homeView"></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push({ path: "about", meta: { name: "登录" } });
    },
    goAbout() {
      this.$router.push({ path: "about", meta: { name: "关于" } }); //不能使用/home/about
    },
  },
};
</script>
<style scope lang='scss' >
// 使用scss报错原因 : 版本冲突
// npm uninstall sass-loader node-sass
// npm install sass-loader@8.0.2 sass@1.26.5  --save-dev

html,
body {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  padding: 0px;
  margin: 0px;
  display: flex;
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
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  /* background-color: #42b983; */
  /* overflow-y: scroll; */
  overflow: hidden;
  -webkit-overflow-scrolling: hidden;
  display: flex;
  flex: 1;
}
#nav {
  width: 200px;
  height: 100%;
  background-color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: blue;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav li {
  height: 30px;
  font-size: 15px;
  background-color: #fff;
  color: rgb(201, 70, 22) !important;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
}
#nav li:nth-child(1) {
  margin-top: 10px;
}
#control {
  flex: 1;
  background-color: rgba(255, 174, 0, 0.644);
}
.homeView {
  flex: 1;
  background-color: 000000;
}
</style>
