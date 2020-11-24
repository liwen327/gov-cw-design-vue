<!--
 * @Author: your name
 * @Date: 2020-11-16 17:34:17
 * @LastEditTime: 2020-11-17 13:49:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gov-cw-design-vue/examples/docs/govDrawer.md
-->
<template>
  <div class="demo-block">
    <span @click="showDrawer">点击弹出抽屉</span>
    <gov-drawer :width="500" :scrollable="true" :value="isShow" @drawerClose="drawerClose">
      <template v-slot:footer><div @click.stop>
        <a-button
          class="mr-8"
          type="primary"
          @click.stop="queryHandle"
          >查询</a-button
        >
        <a-button
          class="mr-8"
          @click.stop="saveHandle"
          >保存</a-button>
        <a-button @click.stop="saveAsHandle"
          >另存为</a-button>
      </div>
      </template>
    </gov-drawer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    showDrawer(){
      this.isShow = true;
    },
    drawerClose() {
      this.isShow=false
    },
  }
}

</script>

::: demo
```html
    <template>
      <div class="demo-block">
          <span @click="showDrawer">点击弹出抽屉</span>
          <gov-drawer :width="500" :scrollable="true" :value="isShow" @drawerClose="drawerClose">
            <template v-slot:footer><div @click.stop>
              <a-button
                class="mr-8"
                type="primary"
                @click.stop="queryHandle"
                :class="getBtnPer('btn-query')"
                >查询</a-button
              >
              <a-button
                class="mr-8"
                @click.stop="saveHandle"
                :class="getBtnPer('btn-save')"
                >保存</a-button>
              <a-button @click.stop="saveAsHandle" :class="getBtnPer('btn-saveadd')"
                >另存为</a-button>
            </div>
            </template>
          </gov-drawer>
      </div>
    </template>
    <script>
      export default {
        data(){
          return{
            isShow:false
          }
        },
        methods:{
          showDrawer(){
            this.isShow = true;
          },
          drawerClose() {
            this.isShow=false
          },
        }
      }

    </script>
```
:::

