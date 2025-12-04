import { createRouter , createWebHistory } from 'vue-router'
import LandingPage from '../LandingPage/LandingPage.vue'
import LoginPage from '../Auth/LoginPage.vue'
const routes = [
    {
        path:'/',
        name:'LandingPage',
        component:LandingPage
    },
    {
        path:'/login',
        name:'login',
        component:LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;