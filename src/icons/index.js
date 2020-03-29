/**
 * 字体图标, 统一使用SVG Sprite矢量图标(http://www.iconfont.cn/）
 *
 * 使用:
 *  1. 在阿里矢量图标站创建一个项目, 并添加图标(这一步非必须, 创建方便项目图标管理)
 *  2-1. 添加icon, 选中新增的icon图标, 复制代码 -> 下载 -> SVG下载 -> 粘贴代码(重命名)
 *  2-2. 添加icons, 下载图标库对应[iconfont.js]文件, 替换项目[./iconfont.js]文件
 *  3. 组件模版中使用 [<icon-svg name="canyin"></icon-svg>]
 *
 * 注意:
 *  1. 通过2-2 添加icons, getNameList方法无法返回对应数据
 */
import Vue from 'vue'
import SvgIcon from '@/components/svg-icon/index'

/** require.context("./test", false, /.test.js$/);
 这行代码就会去 test 文件夹（不包含子目录） 下面的找所有文件名以 .test.js 结尾的文件能被 require 的文件。
 更直白的说就是 我们可以通过正则匹配引入相应的文件模块。
 require.context有三个参数：
 directory：说明需要检索的目录
 useSubdirectories：是否检索子目录
 regExp: 匹配文件的正则表达式 */

// 全局注册
Vue.component('svg-icon', SvgIcon)

const svgFiles = require.context('./svg', false, /\.svg$/)
const iconList = svgFiles.keys().map(item => svgFiles(item))

export default {
  // 获取图标icon-*.svg名称列表,例如[shouye, xitong, zhedie, ...]
  getNameList() {
    return iconList.map(item => item.default.id.split('-')[1])
  }
}
