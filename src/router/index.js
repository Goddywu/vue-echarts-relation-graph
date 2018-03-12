import Vue from 'vue'
import Router from 'vue-router'
import RelationGraph from '@/components/RelationGraph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/RelationGraph'
    },
    {
      path: '/RelationGraph',
      name: 'RelationGraph',
      component: RelationGraph
    }
  ]
})
