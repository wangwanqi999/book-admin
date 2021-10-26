<template>
  <div id="main1">
    <div class="main1" v-for="(item, index) in 199" :key="index">页面</div>
  </div>
</template>
<script>
export default {
  name: 'mainPage',
  data() {
    return {}
  },
}
</script>
<style scoped>
.main1 {
  height: 50px;
  margin-bottom: 10px;
  background-color: green;
}
</style>
