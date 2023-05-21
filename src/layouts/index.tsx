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
    setTitle('绵阳', '川飞欧装饰', '装修');
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
    <section className={classnames(styles.layout)}>
      <LoadingPage className={classnames(styles.layout, !loading && styles.hide)} />
      <div className={styles.layout__content}>
        <Header /><Outlet />
      </div>
    </section>
  );
}
