import styles from './index.less';

export default function Page404() {
  return (
    <div className={styles.page_404}>
      <h1>404</h1>
      <h2>页面走丢了，<a href="/">回到川飞欧装修首页</a></h2>
    </div>
  );
}
