import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const IndexPage = () => import('@/pages/index.vue')

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:"IndexPage",
            component: IndexPage
        }
    ]
})


export default router