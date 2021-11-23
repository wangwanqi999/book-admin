<template>
  <div>
    <template v-for="item in DataList">
      <el-menu-item v-if="!item.children" :key="item.path" :index="item.path" @click="goRouter(item)">
        <i class="el-icon-menu" />
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :key="item.path" :index="item.path">
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ item.meta.title }}</span>
        </template>
        <s-menu :data-list="item.children" />
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SMenu',
  props: {
    DataList: {
      require: true,
      type: Array
    }
  },
  data() {
    return {}
  },
  watch: {
    $route: {
      deep: true,
      handler(newval) {
        const list = []
        newval.matched.forEach((item, index) => {
          if (index !== 0) {
            list.push(item.path)
          }
        })
        this.list = list
      }
    }
  },
  methods: {
    goRouter() {
      console.log(this.$route)
    }
  }
}
</script>
<style lang="scss" scoped>
/*隐藏文字*/
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
.el-menu {
  height: 100%;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
