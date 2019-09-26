<template>
  <div>
    <el-row
      :gutter="20"
      style="margin-left: 10px;margin-right: 10px">
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
          <start-date></start-date>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
          <start-date-time></start-date-time>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-left: 10px;margin-right: 10px">
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-left: 10px;margin-right: 10px">
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import StartDate from "@/components/datetime/StartDate";
  import StartDateTime from "@/components/datetime/StartDateTime";

  export default {
    name: "DatetimeBar",
    components: {
      StartDateTime,
      StartDate
    },
    data() {
      return {
        bodyStyle: {
          height: '200px',
          textAlign: 'center',
        }
      }
    }
  }
</script>

<style scoped>

</style>
