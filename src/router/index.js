import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout/layout'
import TableBar from "@/components/table/TableBar";
import NotFound from "@/components/404/NotFound";
import DatetimeBar from "@/components/datetime/DatetimeBar";
import HomeBar from "@/components/layout/HomeBar";
import Login from "@/components/login/Login";
import Step from "@/view/step/Step";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
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
        },
      ]
    }, {
      path: '/demo',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
