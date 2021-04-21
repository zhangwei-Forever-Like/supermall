<template>
  <div id="Login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录系统</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >找回密码</el-button
        >
      </div>
      <el-input id="ipt"></el-input>
      <el-input id="ipt"></el-input>
      <el-button id="btn2" @click="loginSystem">登录</el-button>
    </el-card>
     <li v-for='(item,index2) in this.topicsArr' :key=index2>{{item.title}}</li>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      topicsArr: []
    };
  },
  methods: {
    loginSystem() {
      Axios.get("/login").then(function (response) {
        let data = response.data;
        if (data.success) {
          that.topicsArr = data.data;
          console.log(that.topicsArr);
        }
        console.log(response);
      });
    },
  },
};
</script>

<style>
#Login {
  width: 400px;
  height: 300px;
  margin-left: 400px;
  padding-top: 60px;
}
#btn2 {
  margin-top: 10px;
  margin-left: 150px;
}
#ipt {
  margin-top: 10px;
}
</style>