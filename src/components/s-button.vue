<template>
  <el-button :type="type" :size="size" :disabled="disabled" :loading="loading" :class="{ isRadius: round }" :icon="icon" :textColor="textColor" v-bind:style="buttonStyle" @click="handleClick($event)">{{ text }} </el-button>
</template>
<script>
export default {
  name: 's-button',
  data() {
    return {};
  },
  methods: {
    handleClick(event) {
      let info = 'clickButton';
      this.$emit('click', { info, event });
    },
  },
  watch: {
    textColor(newval) {
      console.log(newval);
      if (newval) this.buttonStyle.color = this.textColor;
    },
  },
  props: {
    // 组件类型
    type: String,
    //当前组件选项 多个按钮传入,默认为[]
    options: {
      type: Array,
      default: () => [],
    },
    // 组件按钮文本内容
    text: [String, Number],
    // 设置是否为朴素模式
    plain: {
      type: Boolean,
      dafault: () => false,
    },
    // 设置是否为圆角模式
    round: {
      type: Boolean,
      dafault: () => false,
    },
    // 设置前置图标 默认为空  此功能与loading属性互斥
    icon: {
      type: String,
      dafault: () => '',
    },
    // 设置是否为加载中状态  默认为false
    loading: {
      type: Boolean,
      default: () => false,
    },
    // 设置是否为禁用状态
    disabled: {
      type: Boolean,
      default: () => false,
    },
    // 设置当前组件大小 默认设置中等medium
    size: {
      type: String,
      default: () => 'medium',
    },
    buttonStyle: {
      type: Object,
      dafault: () => {
        return { color: 'yollow' };
      },
    },
    textColor: {
      type: String,
      default: () => 'red',
    },
  },
};
</script>
<style scoped>
.isRadius {
  border-radius: 20px 20px 20px 20px;
}
</style>
