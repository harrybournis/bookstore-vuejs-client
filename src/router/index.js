import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/books'
import Bookform from '@/components/bookform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books,
    },
	{ path: '/books/:id', component: Bookform, name: 'Bookform' }
  ]
})
