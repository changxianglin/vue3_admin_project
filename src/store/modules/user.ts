import { defineStore } from 'pinia'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { reqLogin } from '@/api/user'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入路由数据
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
    }
  },

  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if(result.code == 200) {
        this.token = (result.data.token as string)
        // localStorage.setItem('TOKEN', (result.data.token as string))
        SET_TOKEN((result.data.token as string))
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }
  },

  getters: {

  },
})

export default useUserStore