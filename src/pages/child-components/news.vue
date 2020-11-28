/*
 * @Author: shaohaibin 
 * @Date: 2020-11-28 12:24:01 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 15:23:08
 */
<template>
   <div>
      <SwitchComponents :checked="checked" :title="'新闻'" @getSwitchValue="getSwitchValue">
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
  name:"news",
  data(){
   return {
     checked:false,
     newsData:{ //提交后端数据
       b:1
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