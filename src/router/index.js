import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stats from '@/components/Stats'
import Transactions from '@/components/Transactions'
import UploadCsv from '@/components/UploadCsv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/stats',
      component: Stats
    },
    {
      path: '/transactions',
      component: Transactions
    },
    {
      path: '/upload',
      component: UploadCsv
    }
  ],
  mode: 'history'
})
