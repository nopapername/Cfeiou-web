import { useMount, useUnmount } from 'ahooks';
import 'antd/dist/antd.less';
import {
  Outlet, useModel, Helmet, useLocation,
} from 'umi';
import ScrollReveal from 'scrollreveal';
import { useEffect, useMemo } from 'react';
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

  const location = useLocation();
  const is404 = useMemo(() => location.pathname.includes('/404'), [location]);

  useMount(() => {
    setTitle('绵阳装修公司', '绵阳装修工作室', '川飞欧装饰', '四川飞欧装饰工程有限公司');
    // 4k
    initRem(isMinScreen, setIsMinScreen);
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
        <meta name="keywords" content="绵阳装修, 绵阳装修公司，绵阳家装，绵阳商业装修，川飞欧装饰" />
        <meta name="description" content="绵阳装修公司找川飞欧装饰，在2021年，川飞欧成立于四川绵阳，旨在为客户提供合理的设计方案创造高品质商业或居住空间。川飞欧，与你一起构建「更美好的生活」。" />
        <meta name="description" content="川飞欧公司董事长在成立川飞欧之前，是一家当地大型装修公司的副总经理、总项目经理及股东，从事装修行业近20余年。" />
        <meta name="location" content="province=四川;city=绵阳;coord=104.791281,31.41705" />
        <link rel="canonical" href="https://cfeiou.cn" />
      </Helmet>
      <section className={classnames(styles.layout)}>
        {!is404 && <LoadingPage className={classnames(styles.layout, !loading && styles.hide)} />}
        <div className={styles.layout__content}>
          <Header /><Outlet />
        </div>
      </section>
    </>

  );
}
