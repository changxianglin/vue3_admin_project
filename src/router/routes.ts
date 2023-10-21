export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion',
    },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: 'home', 
    meta: {
      title: '',
      hidden: false,
      icon: 'Avatar',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ]
  }, 
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    name: 'acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        name: 'user',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        name: 'role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        name: 'permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/layout/index.vue'),
    redirect: '/product/trademark',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods',
    },
    children: [
        {
          path: '/product/trademark',
          name: 'trademark',
          component: () => import('@/views/product/trademark/index.vue'),
          meta: {
            title: '品牌管理',
            icon: 'ShoppingCartFull',
            hidden: false,
          },
        },
        {
          path: '/product/attr',
          name: 'attr',
          component: () => import('@/views/product/attr/index.vue'),
          meta: {
            title: '属性管理',
            icon: 'ChromeFilled',
            hidden: false,
          },
        },
        {
          path: '/product/spu',
          name: 'spu',
          component: () => import('@/views/product/spu/index.vue'),
          meta: {
            title: 'spu管理',
            icon: 'Calendar',
            hidden: false,
          },
        },
        {
          path: '/product/sku',
          name: 'sku',
          component: () => import('@/views/product/sku/index.vue'),
          meta: {
            title: 'sku管理',
            icon: 'Orange',
            hidden: false,
          },
        },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: 'Cellphone',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Monitor',
    },
  }
]