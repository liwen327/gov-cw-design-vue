<!--
 * @Author: your name
 * @Date: 2020-05-10 00:40:56
 * @LastEditTime: 2020-11-25 11:25:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-cw-design-vue/examples/App.vue
-->
<template>
  <div id="app">
    <main-header></main-header>
    <div class="page-body">
      <div class="contianer">
        <side-nav class="nav"></side-nav>
        <router-view class="view"/>
      </div>
    </div>
    <div>
      <main-footer class="footer"></main-footer>
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header';
import sideNav from './components/sideNav';
import mainFooter from './components/footer';

export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav,
    mainFooter,
  },
  created() {
    console.log(this);
  },
};
</script>

<style>
@import "./assets/css/index";
  .page-body{
    min-height: 600px;
    box-shadow: rgba(223, 225, 230, 0.5) 0px 4px 30px 0px;
    width: 90%;
    margin: 48px auto;
  }
  .contianer {
    margin: 48px auto;
    width: 100%;
    display: block;
    /* background-color: rgb(182, 31, 31); */
    display:flex;
  }
  .footer {
    display: block;
  }
  .contianer .nav{
    width: 15%;
  }
  .contianer .view{
    /* float: left;
    width: 85%; */
    padding: 32px 48px 48px;
    box-sizing: border-box
  }
  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
