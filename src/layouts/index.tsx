import { initRem, setTitle } from '@/utils';
import { useMount } from 'ahooks';
import 'antd/dist/antd.less';
import { useState } from 'react';
import { Outlet } from 'umi';
import Header from './header';
import styles from './index.less';

export interface ContextProps {
  isMinScreen: boolean;
  loading: boolean;
}

export default function Layout() {
  const [isMinScreen, setIsMinScreen] = useState(false);
  const [loading, setLoading] = useState(false);

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('四川飞欧装饰工程有限公司');
  });

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__content}>
        <Outlet context={{ isMinScreen, loading }} />
      </div>
    </div>
  );
}
