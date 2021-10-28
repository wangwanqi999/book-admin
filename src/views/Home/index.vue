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
          <el-menu-item
            v-for="(item, i) in menuList"
            @click="handleClickMenu(item)"
            :key="i"
            :index="item.id"
          >
            <div>{{ item.name }}</div>
          </el-menu-item>
        </el-menu>
        <!-- 个人中心设置 -->
        <div>个人中心设置</div>
        <!-- 导航组 -->
      </el-header>
      <!-- 主布局容器 -->
      <el-container>
        <!-- 边导航 -->
        <el-aside width="200"> </el-aside>
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
      menuList: [
        // 首页
        {
          name: '首页',
          id: '1',
          subMenuList: [
            {
              name: '系统首页',
              iconFont: 'el-icon-location',
              path: '/home',
              id: '1-1',
            },
          ],
        },
        // 订单
        {
          name: '订单',
          id: '2',
          subMenuList: [
            {
              name: '订单列表',
              iconFont: 'el-icon-location',
              id: '2-1',
            },
          ],
        },
        // 设置
        {
          name: '设置',
          id: '3',
          subMenuList: [
            {
              name: '个人中心',
              iconFont: 'el-icon-location',
              id: '3-1',
            },
          ],
        },
        {
          name: '中央配置库',
          id: '4',
        },
      ],
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
      // this.$myLoading('华影')
      // console.log(this.$myLoading)
      this.$sloading.open('loading')
      setTimeout(() => {
        this.$sloading.closed()
      }, 3000)
    },
    handleClickMenu(item) {
      this.activeIndex2 = item.id
    },
    // aside展开项
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    // 关闭项
    handleClose(key, keyPath) {
      console.log(key, keyPath)
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
  width: 100px !important;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
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
</style>
