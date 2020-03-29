<template>
  <div>
    <el-row>
      <el-col :span="1">
        <el-button
          type="primary"
          @click="createResourceClick">
          新建
        </el-button>
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
        label="授权标识"
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
      :page-size="10"
      :current-page="resourceData.currentPage"
      :total="resourceData.totalPage"
      background
      hide-on-single-page
      layout="total, prev, pager, next, jumper">
    </el-pagination>

    <el-dialog
      title="新增资源"
      :visible.sync="addResourceDialog"
      width="35%">
      <el-form
        ref="resourceForm"
        :model="resourceForm"
        :rules="resourceFormRules"
        label-width="100px"
        size="medium">
        <el-form-item
          label="类型"
          prop="type">
          <el-radio-group
            v-model="resourceForm.type">
            <el-radio
              v-for="(item, index) in resourceTypeEnum"
              :key="index"
              :label="item.label">
              {{item.title}}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="名称"
          prop="name">
          <el-input
            v-model="resourceForm.name"
            placeholder="请输入资源名称"
            maxlength="8"
            clearable
            show-word-limit>
          </el-input>
        </el-form-item>
        <el-form-item
          label="路由"
          v-if="resourceForm.type === resourceTypeEnum[1].label"
          prop="url">
          <el-input
            v-model="resourceForm.url"
            placeholder="请输入菜单路由"
            maxlength="8"
            clearable
            show-word-limit>
          </el-input>
        </el-form-item>
        <el-form-item
          label="上级资源"
          prop="parentId">
          <el-cascader
            v-model="resourceForm.parentId"
            style="width: auto;display: flex;"
            :options="options"
            :props="{ checkStrictly: true }"
            clearable>
          </el-cascader>
        </el-form-item>
        <el-form-item
          label="授权标识"
          v-if="resourceForm.type !== resourceTypeEnum[0].label"
          prop="code">
          <el-input
            v-model="resourceForm.code"
            placeholder="请输入授权标识"
            maxlength="8"
            clearable
            show-word-limit>
          </el-input>
        </el-form-item>
        <el-form-item
          label="状态"
          prop="status">
          <el-radio-group
            v-model="resourceForm.status">
            <el-radio
              v-for="(item, index) in resourceStatusEnum"
              :key="index"
              :label="item.label">
              {{item.title}}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="排序号"
          prop="orderNo">
          <el-input-number
            v-model="resourceForm.orderNo"
            style="display: flex;"
            controls-position="right"
            :min="0"
            :max="5">
          </el-input-number>
        </el-form-item>

        <el-form-item
          label="图标"
          v-if="resourceForm.type !== resourceTypeEnum[2].label"
          prop="icon">
          <el-input></el-input>
        </el-form-item>
        <el-form-item
          label="描述"
          prop="description">
          <el-input
            v-model="resourceForm.description"
            :row="2"
            type="textarea">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addResourceClick">确 定</el-button>
        <el-button @click="addResourceDialog = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "resource",
    filters: {},
    data() {
      return {
        addResourceDialog: false,

        suffixIcon: 'el-icon-search',

        resourceTypeEnum: [{
          label: 0,
          title: '目录'
        }, {
          label: 1,
          title: '菜单'
        }, {
          label: 2,
          title: '按钮'
        }],
        resourceStatusEnum: [{
          label: 0,
          title: '禁用'
        }, {
          label: 1,
          title: '启用'
        }],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }]
        }],


        query: {
          name: ''
        },
        resourceForm: {
          id: '',
          parentId: '',
          name: '',
          url: '',
          code: '',
          type: 1,
          icon: '',
          orderNo: 0,
          status: 1,
          description: '',
        },
        resourceFormRules: {
          parentId: [
            {required: true}
          ],
          name: [
            {required: true}
          ],
          url: [
            {required: true}
          ],
          code: [
            {required: true}
          ],
          type: [
            {required: true}
          ],
          icon: [
            {required: true}
          ],
          orderNo: [
            {required: true}
          ],
          status: [
            {required: true}
          ],
          description: [
            {required: false}
          ],
        },
        resourceData: {
          currentPage: 2,
          totalPage: 100,
          dataList: []
        },
      }
    },
    mounted() {
    }
    ,
    methods: {
      /**
       * 新建资源
       */
      addResourceClick() {

      }
      ,
      /**
       * 新建资源
       */
      createResourceClick() {
        this.addResourceDialog = true;
        console.log('新建资源');
      }
      ,

      /**
       * 查询资源
       */
      findResourceClick() {
        console.log('查询资源');
      }
      ,
    }
  }
</script>

<style scoped>

</style>
