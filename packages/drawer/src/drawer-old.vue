<template>
  <div class="gov-drawer" :style="{'left': isShow}">
    <slot></slot>
  </div>

</template>
<script>
export default {
  name: 'govDrawer',
  data() {
    return {
    };
  },
  props: {
    visible: Boolean,
  },
  computed: {
    isShow() {
      let res = '0';
      res = this.visible ? '0' : '-200';
      return `${res}px`;
    },
  },
  mounted() {
  },
  // 事件
  methods: {
  },
  watch: {
  },
};
</script>

<style scope lang="less">
  .gov-drawer {
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    padding: 20px 10px;
    background-color: @colorWhite;
    border: 1px solid @defaultBorderColor;
    z-index: 9;
    transition: all 0.45s;
    box-shadow: 2px 0 8px rgba(0,0,0,.15);
  }
</style>
