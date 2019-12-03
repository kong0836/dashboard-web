<template>
  <div>
    <!--    <search-bar></search-bar>-->
    <search></search>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%;">
      <el-table-column
        label="文本"
        prop="string"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="日期1"
        prop="date1"
        align="center"
        header-align="center">
        <template slot-scope="scope">
          {{scope.row.date1 | dateTimeFormat1}}
        </template>
      </el-table-column>
      <el-table-column
        prop="date2"
        label="日期2"
        align="center"
        header-align="center">
        <template slot-scope="scope">
          {{scope.row.date2 | dateTimeFormat2}}
        </template>
      </el-table-column>
      <el-table-column
        label="金额（单位：元）"
        prop="amount"
        align="right"
        header-align="center">
        <template slot-scope="scope">
          {{scope.row.amount | amountFormat}}
        </template>
      </el-table-column>
      <el-table-column
        label="数字"
        prop="number"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="类别"
        prop="type"
        align="center"
        header-align="center">
        <template slot-scope="scope">
          {{scope.row.type | typeFormat}}
        </template>
      </el-table-column>
    </el-table>
    <br/>
    <el-pagination
      style="text-align: right"
      background
      hide-on-single-page
      layout="total, prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
  import SearchBar from "@/components/search/SearchBar";
  import moment from 'moment';
  import account from 'accounting';
  import Search from "@/components/search/Search";

  export default {
    name: "TableBar",
    components: {
      Search,
      SearchBar
    },
    data() {
      return {
        tableData: [{
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 9999999,
          number: 1000,
          type: 1
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 2
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 1
        }, {
          string: '居中显示',
          date1: Date.now(),
          date2: Date.now(),
          amount: 0,
          number: 1000,
          type: 1
        }]
      }
    },
    filters: {
      /**
       * 日期格式化 年月日时分秒
       *
       * @param dateTime
       * @returns {string}
       */
      dateTimeFormat1(dateTime) {
        return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
      },

      /**
       * 日期格式化 年月日
       *
       * @param dateTime
       * @returns {string}
       */
      dateTimeFormat2(dateTime) {
        return moment(dateTime).format('YYYY-MM-DD');
      },

      /**
       * 类型格式转换
       *
       * @param type
       * @returns {string}
       */
      typeFormat(type) {
        switch (type) {
          case 1:
            return '测试分类';
          case 2:
            return '其他分类';
          default:
            return '未知类别';
        }
      },

      /**
       * 金额格式化
       *
       * @param amount
       */
      amountFormat(amount) {
        return account.formatMoney(amount, '');
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
