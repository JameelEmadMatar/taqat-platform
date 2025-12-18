import { createRouter , createWebHistory } from 'vue-router'
import MyProfile from '../Profile/MyProfile.vue'
import ProfilePage from '../Profile/ProfilePage.vue'
import Experience from '../Profile/Experience/Experience.vue'
import Services from '../Profile/Services/Services.vue'
import WorkHistory from '../Profile/WorkHistory/WorkHistory.vue'
import LandingPage from '../LandingPage/LandingPage.vue'
import LoginPage from '../Auth/LoginPage.vue'
import Welcome from '../WantToWork/Welcome/WantToWork.vue'
import FindTalent from '../FindTalnet/FindTalent.vue'
const routes = [
    {
        path:'/',
        name:'LandingPage',
        component : LandingPage
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
    },
    {
        path : '/talents',
        name : 'talents',
        component : FindTalent,
    },
    {
        path : '/my-profile',
        name : 'myprofile',
        component : MyProfile,
        children : [
            {
                path : '',
                name : 'profile',
                component : ProfilePage
            },
            {
                path : 'experience',
                name : 'experience',
                component : Experience,
            },
            {
                path : 'services',
                name : "services",
                component : Services,
            },
            {
                path : 'workHistory',
                name : "workHistory",
                component : WorkHistory,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'router-link-exact-active',
})

export default router;