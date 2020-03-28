<template>
  <el-aside width="200px">
    <el-menu
      unique-opened
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="defaultActive"
      @select="siderSelect">
      <el-menu-item
        v-for="item in ResourceList"
        v-if="!item.subMenu"
        :index="item.url"
        :key="item.menuId">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menuName}}</span>
        </template>
      </el-menu-item>
      <el-submenu
        v-else
        :index="item.menuId">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menuName}}</span>
        </template>
        <el-menu-item
          v-for="m in item.subMenu"
          :key="m.menuId"
          :index="m.url"
          v-if="!m.subMenu">
          <template slot="title">
            <i :class="m.icon"></i>
            <span>{{m.menuName}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  import ResourceListService from "@/service/menu/ResourceListService";

  export default {
    name: "Sider",
    data() {
      return {
        defaultActive: 'home',
        ResourceList: [],
      }
    },
    mounted() {
      this.findResourceList();
    },
    methods: {
      siderSelect(url) {
        this.$router.push({path: url});
      },
      findResourceList() {
        ResourceListService.findResourceList().then((res) => {
          if (res.data) {
            this.ResourceList = res.data;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
