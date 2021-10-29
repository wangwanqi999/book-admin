<template>
  <div>
    <template v-for="item in DataList">
      <el-menu-item
        v-if="!item.children"
        @click="goRouter(item)"
        :index="item.path"
        :key="item.path"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.path" :key="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <s-menu :DataList="item.children"></s-menu>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: "sMenu",
  data() {
    return {};
  },
  props: {
    DataList: {
      require: true,
      type: Array,
    },
  },
  watch: {
    $route: {
      deep: true,
      handler(newval) {
        let list = [];
        newval.matched.forEach((item, index) => {
          if (index != 0) {
            list.push(item.path);
          }
        });
        this.list = list;
      },
    },
  },
  methods: {
    goRouter() {
      console.log(this.$route);
    },
  },
};
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
