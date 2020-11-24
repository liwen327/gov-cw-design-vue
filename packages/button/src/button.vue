<!--
 * @Author: your name
 * @Date: 2020-05-21 16:50:56
 * @LastEditTime: 2020-11-18 15:15:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /gov-cw-design-vue/packages/button/src/Button.vue
-->
<template>
  <a-button type="button" :disabled="disabled" class="gov-button" :class="[type?'gov-button__'+type:'default',{'is-round':round}]" @click="handleClick" >
    <slot></slot>
  </a-button>
</template>
<script>
export default {
  name: 'gov-button',
  data() {
    return {
    };
  },
  props: {
    type: String,
    disabled: Boolean,
    round: Boolean,
  },
  mounted() {
  },
  // 事件
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
  watch: {
  },
};
</script>
