<template>
  <div style="margin: 0 auto;text-align: center">
    <el-radio-group>
      <el-radio :label="1">全部商品</el-radio>
      <el-radio :label="2">指定商品</el-radio>
    <el-popover
      placement="right"
      trigger="click"
      style="margin-left: 15px">
      <el-transfer
        v-model="value5"
        :props="{
      key: 'value',
      label: 'desc'
    }"
        :data="data3">
      </el-transfer>
      <el-button slot="reference" type="text">测试</el-button>
    </el-popover>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data() {
      const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data3: generateData3(),
        value5: []
      };
    }
  };
</script>
<style scoped>

</style>
