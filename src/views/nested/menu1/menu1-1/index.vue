// 视频播放
<template>
  <div>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 视频播放 -->
        <el-tab-pane label="视频播放" name="video">
          <el-row>
            <el-button type="success">视频播放</el-button>
          </el-row>
          <div class="videoContainer">
            <video-player v-for="(item, index) in [1, 2, 3, 4]" :key="index" class="video" />
          </div>
        </el-tab-pane>
        <!-- 二维码 -->
        <el-tab-pane label="二维码" name="qscode">
          <h3 class="h3">二维码 验证</h3>
          <el-row>
            <el-button type="primary" size="big">二维码</el-button>
          </el-row>
          <div ref="qrCodeDiv" class="bl-center" />
          <p>生成二维码之后 检测用户是否扫描二维码 跳转相应页面</p>
        </el-tab-pane>
        <!-- 定时任务补偿 -->
        <el-tab-pane label="定时任务补偿" name="time">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import videoPlayer from './video.vue'
export default {
  name: 'Menu11',
  components: { videoPlayer },
  data() {
    return {
      list: [],
      activeName: 'video'
    }
  },
  created() {
    setTimeout(() => {
      this.bindQRCode()
    }, 1000)
  },
  async mounted() {},
  methods: {
    bindQRCode: () => {
      const that = this
      try {
        new QRCode(that.$refs.qrCodeDiv, {
          text: 'www.baidu.com',
          width: 200,
          height: 200,
          colorDark: '#333333', // 二维码颜色
          colorLight: '#ffffff', // 二维码背景色
          correctLevel: QRCode.CorrectLevel.H // 容错率，L/M/H
        })
      } catch (error) {
        console.log(error)
      }
    },
    // tabs 组件切换
    handleClick(tab, event) {
      console.log(tab)
      console.log(event)
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
.box-card {
  height: 800px;
}
.videoContainer {
  display: flex;
}
.video {
  margin: 10px;
  flex: 1;
}
</style>
