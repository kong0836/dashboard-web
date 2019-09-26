<template>
  <el-container direction="vertical" style="height: 100%">
    <header-bar/>
    <el-container>
      <sider-bar/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import SiderBar from "@/components/layout/SiderBar";
  import HeaderBar from "@/components/layout/HeaderBar";

  export default {
    name: 'layout',
    components: {
      HeaderBar,
      SiderBar,
    },
    data() {
      return {}
    },
    mounted() {
      document.title = '首页';
    },
    methods: {}
  }
</script>

<style scoped>
</style>
