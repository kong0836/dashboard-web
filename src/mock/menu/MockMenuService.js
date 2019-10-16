const menuList = [{
  menuId: '000',
  url: 'home',
  menuName: '首页',
  icon: 'el-icon-s-home',
  subMenu: null
}, {
  menuId: '1',
  url: '',
  menuName: '数据统计',
  icon: 'el-icon-s-data',
  subMenu: [{
    menuId: '111',
    url: 'exportData',
    menuName: '数据导出',
    icon: 'el-icon-s-data'
  }]
}, {
  menuId: '222',
  url: '',
  menuName: '组件中心',
  icon: 'el-icon-folder',
  subMenu: [{
    menuId: '1',
    url: 'datetime',
    menuName: '日期时间组件',
    icon: 'el-icon-s-data'
  }, {
    menuId: '2',
    url: 'step',
    menuName: '步骤条',
    icon: 'el-icon-s-data'
  }]
}, {
  menuId: '333',
  url: '',
  menuName: '错误页面',
  icon: 'el-icon-error',
  subMenu: [{
    menuId: '1',
    url: '404',
    menuName: '404',
    icon: 'el-icon-edit'
  }]
}];

export default {

  /**
   * 左侧导航菜单
   * @returns {*[]}
   */
  findMenuList() {
    return menuList;
  }
}
