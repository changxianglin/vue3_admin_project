import router from "@/router";
import setting from "./setting";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
NProgress.configure({showSpinner: false})
import useUserStore from "./store/modules/user";
import pinia from "./store";
const userStore = useUserStore(pinia)

console.log(userStore)

router.beforeEach(async(to: any, from: any, next: any) => {
  document.title = setting.title + '-' + to.meta.title
  NProgress.start()
  const token = userStore.token
  const userName = userStore.username
  if(token) {
    if(to.path == '/login') {
      next({path: '/'})
    } else {
      if(userName) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          await userStore.userLogout()
          next({path: '/login', query: {redirect: to.path}})
        }
      }
    }
  } else {
    if(to.path == '/login') {
      next()
    } else {
      next({path: '/login', query: {redirect: to.path}})
    }
  }
})


router.afterEach((to: any, from: any) => {
  NProgress.done()
})
