<template>
  <div id="app">
    <nav>
      <el-row class="bg-head">
        <el-col :span="6" class="grid-content text-left"><img src="./assets/logo.png" class="logo-position"></el-col>
        <el-col :span="2" :offset="14" class="grid-content middle-nav-title text-right">
          <el-dropdown trigger="click" class="head-dropdown">
            <span class="el-dropdown-link head-drop-title head-drop-title-first">
              系统设置<i class="el-icon-setting el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="2" class="grid-content middle-nav-title text-left">
          <el-dropdown trigger="click" class="head-dropdown">
            <span class="el-dropdown-link head-drop-title ">
              用户信息<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </nav>
    <section>
      <el-row class="bg-nav">
        <el-col :span="6" class="center-grid-content"></el-col>
        <el-col :span="12" class="center-grid-content">
          <el-row>
            <router-link to="overview"><el-col :span="3" class="center-grid-content center-middle-nav-title">首页</el-col></router-link>
            <router-link to="storage"><el-col :span="3" class="center-grid-content center-middle-nav-title">存储管理</el-col></router-link>
            <router-link to="block"><el-col :span="3" class="center-grid-content center-middle-nav-title">块设备</el-col></router-link>
            <router-link to="object"><el-col :span="3" class="center-grid-content center-middle-nav-title">对象管理</el-col></router-link>
            <router-link to="hardware"><el-col :span="3" class="center-grid-content center-middle-nav-title">硬件管理</el-col></router-link>
            <router-link to="state"><el-col :span="3" class="center-grid-content center-middle-nav-title">性能分析</el-col></router-link>
            <router-link to="alarm"><el-col :span="3" class="center-grid-content center-middle-nav-title">告警管理</el-col></router-link>
          </el-row>
        </el-col>
        <el-col :span="6" class="center-grid-content"></el-col>
      </el-row>
    </section>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  background: #eef1f3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.logo-position{
  margin-top: 15px;
  margin-left: 20px;
}
.bg-head{
  background: #222;
}
.grid-content {
  height: 50px;
}
.center-grid-content {
  height: 70px;
}
.middle-nav-title{
  line-height: 50px;
}
.center-middle-nav-title{
  line-height: 70px;
}
.bg-nav {
  background: #fff;
}
.head-dropdown{
  color: #fff;
  cursor: pointer;
}
.head-drop-title{
  display: inline-block;
  height: 30px;
  margin: 10px 0 10px 10px;
  line-height: 30px;
}
.head-drop-title-first {
  padding-right: 10px;
  border-right: 1px solid #fff;
}
.main-content{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-top: 120px;
  padding: 15px 50px 15px;
}
</style>
