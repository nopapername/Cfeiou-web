import { useModel } from 'umi';
import logo from '@/assets/header/logo.svg';
import logoMobile from '@/assets/header/logo_mobile.svg';
import styles from './index.less';
import { scrollToElementById } from '@/utils/util';

export default function HomePage() {
  const { isMinScreen } = useModel('usePublicState');
  return (
    <section className={styles.header}>
      <a href="/home" className={styles.header__a}>
        <img
          className={styles.header__a__logo}
          src={isMinScreen ? logoMobile : logo}
          alt="logo"
        />
      </a>
      <div className={styles.header__menu}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,
            react/jsx-no-script-url,
            no-script-url
        */}
        <a href="javascript:void(0)" onClick={() => scrollToElementById('design_with_us')} className={styles['header__menu-item']}>
          川飞欧
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,
            react/jsx-no-script-url,
            no-script-url
        */}
        <a href="javascript:void(0)" onClick={() => scrollToElementById('introduce_with_us')} className={styles['header__menu-item']}>
          简介
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,
            react/jsx-no-script-url,
            no-script-url
        */}
        <a href="javascript:void(0)" onClick={() => scrollToElementById('contact_with_us')} className={styles['header__menu-contact']}>
          联系我们
        </a>
      </div>
    </section>
  );
}
