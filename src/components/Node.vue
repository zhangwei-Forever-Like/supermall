<template>
  <div id="Node">
    <li v-for='(item,index2) in this.topicsArr' :key=index2>{{item.title}}</li>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return{
      topicsArr:[]
    }
  },
  created() {
    let that=this
    console.log("我是Node");
    Axios.get( "https://cnodejs.org/api/v1/topics").then(function(respone){
      let data=respone.data;
      if(data.success){
        that.topicsArr=data.data
        console.log(that.topicsArr)
      }
      console.log(respone);
    })
  },
};
</script>

<style>
</style>