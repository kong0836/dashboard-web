<template>
  <el-date-picker
    v-model="startTime"
    type="date"
    placeholder="开始日期"
    align="center"
    :picker-options="startTimePickerOptions"
    value-format="timestamp"
  >
  </el-date-picker>
</template>

<script>
  export default {
    name: "DateTime1",
    data() {
      return {
        startTime: '',
        startTimePickerOptions: {
          disabledDate: (date) => {
            //-8.64e7表示可以选择今天的
            return date.getTime() < Date.now() - 8.64e7;
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
