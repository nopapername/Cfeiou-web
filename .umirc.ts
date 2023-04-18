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
      hack: 'true; @import "@/common/css/variables.less";',
    },
  },
};
