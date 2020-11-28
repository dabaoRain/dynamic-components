/*
 * @Author: shaohaibin 
 * @Date: 2020-11-28 12:18:25 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 15:22:50
 */
<template>
   <div>
      <SwitchComponents :checked="checked" :title="'汽车'" @getSwitchValue="getSwitchValue">
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
  name:"car",
  data(){
   return {
     checked:false,
     carData:{ //提交后端数据
       a:1
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