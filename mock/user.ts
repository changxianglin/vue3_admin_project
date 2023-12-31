function createUserList() {
  return [
    {
      userId: 1,
      avatar: 'https://upload.jianshu.io/users/upload_avatars/26445143/1f0480c3-d74f-4f60-b188-cdc9b231a104.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar: 'https://upload.jianshu.io/users/upload_avatars/26445143/1f0480c3-d74f-4f60-b188-cdc9b231a104.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      username: 'system',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'Admin Token',
    },
  ]
}

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body

      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      )

      if(!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确'}}
      }

      const { token } = checkUser
      return { code: 200, data: { token }}
    }
  },
  {
    url: '/api/user/info',
    method: 'post',
    response: (request) => {
      const token = request.headers.token

      const checkUser = createUserList().find((item) => item.token === token)

      if(!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败'}}
      }

      return { code: 200, data: { checkUser }}
    }
  },
]