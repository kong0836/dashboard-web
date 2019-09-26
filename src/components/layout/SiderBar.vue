<template>
  <el-aside width="200px">
    <el-menu
      unique-opened
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="defaultActive"
      @select="siderSelect">
      <el-menu-item index="home">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>数据显示</span>
        </template>
        <el-menu-item index="exportData">导出</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-folder"></i>
          <span>组件库</span>
        </template>
        <el-menu-item index="datetime">日期时间组件</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-error"></i>
          <span>错误页面</span>
        </template>
        <el-menu-item index="3-1">401</el-menu-item>
        <el-menu-item index="3-2">404</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "Sider",
    data() {
      return {
        defaultActive: 'home'
      }
    },
    methods: {
      siderSelect(url) {
        this.$router.push({path: url});
      }
    }
  }
</script>

<style scoped>

</style>
