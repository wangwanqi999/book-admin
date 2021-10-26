<template>
  <div>
    <!-- 主页面布局 -->
    <el-container class="containerMain">
      <!-- 头部导航 -->
      <el-header class="d-flex f-bewteen">
        <!-- 左侧居中链接图标 -->
        <h3 class="h3 text-align-center" @click="dialog">西部水泥大宗系统</h3>
        <!-- 导航菜单 -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
        </el-menu>
        <!-- 个人中心设置 -->
        <div>个人中心设置</div>
        <!-- 导航组 -->
      </el-header>
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
    return {
      activeIndex2: '1',
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ path: 'Login', name: 'Login' })
    },
    mounted() {
      this.toLogin()
    },
    // Headers菜单导航点击选中事件
    handleSelect(index, indexPath) {
      console.log(index, indexPath)
    },
    dialog() {
      this.$confirm('欢迎来到西部水泥！')
        .then(() => {})
        .catch(() => {})
    },
  },
}
</script>
<style scoped lang="scss">
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
/* header布局 */
.d-flex {
  display: flex;
  /* justify-content: space-between;
   */
  h3 {
    margin-right: auto;
  }
}
</style>
