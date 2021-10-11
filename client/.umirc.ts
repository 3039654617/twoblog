import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/', 
      component: '@/layout/index' ,
      routes: [
        {
          path: '/',
          redirect: '/find'
        },
        {
          path: '/find',
          component: '@/pages/find/index'
        },
        {
          path: '/front',
          component: '@/pages/front/index'
        },
        {
          path: '/create',
          component: '@/pages/create/index'
        },
        {
          path: '/create/edit',
          component: '@/pages/create/index'
        },
        {
          path: '/other',
          component: '@/pages/other/index'
        },
        {
          path: '/message',
          component: '@/pages/message/index'
        },
        {
          path: '/content',
          // exact: false,
          component: '@/pages/content/index'
        }
      ]
    },
  ],
  proxy: {
    '/api': {
      // target: 'http://11.11.75.41:10007',
      // target: 'http://127.0.0.1:3003',
      // target: 'http://localhost:3000',
      target: 'http://101.35.140.160:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  fastRefresh: {},
});
