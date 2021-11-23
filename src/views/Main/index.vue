<template>
  <div id="main1">
    <div v-for="item in contentList" :key="item.text" class="main12">
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contentList: [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }]
    }
  },
  mounted() {
    const getNumber = () => {
      return Math.round(Math.random() * 10000)
    }
    this.contentList = this.contentList.map((item) => {
      item.text = getNumber()
      return item
    })
    console.log(this.contentList)
  }
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
