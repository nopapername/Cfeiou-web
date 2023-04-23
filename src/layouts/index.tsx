import { useMount, useUnmount } from 'ahooks';
import 'antd/dist/antd.less';
import { Outlet, useModel } from 'umi';
import ScrollReveal from 'scrollreveal';
import { initRem, setTitle } from '@/utils';
import Header from './header';
import styles from './index.less';

export const scrollRevealOption = {
  reset: true,
  origin: 'bottom',
  duration: 800,
  delay: 100,
  distance: '60px',
};

export default function Layout() {
  const { isMinScreen, setIsMinScreen } = useModel('usePublicState');

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('四川飞欧装饰工程有限公司');
    ScrollReveal().reveal('.scroll-reveal-animation', { ...scrollRevealOption, origin: 'bottom' });
  });

  useUnmount(() => {
    ScrollReveal().destroy();
  });

  return (
    <section className={styles.layout}>
      <Header />
      <div className={styles.layout__content}>
        <Outlet />
      </div>
    </section>
  );
}
