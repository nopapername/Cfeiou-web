import pxtorem from 'postcss-pxtorem';

export default {
  npmClient: 'yarn',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: '@/pages/home' },
    { path: '/tamplate', component: '@/pages/tamplate' },
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 16, // 根据设计稿设置
      propList: ['*'],
    }),
  ],
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss', '@umijs/plugins/dist/model'],
  model: {},
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "@/common/css/global.less";',
    },
  },
  // 其他配置选项
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
