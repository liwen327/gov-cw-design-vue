<!--
 * @Author: your name
 * @Date: 2020-11-18 11:15:19
 * @LastEditTime: 2020-11-24 14:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-cw-design-vue/examples/components/footer.vue
-->

<template>
  <div class="page-footer">
    <div class="footer-container">
      <div>
        <div >
          <a href="https://monkeywangs.github.io/">
            <!-- <img src="../assets/img/cat.png" width="80"> -->
          </a>
          <div>
            <p>author: gov</p>
            <p></p>
            <p>github: <a href="https://github.com/liwen327/gov-cw-design-vue">https://github.com/liwen327/gov-cw-design-vue</a></p>
          </div>
        </div>
        <div :span="12" class="text-right">

        </div>
      </div>
      <!-- <j-row type="flex" justify="space-between">
        <j-col :span="12" class="text-left">
          <a href="https://monkeywangs.github.io/">
          </a>
          <div>
            <p>github: <a href="https://github.com/liwen327/gov-cw-design-vue">https://github.com/liwen327/gov-cw-design-vue</a></p>
          </div>
        </j-col>
        <j-col :span="12" class="text-right">
          <a href="https://github.com/liwen327/gov-cw-design-vue">
          </a>
        </j-col>
      </j-row> -->
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="less" type="text/less" scoped>
  .page-footer {
    padding: 30px 0 30px;
    color: #6190E8;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.8);
    .footer-container{
      width: 90%;
      margin: 0 auto;
    }
    .text-left {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #5e6d82;
      img{
        border-radius: 100%;
        margin-right: 10px;
      }
      a {
        color: #6190E8;
      }
    }
  }

</style>
