<template>
  <a-select class="gov-select" :placeholder="placeholder" :default-value="defaultValue" @change="selectChange" :notFoundContent="notFoundContent">
    <a-icon slot="suffixIcon" type="caret-down" />
    <a-select-option v-for="opt in selectData" :value="opt[replaceFields.key]" :key="opt[replaceFields.key]">
      {{opt[[replaceFields.title]]}}
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  name: 'govSelect',
  data() {
    return {
    };
  },
  props: {
    selectData: Array,
    defaultValue: String, // 默认展示的内容
    notFoundContent: { // 下列列表为空时的展示
      type: String,
      default: '暂无数据',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    replaceFields: { // 将字段标识替换为自定义
      type: Object,
      default: () =>{
        return {
          title: 'name',
          key: 'code',
        };
      },
    },
  },
  mounted() {
  },
  // 事件
  methods: {
    selectChange (value) {
      this.$emit('selectChange', value)
    }
  },
  watch: {
  }
}
</script>

<style scope lang="less">
  .gov-select {
    .ant-select-selection {
      border-color: @defaultBorderColor;
      overflow: auto;
      box-shadow: none;
      &:hover, &:active, &:focus {
        border-color: @primaryColor;
      }
    }
    .ant-select-arrow {
      width: 30px;
      height: 100%;
      top: 0;
      right: 0;
      margin-top: 0;
      background-color: @defaultBackgroundColor;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid @defaultBorderColor;
      border-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      i {
        color: @defaultIconColor;
      }
    }
  }
</style>
