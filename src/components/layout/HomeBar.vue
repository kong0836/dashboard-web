<template>
  <div>
    <el-row
      :gutter="20"
      style="margin-left: 10px;margin-right: 10px">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
        </el-card>
      </el-col>
    </el-row>
    <el-row
      :gutter="20"
      style="margin-left: 10px;margin-right: 10px">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "HomeBar",
    data() {
      return {
        bodyStyle: {
          height: '300px',
          textAlign: 'center',
        }
      }
    }
  }
</script>

<style scoped>

</style>
