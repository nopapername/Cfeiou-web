import { useMount, useUnmount } from 'ahooks';
import 'antd/dist/antd.less';
import { Outlet, useModel } from 'umi';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import classnames from 'classnames';
import { initRem, setTitle } from '@/utils';
import Header from './header';
import styles from './index.less';
import LoadingPage from './loading-page';

export const scrollRevealOption = {
  reset: true,
  origin: 'bottom',
  duration: 800,
  delay: 100,
  distance: '60px',
};

export default function Layout() {
  const {
    isMinScreen, setIsMinScreen, loading,
  } = useModel('usePublicState');

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('四川飞欧装饰工程有限公司');
  });

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        ScrollReveal().reveal('.scroll-reveal-animation', { ...scrollRevealOption, origin: 'bottom' });
      }, 50);
    }
  }, [loading]);

  useUnmount(() => {
    ScrollReveal().destroy();
  });

  return (
    <>
      <LoadingPage className={classnames(styles.layout, !loading && styles.hide)} />
      <section className={classnames(styles.layout)}>
        <Header />
        <div className={styles.layout__content}>
          <Outlet />
        </div>
      </section>
    </>
  );
}
