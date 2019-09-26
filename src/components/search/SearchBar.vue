<template>
  <el-form inline>
    <el-form-item>
      <el-select
        v-model="value"
        placeholder="请选择XXX类型"
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
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        inputValue: ''
      }
    }
  }
</script>

<style scoped>

</style>
