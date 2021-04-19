<template>
  <el-container>
    <el-header><Header/></el-header>
    <el-main><div id="function"><router-view></router-view></div></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  },
};
</script>

<style>
#function{
  height: 400px;
  background-color: rebeccapurple;
}
</style>