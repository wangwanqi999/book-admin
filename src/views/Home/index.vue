<template>
  <div>
    <!-- 主页面布局 -->
    <el-container class="containerMain">
      <!-- 头部导航 -->
      <el-header class="d-flex f-bewteen">
        <!-- 左侧居中链接图标 -->
        <h3 class="h3 text-align-center" @click="dialog">西部水泥大宗系统</h3>
        <!-- 导航菜单 -->
        <!-- 个人中心设置 -->
        <div class="headerImg">
          <span class="el-icon-user-solid" />
          王万琦
        </div>
        <!-- 导航组 -->
      </el-header>
      <!-- 主布局容器 -->
      <el-container>
        <!-- 边导航 -->
        <el-aside>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px" class="collapse">
            <el-radio-button label="false">展开</el-radio-button>
            <el-radio-button label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu
            :collapse="isCollapse"
            :collapse-transition="isCollapse"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
          >
            <s-menu :data-list="DataList" />
          </el-menu>
        </el-aside>
        <!-- 子路由出口 -->
        <el-main>
          <sBreadcrumb :list="DataList" />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sMenu from './s-menu'
import sBreadcrumb from '../../components/s-breadcrumb.vue'
import { asyncRouterMap } from '../../commons/utils/mock'
export default {
  name: 'Home',
  components: { sMenu, sBreadcrumb },
  data() {
    return {
      DataList: asyncRouterMap,
      isCollapse: false
    }
  },
  methods: {
    dialog() {
      this.$sloading.open()
      setTimeout(() => {
        this.$sloading.closed()
      }, 1000)
    },
    handleSelect(key, keypath) {
      this.$router.push(key)
      console.log(keypath)
    }
  }
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
  line-height: 30px;
}
.el-header {
  padding-right: 0px !important;
}

.el-aside {
  width: auto;
  background-color: #d3dce6;
  color: #000000;
  text-align: left !important;
  line-height: 20px;
  font-size: 15px !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
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
.headerImg {
  display: flex;
  flex-direction: column;
  // align-items: center;
  // 此处转换坐标轴 不能时使用 align-items进行居中
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 2px 10px;
  background-color: #fff;
  img {
    width: 20px;
    height: 20px;
  }
}
// 折叠菜单样式
.collapse {
  display: flex;
  flex-direction: column;
}
// 边导航自适应
aside {
  width: auto !important;
}
// 折叠后卡顿问题
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px; //宽度自己掌握
  height: 100%;
}
</style>
