<template>
  <div id="main1">
    <div class="main12" v-for="item in contentList" :key="item.text">
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'mainPage',
  data() {
    return {
      contentList: [
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
        { text: '5' },
      ],
    }
  },
  mounted() {
    const getNumber = function () {
      return Math.round(Math.random() * 10000)
    }
    this.contentList.length = 20
    this.contentList = this.contentList.map((item) => {
      item.text = getNumber()
      return item
    })
    console.log(this.contentList)
  },
}
</script>
<style scoped>
.main12 {
  /* height: 50px; */
  height: 20px;
  /* line-height: 20px; */
  margin-bottom: 10px;
  background-color: goldenrod;
}
</style>
