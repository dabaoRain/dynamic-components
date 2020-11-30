/*
 * @Author: shaohaibin 
 * @Date: 2020-11-28 11:53:54 
 * @Last Modified by: shaohaibin
 * @Last Modified time: 2020-11-28 16:29:23
 */
<template>
    <div>
       <component
            class="mb"
            v-for="(item,i) in componentList"
            :ref="item.file.name"
            :key="i"
            :is="item.file"
            :data="item.data"
       ></component>
       <div class="btns">
         <van-button type="primary" @click="submit">提交</van-button>
         <van-button type="primary" @click="getOrderDetail">获取</van-button>
       </div>
    </div>
</template>

<script>
import modules from './index.js'
import _ from 'lodash'
export default {
  data(){
    return{
      fileModules:[
        //这里定义后端返回数据与所有子组件文件的映射关系 没有顺序要求
        // 以Car:'car', 为例，Car(大写)未后端返回数据的主键 car（小写）为子组件的文件名
        //所以这就要求汽车子组件都需要在子组件加入name而且name需要设置为'car'
        {
           action:"Car",
           filename:'car',
           isEdit:true //表示编辑时显示此组件 也就是说可以在对象上自定义标识来确定什么时候是否渲染该组件
           //例如 isCheck查看 如果不加任何标识 默认展示该组件
        },
        {
           action:"News",
           filename:'news',
        },
        {
           action:"Sports",
           filename:'sports',
           isAdd:true
        },
        //特殊场景：
        //有的时候后端只能返回上述三个映射关系，但是我们页面中需要展示4个 5个甚至更多的模块
        //我们就需要自定义映射关系
        // if need  下面配置只用来演示 实际使用中按照下面循环的方式
        // {
        //   //自定义对象
        //    action:"Custom",
        //    filename:'custom',
        // }
      ],
      setFileShow:[
        //该数组为后端返回数据，告知前端需要展示那些模块
        //对象里面的name只为理解 可不加 具体依据后端返回数据
        //action 是必须的 action的值 需要与fileModules 对象里面的key值做映射
        //此数组返回来的数据直接决定了最终页面展示模块的顺序
        {
          name:"新闻",
          action:"News",
          data:{
            content:'我是新闻组件'
          }
        },
        {
          name:"汽车",
          action:"Car",
          data:{
            content:'我是汽车组件'
          }
        },
        {
          name:"体育",
          action:"Sports",
          data:{
            content:'我是体育组件'
          }
        },
      ],
    }
  },
  computed:{
    componentList(){
      let arr = [] //定义最终展示那些模块的数组
      let setFileShow = this.setFileShow //后端返回数据
      let fileModules = this.fileModules //映射关系
      for(let i=0;i<setFileShow.length;i++){
        for(let j=0;j<fileModules.length;j++) {
          if(setFileShow[i].action == fileModules[j].action) {
            if(fileModules[j].isEdit){
              //如果当前映射对象中有isEdit标识 但是当前不属于编辑页面 那么break跳出当前循环
              if(this.$route.query.isEdit != '1') {
                break  
              }
            } 
            arr.push({
              file:modules[fileModules[j].filename],
              data:setFileShow[i].data
            }) 
          } else {
          }
        }
      }
      console.log(arr)
      //if need
      //此时已经拿到了 后端返回的需要展示的模块项（backList） 
      //那么自定义展示的模块需要手动加代码配置
      //简单粗暴 直接将这个对象放到数组中
      
      //如果需要在backList前插入模块
      //arr.unshift({file: modules['custom'], data: {}})
      //如果需要在backList后插入模块
      //arr.push({file: modules['custom'], data: {}})

      //如果需要插入到backList中的某一个位置
      arr.splice(1,0,{file: modules['custom'], data: {/*这里是自定义数据*/}})
      return arr
    },
    
   
  },
  mounted(){
    console.log(this.$route.query)
  },
  methods:{
    submit(){
      //获取各个组件数据提交
      let obj = {} //定义向后端传输数据
      //两种方式：
      //1. 获取各个子组件中的data对象
      let componentFiles = this.$refs //所有子组件中的data集合list
      for(let item in componentFiles) {
        let fileData = componentFiles[item][0]._data
        switch (item) {
          case 'car':
            obj.car = fileData.carData //此处obj后面的car为测试使用 实际以提交数据真实的key为准
            break
          case 'news':
            obj.news = fileData.newsData
            break
          case 'sports':
            obj.sports = fileData.sportsData
            break     
        }
      }
      //方法2：
      //各个组件根据自己的逻辑 可以将对应的数据存储到vuex
      //然后在本组件 将所有的需要传递的数据通过vuex引入 最后自己进行组装
      //配置
        // import {mapState, mapActions, mapMutations} from 'vuex'
        // ...mapState('demo/demo', [
        //   'car_data', //汽车
        //   'news_data', //汽车
        //   'sports_data', //汽车
        // ]),
      //代码：
        // obj.car = this.car_data
        // obj.news = this.news_data
        // obj.sports = this.sports_data
        console.log(obj) //此时已经拿到了 所有组件的需要传递给后端的数据
      //上述两种方式根据实际情况使用
    },
    getOrderDetail(){
      //获取详情数据后渲染各个子组件
      //方法1：
      // console.log(this.componentList) 
      // let data = {
      //   car:"汽车--后端返回",
      //   news:"新闻--后端返回",
      //   sports:"体育--后端返回",
      //   custom:"自定义--后端返回",
      // } //data 模拟为后端发挥数据
      // for(let item of this.componentList) {
      //   switch (item.file.name) {
      //     case 'car':
      //       item['data'] = data.car
      //       break
      //     case 'news':
      //       item['data'] = data.news
      //       break
      //     case 'sports':
      //       item['data'] = data.sports
      //       break
      //     case 'custom':
      //       item['data'] = data.custom 
      //       break
      //   }  
      // }
      // //记得这里将数组神拷贝一下
      // this.componentList = _.cloneDeep(this.componentList)

      //方法2；（推荐）
      //拿到后端数据根据模块将数据存入vuex中 然后子组件监听vuex来渲染各自组件的数据
      //这里就不展示代码了
    }
  }   
}
</script>

<style lang="stylus" scoped>
.btns{
    display: flex;
    justify-content:center;
    align-items:center;
    button{
      margin 0 20px
    }
}
</style>