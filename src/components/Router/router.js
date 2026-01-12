import { createRouter , createWebHistory } from 'vue-router'
import { useUserStore } from '../Store/User/UserStore'
const routes = [
    {
        path:'/',
        name:'LandingPage',
        component : () => import('../LandingPage/LandingPage.vue'),
    },
    {
        path:'/login',
        name:'login',
        component : () =>import('../Auth/LoginPage.vue'),
        meta : {
            logged : false,
        }
    },
    {
        path : '/signup',
        name : 'signup',
        component : () => import('../Auth/SignUp.vue'),
        meta : {
            logged : false,
        }
    },
    {
        path : '/policies',
        name : "policies",
        component : () => import('../Utils/policies.vue')
    },
    {
        path : '/forgot-password',
        name: 'forget',
        component : () => import('../Auth/ForgotPassword.vue'),
        meta : {
            logged : false,
        }
    },
    {
        path : '/verify-email',
        name: 'verifyEmail',
        component : () => import('../Auth/VerifyEmail.vue'),
        meta : {
            logged : false,
        }
    },
    {
        path : '/reset-password',
        name: 'resetPassword',
        component : () => import('../Auth/ResetPassword.vue'),
        meta : {
            logged : false,
        }
    },
    {
        path : '/welcome',
        name : 'welcome',
        component : () => import('../WantToWork/Welcome/WantToWork.vue'),
        meta : {
            logged : false,
        }
    },
    {
        path : '/talents',
        name : 'talents',
        component : () => import('../FindTalnet/FindTalent.vue'),
    },
    {
        path : '/jobs',
        name : 'jobs',
        component : () => import('../FindJobs/FindJobs.vue'),
    },
    {
        path: '/jobs/:id',
        name : 'jobPage',
        component : () => import('../FindJobs/JobPage/JobPage.vue'),
    },
    {
        path: '/jobs/:id/apply',
        name : 'applyPage',
        component : () => import('../FindJobs/ApplyPage/ApplyPage.vue'),
    },
    {
        path : '/my-profile',
        name : 'myprofile',
        component : () => import('../Profile/MyProfile.vue'),
        meta : {
            logged : true,
        },
        children : [
            {
                path : '',
                name : 'profile',
                component : () => import('../Profile/ProfilePage.vue'),
                meta : {
                    logged : true,
                }
            },
            {
                path : "portfolio",
                name : "portfolio",
                component : () => import('../Profile/Portfolio/Portfolio.vue'),
                meta : {
                    logged : true,
                }
            },
            {
                path : 'experience',
                name : 'experience',
                component : () => import('../Profile/Experience/Experience.vue'),
                meta : {
                    logged : true,
                }
            },
            {
                path : 'services',
                name : "services",
                component : () => import('../Profile/Services/Services.vue'),
                meta : {
                    logged : true,
                }
            },
            {
                path : 'workHistory',
                name : "workHistory",
                component : () => import('../Profile/WorkHistory/WorkHistory.vue'),
                meta : {
                    logged : true,
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'router-link-exact-active',
})

router.beforeEach((to,from,next) => {
    const user = useUserStore().getUserData
    if(!user && to.meta.logged){
        router.push('/login')
    }
    if(user && to.meta.logged == false){
        router.push('/')
        // router.push('/Dashboard')
    }
    next()
})

// logged == true => لازم تكون مسجل دخول عشان تدخل الصفحة
// logged == false => لازم تكون مش مسجل دخول عشان تدخل الصفحة
export default router;