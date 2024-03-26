import { createRouter, createWebHistory } from 'vue-router'

import Home from "./../views/Home.vue";
import CheckIn from "./../views/CheckIn.vue";
import Checkout from "./../views/Checkout.vue";
import Login from './../components/Login/Login.vue';
import Peserta from './../views/Peserta.vue';
import TotalMagangDarat from './../views/TotalMagangDarat.vue';
import TotalMagangLaut from './../views/TotalMagangLaut.vue';
import KelolaMagangDarat from './../views/KelolaMagangDarat.vue';
import KelolaMagangLaut from './../views/KelolaMagangLaut.vue';
import Reporting from './../views/Reporting.vue';
import HomeDashboard from './../views/HomeDashboard.vue';
import KelolaUnit from "./../views/KelolaUnit.vue";
import notFound from "./../views/notFound.vue";
import ActivityLog from '../views/ActivityLog.vue';
import UserAccesManagement from '../views/UserAccesManagement.vue';
import { useAuthStores } from '../auth.';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "Absesnsi"
      }
    },
    {
      path: '/user-acces-management',
      name: 'user-acces-management',
      component: UserAccesManagement,
    },
    {
      path: '/activity-log',
      name: 'activity-log',
      component: ActivityLog,
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: CheckIn,
      meta: {
        title: "Check In | Absesnsi"
      }
    },
    {
      path: '/check-out',
      name: 'check-out',
      component: Checkout,
      meta: {
        title: "Check Out | Absesnsi"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: "Login | Absesnsi"
      }
    },
    {
      path: '/kelola-unit',
      name: 'kelola-unit',
      component: KelolaUnit,
      meta: {
        title: "Kelola unit | Absesnsi"
      }
    },
    {
      path: '/kelola-magang-darat',
      name: 'kelola-magang-darat',
      component: KelolaMagangDarat,
      meta: {
        title: "Kelola Magang Darat | Absesnsi"
      }
    },
    {
      path: '/kelola-magang-laut',
      name: 'kelola-magang-laut',
      component: KelolaMagangLaut,
      meta: {
        title: "Kelola Magang Laut | Absesnsi"
      }
    },
    {
      path: '/dashboard/total-peserta',
      name: 'dashboard-peserta',
      component: Peserta,
      meta: {
        title: "Total Peserta | Absesnsi"
      }
    },
    {
      path: '/dashboard/total-magang-darat',
      name: 'dashboard-magang-darat',
      component: TotalMagangDarat,
      meta: {
        title: "Total Magang Darat | Absesnsi"
      }
    },
    {
      path: '/dashboard/total-magang-laut',
      name: 'dashboard-magang-laut',
      component: TotalMagangLaut,
      meta: {
        title: "Total Magang Laut | Absesnsi"
      }
    },
    {
      path: '/report',
      name: 'report',
      component: Reporting,
      meta: {
        title: "Report | Absesnsi"
      }
    },
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeDashboard,
      meta: {
        title: "Dashboard | Absesnsi"
      }
    },
    
    {
      path: '/404',
      name: 'not-foundt',
      component: notFound,
      meta: {
        title: "404 Not Found"
      }
    },


    { path: '/:pathMatch(.*)*', redirect: '/404' }
    

    // ...menus
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: Login
    // }
  ]
})

router.beforeEach(async (to, from) => {
  // clear alert on route change
  document.title = `${to.meta.title}`;

  // redirect to login page if not logged in and trying to access a restricted page 
  // if (typeof localStorage.getItem('token') == 'undefined') {
  //     return '/login';
  // }
  const loginStore = useAuthStores()
  const publicPages = ['/', '/login', '/check-in', '/check-out'] 
  const authRequired = !publicPages.includes(to.path)
  if (localStorage.getItem('user') != null) {
    const user_data = JSON.parse(localStorage.getItem('string'))
    // const {email, token} = user_data
    // loginStore.getUserInfo(email, token)
    loginStore.isLogin = true
  }
  if( authRequired && !loginStore.isLogin ) {
    loginStore.returnUrl = to.fullPath 
    return '/login' 
  }

});

export default router
