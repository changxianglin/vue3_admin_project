import { defineStore } from 'pinia'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
// 引入路由数据
import { constantRoute } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
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
    },
    async userInfo() {
      const result = await reqUserInfo()
      if(result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },
    async userLogout() {
      this.username = ''
      this.avatar = ''
      this.token = ''
      REMOVE_TOKEN()
    }
  },

  getters: {

  },
})

export default useUserStore