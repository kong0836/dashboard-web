<template>
<div>子组件</div>
</template>

<script>
  export default {
    name: "the-child",
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    watch: {},
    beforeCreate() {
      console.log('this.name', this.name);
    },
    created() {
      console.log('this.name', this.name);
    },
    beforeMount() {
      console.log('this.name', this.name);
    },
    mounted() {
      console.log('this.name', this.name);
    },
    beforeUpdate() {
      console.log('this.name', this.name);
    },
    updated() {
      console.log('this.name', this.name);
    },
    activated() {
      console.log('this.name', this.name);
    },
    deactivated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    }
  }
</script>

<style scoped>

</style>
