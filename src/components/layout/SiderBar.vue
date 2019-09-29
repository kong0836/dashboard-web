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
        v-for="item in menuList"
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
  import MenuListService from "@/service/menu/MenuListService";

  export default {
    name: "Sider",
    data() {
      return {
        defaultActive: 'home',
        menuList: [],
        // menuList: [{
        //   menuId: '000',
        //   url: 'home',
        //   menuName: '首页',
        //   icon: 'el-icon-s-home',
        //   subMenu: null
        // }, {
        //   menuId: '1',
        //   url: '',
        //   menuName: '数据统计',
        //   icon: 'el-icon-s-data',
        //   subMenu: [{
        //     menuId: '111',
        //     url: 'exportData',
        //     menuName: '数据导出',
        //     icon: 'el-icon-s-data'
        //   }]
        // }, {
        //   menuId: '222',
        //   url: '',
        //   menuName: '组件中心',
        //   icon: 'el-icon-folder',
        //   subMenu: [{
        //     menuId: '1',
        //     url: 'datetime',
        //     menuName: '日期时间组件',
        //     icon: 'el-icon-s-data'
        //   }]
        // }, {
        //   menuId: '333',
        //   url: '',
        //   menuName: '错误页面',
        //   icon: 'el-icon-error',
        //   subMenu: [{
        //     menuId: '1',
        //     url: '404',
        //     menuName: '404',
        //     icon: 'el-icon-edit'
        //   }]
        // }]
      }
    },
    mounted() {
      this.findMenuList();
    },
    methods: {
      siderSelect(url) {
        this.$router.push({path: url});
      },
      findMenuList() {
        MenuListService.findMenuList().then((res) => {
          if (res.data) {
            this.menuList = res.data;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
