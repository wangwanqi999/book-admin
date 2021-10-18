<template>
  <div class="about">
    页面无地址
    <h1>西部水泥</h1>
    <el-radio-group v-model="radio" change="checkRadio">
      <el-radio :label="1">地下电子市场</el-radio>
      <el-radio :label="2">二层回测中心</el-radio>
      <el-radio :label="3">三层科技部</el-radio>
      <el-radio :label="4">中央大厅</el-radio>
    </el-radio-group>

    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        style="min-width: 2em"
      >
        {{radio}}
      </div>
    </div>
  </div>
</template>

<script>
// 全局路由已经注册 取消button局部注册
// import sButton from "../components/s-button.vue";
export default {
  name: "about",
  components: {},
  data() {
    return {
      radio: 0.3,
    };
  },
  methods: {
    checkRadio() {
      console.log(this.radio);
    },
    // 跳转登录页面
    toLogin() {
      let info = { name: "Login" };
      this.$router.push(info);
    },
  },
};
</script>
