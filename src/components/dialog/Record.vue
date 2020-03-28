<template>
  <el-dialog
    :title="recordObject.title"
    :visible.sync="recordObject.show"
    :width="width"
    :before-close="beforeClose">
    <el-table
      :data="tableData"
      border
      stripe>
      <el-table-column
        v-for="(item, index) in columnArray"
        :key="index"
        :prop="item.prop"
        :align="item.align"
        :label="item.label"
        :width="item.width">
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "record",
    props: {
      width: {
        type: String,
        default: '50%'
      },
      recordObject: {
        type: Object,
        default: {
          show: false,
          title: ''
        },
        required: true
      },
      columnArray: {
        type: Array,
        default() {
          return [{
            prop: 'name',
            label: '姓名',
            align: 'center'
          }]
        },
        required: true
      },
      tableData: {
        type: Array,
        default() {
          return [{
            name: '小明'
          }]
        },
        required: true
      }
    },
    filters: {
      /**
       * 日期格式化 年月日
       *
       * @param dateTime
       * @returns {string}
       */
      dateTimeFormat(dateTime) {
        return moment(dateTime).format('YYYY-MM-DD');
      },
    },
    methods: {
      /**
       * 弹框关闭前回调
       */
      beforeClose() {
        console.log('弹框关闭前回调');
        this.recordObject.show = false;
      },
    }
  }
</script>

<style scoped>

</style>
