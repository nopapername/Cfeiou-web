import { useMount } from 'ahooks';
import 'antd/dist/antd.less';
import { Outlet, useModel } from 'umi';
import { initRem, setTitle } from '@/utils';
import Header from './header';
import styles from './index.less';

export default function Layout() {
  const { isMinScreen, setIsMinScreen } = useModel('usePublicState');

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('四川飞欧装饰工程有限公司');
  });

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__content}>
        <Outlet />
      </div>
    </div>
  );
}
