import { createRouter , createWebHistory } from 'vue-router'
import LandingPage from '../LandingPage/LandingPage.vue'
import LoginPage from '../Auth/LoginPage.vue'
import Welcome from '../WantToWork/Welcome/WantToWork.vue'
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
    },
    {
        path : '/welcome',
        name : 'welcome',
        component : Welcome
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;