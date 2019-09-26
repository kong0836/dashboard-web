<template>
  <el-date-picker
    v-model="startDateTime"
    type="datetime"
    placeholder="开始时间"
    align="center"
    :picker-options="startDateTimePickerOptions"
  >
  </el-date-picker>
</template>

<script>
  export default {
    name: "StartDateTime",
    data() {
      return {
        startDateTime: '',
        startDateTimePickerOptions: {
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
