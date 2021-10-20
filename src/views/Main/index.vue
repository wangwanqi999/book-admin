<template>
  <div id="main">
    <div class="main" v-for="(item, index) in 199" :key="index">页面</div>
  </div>
</template>
<script>
export default {
  name: 'main',
  data() {
    return {}
  },
}
</script>
<style scoped>
.main {
  height: 10px;
  margin-bottom: 10px;
  background-color: green;
}
</style>
