<template>
  <el-form inline>
    <el-form-item>
      <el-select
        v-model="value"
        placeholder="请选择导出类型"
        clearable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-date-picker
        v-model="dateRange"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-input
        v-model="inputValue"
        placeholder="请输入XXX内容"
        style="width: 300px"
        clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" round>导出</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "SearchBar",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '用户管理'
        }, {
          value: '选项2',
          label: '角色管理'
        }, {
          value: '选项3',
          label: '订单管理'
        }, {
          value: '选项4',
          label: '系统管理'
        }, {
          value: '选项5',
          label: '日志管理'
        }],
        value: '',
        dateRange: '',
        inputValue: '',
      }
    }
  }
</script>

<style scoped>

</style>
