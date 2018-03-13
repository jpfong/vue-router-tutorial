import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Company from '@/components/company'
import Product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: About,
    children: [
      {
        path: '',
        component: Company
      },
      {
        path: 'team',
        component: Team
      },
      {
        path: 'contact',
        component: Contact
      }
    ]
  }, {
    path: '/product/:id',
    component: Product,
    props: true
  }]
})
