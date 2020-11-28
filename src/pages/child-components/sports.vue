/*
 * @Author: shaohaibin 
 * @Date: 2020-11-28 12:24:13 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 15:29:32
 */
<template>
   <div>
      <SwitchComponents :checked="checked" :title="'体育'" @getSwitchValue="getSwitchValue">
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
  name:"sports",
  data(){
   return {
     checked:false,
     sportsData:{ //提交后端数据
       c:1
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