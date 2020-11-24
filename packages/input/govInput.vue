<template>
  <div>
    <a-input class="gov-input" :placeholder="placeholder" :disabled="disabled" @input="input" :value="value"></a-input>
  </div>

</template>
<script>
export default {
  name: 'govInput',
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    placeholder: String,
    value: String,
    disabled: Boolean,
  },
  computed: {
  },
  mounted() {
  },
  // 事件
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value);
    },
  },
  watch: {
  },
};
</script>

<style scope lang="less">
  .gov-input {
    border-color: @defaultBorderColor;
    &:hover {
      border-color: @primaryColor;
    }
    &[disabled]:hover {
      border-color: @defaultBorderColor;
    }
  }
</style>
