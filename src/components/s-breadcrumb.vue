<template>
  <div class="breadcrumb">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item
        v-for="item in list"
        :key="item"
        :class="{ isWeight: true }"
        >{{ item }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "s-breadcrumb",
  data() {
    return {
      list: [],
      sortList: "",
    };
  },
  watch: {
    $route: {
      deep: true,
      handler(newval) {
        console.log(newval);
        this.list = newval.path.split("/");
        console.log(this.list);
        this.sortList = this.list[newval.length - 1];
      },
    },
  },
  methods: {
    // 数组平铺
    getAllRoutes(params, route) {
      if (!Array.isArray(params)) {
        return {};
      }
      let obj = {};
      params.forEach((item) => {
        if (item.path == route) {
          obj = item;
        } else {
          if (item.children) {
            let routes = item.children;
            obj = this.getAllRoutes(routes, route);
          }
        }
      });
      return obj;
    },
  },

  mounted() {
    this.list = this.$route.path.split("/");
    this.sortList = this.list[this.list.length - 1];
  },
};
</script>

<style scope>
.breadcrumb {
  border: 3px solid red;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: blanchedalmond;
  border-radius: 5px;
}
</style>
