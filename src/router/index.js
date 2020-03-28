import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout'
import TableBar from "@/components/table/TableBar";
import NotFound from "@/components/404/404";
import DatetimeBar from "@/components/datetime/DatetimeBar";
import HomeBar from "@/components/layout/HomeBar";
import Login from "@/components/login/Login";
import Homepage from "@/components/homepage/Homepage";
import Step from "@/view/step/Step";
import checkBoxDemo from "@/view/checkBox/checkBoxDemo";
import Parent from "@/view/demo/lifeCycle/parent";
import Demo1 from "@/view/demo/transfer/Demo1";
import Resource from "@/view/resource/resource";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/demo1',
      component: Parent
    }, {
      path: '/demo2',
      component: Demo1
    }, {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeBar
        }, {
          path: '/exportData',
          name: 'ExportData',
          component: TableBar
        }, {
          path: '/datetime',
          name: 'datetime',
          component: DatetimeBar
        }, {
          path: '/step',
          name: 'step',
          component: Step
        }, {
          path: '/404',
          name: '404',
          component: NotFound
        }, {
          path: '/resource',
          name: 'resource',
          component: Resource
        }
      ]
    }, {
      path: '/checkBox',
      name: 'checkBox',
      component: checkBoxDemo
    }
  ]
})
