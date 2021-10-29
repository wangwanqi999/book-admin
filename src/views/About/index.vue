<template>
  <div class="about">
    <img class="nopage" src="../../assets/404Page1.jpeg" alt="" srcset="" />
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
      path: "../assets/404Page.jpeg",
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
<style scoped>
.about {
  list-style: none;
  line-height: 100%;
  height: 100%;
}
.nopage {
  width: 100%;
  /* height: 100%; */
}
</style>
