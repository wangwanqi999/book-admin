<template>
  <div class="menu">
    <!-- 循环遍历空模板  不能直接在template中写key  需要在模板里面的标签中书写key值 -->
    <template v-for="item in DataList">
      <!-- 设置最后最后一级菜单 -->
      <el-menu-item v-if="!item.children" :key="item.path"
        ><i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <!-- 如果不是最后一级菜单 : 即该菜单下有children 子路由  需要创建一个el-menu-group组遍历 -->
      <el-submenu v-else :key="item.partent" :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <s-menu :DataList="item.children"></s-menu>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Datalist: [],
    }
  },
  props: {
    DataList: {
      require: true,
      type: Array,
    },
  },
}
</script>
