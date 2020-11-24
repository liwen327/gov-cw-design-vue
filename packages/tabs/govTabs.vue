<template>
  <a-tabs class="gov-tabs" :default-active-key="defaultActiveKey" @change="tabChange">
    <a-tab-pane v-for="tab in tabsData" :key="tab.id" :tab="tab.label">
      <slot :name="tab.id"></slot>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  name: 'govTabs',
  data() {
    return {
    };
  },
  props: {
    tabsData: Array,
    defaultActiveKey: String,
  },
  mounted () {
  },
  // 事件
  methods: {
    tabChange (key) {
      this.$emit('tabChange', key);
    },
  },
  watch: {
  },
};
</script>

<style scope lang="less">
  .gov-tabs {
    height: 100%;
    .ant-tabs-content {
      height: calc(100% - 54px);
    }
    .ant-tabs-nav .ant-tabs-tab {
      padding: 6px 2px;
      color: @fontDefaultColor;
      &:hover {
        color: @primaryColor;
      }
      &.ant-tabs-tab-active {
        color: @primaryColor;
      }
    }
    .ant-tabs-ink-bar {
      background-color: @primaryColor;
    }
    .ant-tabs-bar {
      border-color: @defaultBorderColor;
    }
  }
</style>
