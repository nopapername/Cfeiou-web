import pxtorem from 'postcss-pxtorem';
export default {
  npmClient: 'yarn',
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 10, // 根据设计稿设置
      propList: ['*'],
    }),
  ]
};
