/*
 * @Author: shaohaibin 
 * @Date: 2020-11-28 15:38:48 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 15:39:13
 */
<template>
   <div>
      <SwitchComponents :checked="checked" :title="'自定义组件'" @getSwitchValue="getSwitchValue">
        <div slot="content" v-show="checked">
           <div class="content">
              {{data.content}}
           </div>
        </div>
      </SwitchComponents>
   </div>  
</template>

<script>
export default {
  name:"custom",
  data(){
   return {
     checked:false,
     customData:{ //提交后端数据
       d:1
     }
   }
  },
  props:{
    data:{
      type: Object || Array,
      default: ()=>{
        return {}
      }
    }
  },
  methods:{
   getSwitchValue(val){
     this.checked = val 
   }
  }   
}
</script>

<style lang="stylus" scoped>
 .content{
   margin 10px 25px;
 }
</style>