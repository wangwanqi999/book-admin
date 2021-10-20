<template>
  <div>
    <!-- 主页面布局 -->
    <el-container class="containerMain">
      <!-- 头部导航 -->
      <el-header>Header</el-header>
      <!-- 主布局容器 -->
      <el-container>
        <!-- 边导航 -->
        <el-aside width="200px">
          <li v-for="(item, index) in 100" :key="index">
            {{ item + '王万琦' }}
          </li>
        </el-aside>
        <!-- 子路由出口 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {
    toLogin() {
      this.$router.push({ path: 'Login', name: 'Login' })
    },
    mounted() {
      this.toLogin()
    },
  },
}
</script>
<style scoped>
.m-auto {
  margin: 0px auto;
  float: none;
}
/* 主页面排版布局容器 */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.containerMain {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  /* overflow: hidden; */
}
</style>
