<template>
  <div>
    <el-row>
      <el-col :span="1">
        <el-button type="primary" @click="createResourceClick">新建</el-button>
      </el-col>
      <el-col :span="23">
        <div style="float: right">
          <el-input
            v-model="query.name"
            style="width: 200px;"
            placeholder="请输入资源名称"
            :suffix-icon="suffixIcon"
            @keyup.enter.native="findResourceClick"
            :on-icon-click="findResourceClick">
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-table
      :data="resourceData.dataList"
      border
      stripe
      style="width: 100%;">
      <el-table-column
        label="菜单名称"
        prop="name"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="URL"
        prop="url"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="授权码"
        prop="code"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="类型"
        prop="type"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="图标"
        prop="icon"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="状态"
        prop="status"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="创建人"
        prop="createBy"
        align="center"
        header-align="center">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="createTime"
        align="center"
        header-align="center">
      </el-table-column>
    </el-table>
    <br/>
    <el-pagination
      style="text-align: right"
      page-size="10"
      :current-page="resourceData.currentPage"
      :total="resourceData.totalPage"
      background
      hide-on-single-page
      layout="total, prev, pager, next, jumper">
    </el-pagination>


  </div>
</template>

<script>
  export default {
    name: "resource",
    filters: {},
    data() {
      return {
        suffixIcon: 'el-icon-search',

        resourceData: {
          currentPage: 2,
          totalPage: 100,
          dataList: []
        },

        query: {
          name: ''
        },
      }
    },
    mounted() {
    },
    methods: {
      /**
       * 新建资源
       */
      createResourceClick() {
        console.log('新建资源');
      },

      /**
       * 查询资源
       */
      findResourceClick() {
        console.log('查询资源');
      },

    }
  }
</script>

<style scoped>

</style>
