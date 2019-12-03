<template>
  <el-container direction="vertical" style="height: 100%">
    <header-bar/>
    <el-main>
      <el-carousel :interval="5000" arrow="always" height="460px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderBar from "@/components/layout/HeaderBar";

  export default {
    name: "Homepage",
    components: {HeaderBar},
    data() {
      return {
        carouselList: [
          require('../../assets/images/bg1.jpg'),
          require('../../assets/images/bg2.jpg'),
          require('../../assets/images/bg3.jpg'),
          require('../../assets/images/bg4.jpg'),
        ]
      }
    },
    mounted() {
      document.title = '首页'
    },
    methods: {}
  }
</script>

<style scoped>
  .el-container {
    /*background-image: url("../../assets/images/bg0.jpg");*/
    /*background-color: #2a2a69;*/
  }

  .el-main {
    padding: 0;
  }
</style>
