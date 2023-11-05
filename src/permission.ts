import router from "@/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import useUserStore from "./store/modules/user";
import pinia from "./store";
const userStore = useUserStore(pinia)

console.log(userStore)

router.beforeEach((to: any, from: any, next: any) => {
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
