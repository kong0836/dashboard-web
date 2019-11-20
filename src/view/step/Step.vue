<template>
  <div>
    <el-steps :active="active" simple :finish-status="finishStatus">
      <el-step title="第一步" icon="el-icon-edit"></el-step>
      <el-step title="第二步" icon="el-icon-upload"></el-step>
      <el-step title="第三步" icon="el-icon-picture"></el-step>
      <el-step title="第四步" icon="el-icon-picture"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="nextClick">下一步</el-button>
  </div>
</template>

<script>
  export default {
    name: "Step",
    data() {
      return {
        active: 0,
        finishStatus: 'success'
      }
    },
    methods: {
      nextClick() {
        if (this.active++ > 3) {
          this.active = 0;
        }
      }
    }
  }
</script>

<style scoped>

</style>
