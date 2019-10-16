<template>
  <el-row>
    <el-col :span="1">
      <el-button type="primary" @click="createClick">新建</el-button>
    </el-col>
    <el-col :span="4" :offset="16">
      <span>活动状态：</span>
      <el-select
        v-model="query.processStatus"
        style="width: 150px"
        placeholder="全部"
        @change="findClick">
        <el-option
          v-for="item in processStatusList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input
        v-model="query.name"
        style="width: 200px;"
        placeholder="请输入活动名称"
        :suffix-icon="suffixIcon"
        @keyup.enter.native="findClick"
        :on-icon-click="findClick">
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        suffixIcon: 'el-icon-search',

        processStatusList: [{
          value: 0,
          label: '未开始'
        }, {
          value: 1,
          label: '进行中'
        }, {
          value: 2,
          label: '已结束'
        }],
        query: {
          processStatus: '',
          name: '',
        }
      }
    },
    methods: {
      /**
       * 新建
       */
      createClick() {
        console.log('新建', this.query);
      },

      /**
       * 查询
       */
      findClick() {
        console.log('查询', this.query);
      }
    }
  }
</script>

<style scoped>

</style>
