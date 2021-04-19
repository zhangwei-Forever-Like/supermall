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
      <el-button id="btn2">登录</el-button>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
#Login {
  width: 400px;
  height: 300px;
  margin-left: 100px;
  padding-top: 60px;
}
#btn2 {
  margin-top: 10px;
  margin-left: 150px;
}
#ipt{
    margin-top: 10px;
}
</style>