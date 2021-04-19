import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Node from '../components/Node.vue'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
     {
      path: '/node',
      component:Node
    },
    {
        path:'/login',
        component:Login
    }
]
const router = new VueRouter({
    routes
})

export default router