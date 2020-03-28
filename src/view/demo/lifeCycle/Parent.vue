<template>
  <div>
    <div>父组件</div>
    <div>
      <br>
      <the-child :name="name"></the-child>
    </div>
  </div>
</template>

<script>
  import TheChild from "@/view/demo/lifeCycle/TheChild";

  export default {
    name: "parent",
    components: {
      TheChild
    },
    data() {
      return {
        name: '11111',
      }
    },
    watch: {},
    beforeCreate() {
      console.log('beforeCreate:: this.name', this.name);
    },
    created() {
      console.log('created:: this.name', this.name);
    },
    beforeMount() {
      console.log('beforeMount:: this.name', this.name);
    },
    mounted() {
      console.log('mounted:: this.name', this.name);
    },
    beforeUpdate() {
      console.log('beforeUpdate:: this.name', this.name);
    },
    updated() {
      console.log('updated:: this.name', this.name);
    },
    activated() {
      console.log('activated:: this.name', this.name);
    },
    deactivated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
