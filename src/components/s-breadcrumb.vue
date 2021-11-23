<template>
  <div class="breadcrumb">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="item in list" :key="item" :class="{ isWeight: true }">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'SBreadcrumb',
  data() {
    return {
      list: []
    }
  },
  watch: {
    $route: {
      deep: true,
      handler(newval) {
        // this.list = newval.path.split('/')
        this.getList()
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.list = []
      // 取出子项
      const arrayRoute = this.$route.matched.slice(1, this.$route.matched.length)
      arrayRoute.forEach((item) => {
        this.$set(this.list, this.list.length, item.meta.title)
      })
    },
    // 数组平铺
    getAllRoutes(params, route) {
      if (!Array.isArray(params)) {
        return {}
      }
      let obj = {}
      params.forEach((item) => {
        if (item.path === route) {
          obj = item
        } else {
          if (item.children) {
            const routes = item.children
            obj = this.getAllRoutes(routes, route)
          }
        }
      })
      return obj
    }
  }
}
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
