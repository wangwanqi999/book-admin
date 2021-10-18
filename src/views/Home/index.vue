<template>
  <div>
    <div class="container">
      <div class="row">
        <el-button type="success" @click="toLogin">点击进行登录</el-button>
      </div>
      <div>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "Login", name: "Login" });
    },
    mounted() {
      this.toLogin();
    },
  },
};
</script>
<style scoped>
.m-auto {
  margin: 0px auto;
  float: none;
}
</style>