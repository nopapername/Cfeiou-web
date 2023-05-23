import { useMount, useUnmount } from 'ahooks';
import 'antd/dist/antd.less';
import { Outlet, useModel, Helmet } from 'umi';
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
    setTitle('绵阳装修', '川飞欧装饰', '四川飞欧装饰工程有限公司', '绵阳本土室内设计工作室');
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
      <Helmet>
        <meta name="description" content="绵阳本地装修找川飞欧，在2021年，川飞欧成立于四川绵阳，旨在为客户提供合理的设计方案创造高品质居住空间。川飞欧，与你一起构建「更美好的生活」。" />
        <meta name="description" content="川飞欧公司董事长在成立川飞欧之前，是一家当地大型装修公司的副总经理、总项目经理及股东，从事装修行业近20余年。" />
      </Helmet>
      <section className={classnames(styles.layout)}>
        <LoadingPage className={classnames(styles.layout, !loading && styles.hide)} />
        <div className={styles.layout__content}>
          <Header /><Outlet />
        </div>
      </section>
    </>

  );
}
