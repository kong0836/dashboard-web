<template>
  <el-header>
    <el-menu
      mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">销售中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
      <el-menu-item index="5">个人中心</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script>
  export default {
    name: "HeaderBar"
  }
</script>

<style scoped>
  .el-menu {
    /*取消背景颜色，同父亲背景色*/
    background: transparent;
  }

  .el-menu-item {
    color: #818496;
  }
</style>
