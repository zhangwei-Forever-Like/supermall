<template>
  <div id="HeaderBook">
      <div id="ms">{{message}}</div>
      <el-row id="btn">
  <router-link to="login"><el-button>登录按钮</el-button></router-link>
  <router-link to="home"><el-button type="success">首页按钮</el-button></router-link>
  <router-link to="about"><el-button type="info">关于按钮</el-button></router-link>
  <router-link to="node"><el-button >Node</el-button></router-link>
</el-row>
  </div>
</template>

<script>
export default {
  data(){
      return{
        message:"江西软件职业技术大学"
      }
  }
}
</script>

<style>
#HeaderBook{
  background-color: red;
  height: 60px;
}
#ms{
    float: left;
    margin-top: 15px;
}
#btn{
    float: right;
    margin-top: 10px;
}
</style>