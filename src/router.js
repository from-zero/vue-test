import Vue from 'vue'
import Router from 'vue-router'
// import Router from './krouter/krouter'
import Home from './views/Home.vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children:[
        {name:'page1', path:'page1', component:Page1},
        {name:'page2', path:'page2', component:Page2},
      ]
    }
  ]
})
