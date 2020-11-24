<!--
 * @Author: liwz
 * @Date: 2020-11-16 11:35:31
 * @LastEditTime: 2020-11-16 14:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath:/Users/liwenzhi/worksapce/yonyou/gov-cw-design-vue/packages/alert/src/alert.vue
-->
<template>
  <!-- <transition name="gov-alert-fade"> -->
    <div
      class="gov-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i class="gov-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="gov-alert__content">
        <span class="gov-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="gov-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="gov-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="gov-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'gov-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'gov-icon-success',
    'warning': 'gov-icon-warning',
    'error': 'gov-icon-error'
  };
  export default {
    name: 'GovAlert',

    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: function(value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `gov-alert--${ this.type }`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'gov-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
