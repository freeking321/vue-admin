import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import resource from './views/resources/resource.vue'
import ecsList from '@/views/resources/ecsList.vue'
import ecsTypeList from '@/views/type/ecsType.vue'
import ecsDetail from '@/views/resources/ecsDetail.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-message',//图标样式class
    children: [
      { path: '/main', component: Main, name: '主页', hidden: true },
      { path: '/table', component: Table, name: 'Table' },
      { path: '/form', component: Form, name: 'Form' },
      { path: '/user', component: user, name: '列表' },
    ],
    hidden: true,
  },
  {
    path: '/',
    component: Home,
    name: '导航二',
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/page4', component: Page4, name: '页面4' },
      { path: '/page5', component: Page5, name: '页面5' }
    ],
    hidden: true,
  },
  {
    path: '/',
    component: Home,
    name: 'Charts',
    iconCls: 'fa fa-bar-chart',
    children: [
      { path: '/echarts', component: echarts, name: 'echarts' }
    ],
    hidden: true,
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  },
  {
    path: '/',
    component: Home,
    name: '资源概况',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
      { path: '/resource', component: resource, name: '资源概况' },
      { path: '/resource/ecsList', component: ecsList, name: 'ecsList'},
      { path: '/resource/ecsList/ecsDetail', component: ecsDetail, name: 'ecsDetail'}
    ]
  },
  {
    path: '/',
    component: Home,
    name: '资源分类',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
      { path: '/type', component: ecsTypeList, name: '资源分类' }
    ]
  },

];

export default routes;