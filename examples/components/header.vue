<!--
 * @Author: your name
 * @Date: 2020-11-18 11:17:13
 * @LastEditTime: 2020-11-24 14:02:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-cw-design-vue/examples/components/header.vue
-->

<template>
  <div class="page-header">
    <div class="logo">
      <img src="../assets/img/logo.jpeg">
    </div>
    <div class="ui" >gov-UI</div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
  .page-header{
    height: 70px;
    box-shadow: rgba(29, 29, 29, 0.07) 0px 10px 60px 0px;
  }
  .page-header .logo{
    float: left;
    margin-left: 60px;
  }
  .page-header .logo img{
    margin-top: 10px;
    width: 280px;
    height: 65px;
    margin-left: 5px;
  }
  .page-header .ui{
    float: left;
    color: #6190e8;
    margin-top: 43px;
    margin-left: 8px;
    font-size: 13px
  }
</style>
