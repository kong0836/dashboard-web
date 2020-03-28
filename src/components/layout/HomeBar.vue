<template>
  <div>
    <el-row
      :gutter="20"
      style="margin-left: 10px;margin-right: 10px">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card" :body-style="bodyStyle" shadow="never">
          <el-button type="primary" @click="openDialogClick">查看记录</el-button>
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
    <record :record-object="recordObject" :column-array="columnArray" :table-data="tableData"/>
  </div>
</template>

<script>
  import Record from "@/components/dialog/Record";

  export default {
    name: "HomeBar",
    components: {
      Record
    },
    data() {
      return {
        bodyStyle: {
          height: '300px',
          textAlign: 'center',
        },
        recordObject: {
          show: false,
          title: ''
        },

        columnArray: [],
        tableData: []
      }
    },
    methods: {
      /**
       *
       */
      openDialogClick() {
        this.recordObject.show = true;
        this.recordObject.title = '抽奖记录';

        this.columnArray = [{
          prop: 'name',
          label: '姓名',
          align: 'center'
        }];

        this.tableData = [{
          name: '小明'
        }];
      }
    }
  }
</script>

<style scoped>

</style>
