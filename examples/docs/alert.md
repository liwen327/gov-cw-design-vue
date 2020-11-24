<!--
 * @Author: your name
 * @Date: 2020-11-16 11:29:42
 * @LastEditTime: 2020-11-16 13:57:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uf-ui/Users/liwenzhi/worksapce/yonyou/gov-cw-design-vue/examples/docs/alert.md
-->

## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<template>
  <gov-alert
    title="成功提示的文案"
    type="success">
  </gov-alert>
  <gov-alert
    title="消息提示的文案"
    type="info">
  </gov-alert>
  <gov-alert
    title="警告提示的文案"
    type="warning">
  </gov-alert>
  <gov-alert
    title="错误提示的文案"
    type="error">
  </gov-alert>
</template>
```

<!--
### 文字居中

使用 `center` 属性让文字水平居中。

:::demo
```html
<template>
  <gov-alert
    title="成功提示的文案"
    type="success"
    center
    show-icon>
  </gov-alert>
  <gov-alert
    title="消息提示的文案"
    type="info"
    center
    show-icon>
  </gov-alert>
  <gov-alert
    title="警告提示的文案"
    type="warning"
    center
    show-icon>
  </gov-alert>
  <gov-alert
    title="错误提示的文案"
    type="error"
    center
    show-icon>
  </gov-alert>
</template>
```
:::

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

:::demo 除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
```html
<template>
  <gov-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
  </gov-alert>
</template>
```
:::

### 带有 icon 和辅助性文字介绍

:::demo 最后，这是一个同时具有 icon 和辅助性文字的样例。
```html
<template>
  <gov-alert
    title="成功提示的文案"
    type="success"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </gov-alert>
  <gov-alert
    title="消息提示的文案"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </gov-alert>
  <gov-alert
    title="警告提示的文案"
    type="warning"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </gov-alert>
  <gov-alert
    title="错误提示的文案"
    type="error"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </gov-alert>
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | 标题           | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字。也可通过默认 slot 传入 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| center | 文字是否居中 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |
| effect | 选择提供的主题 | string | light/dark | light |

### Slot

| Name | Description |
|------|--------|
| — | 描述 |
| title | 标题的内容 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — | -->
