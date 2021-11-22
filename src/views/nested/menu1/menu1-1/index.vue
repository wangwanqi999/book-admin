<template>
  <div>
    <h3 class="h3">二维码 验证</h3>
    <el-row>
      <el-button type="primary" size="big">二维码</el-button>
    </el-row>
    <div ref="qrCodeDiv" class="bl-center" />
    <p>生成二维码之后 检测用户是否扫描二维码 跳转相应页面</p>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import { getPersonInfo } from '@/api/baseApi.js'
export default {
  name: 'Menu11',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.$nextTick(() => {
      this.bindQRCode()
    })
  },
  async mounted() {
    this.list = await getPersonInfo()
  },
  methods: {
    bindQRCode: () => {
      new QRCode(this.$refs.qrCodeDiv, {
        text: 'www.baidu.com',
        width: 200,
        height: 200,
        colorDark: '#333333', // 二维码颜色
        colorLight: '#ffffff', // 二维码背景色
        correctLevel: QRCode.CorrectLevel.H // 容错率，L/M/H
      })
    }
  }
}
</script>
<style scoped>
.bl-center {
  margin: 0px auto;
  line-height: 300px;
  text-align: center;
}
img {
  display: inline-block !important;

  margin: 0px auto;
}
</style>
