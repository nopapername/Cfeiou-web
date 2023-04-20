import { useModel } from 'umi';
import logo from '@/assets/header/logo.svg';
import logoMobile from '@/assets/header/logo_mobile.svg';
import styles from './index.less';

export default function HomePage() {
  const { isMinScreen } = useModel('usePublicState');
  return (
    <section className={styles.header}>
      <a href="/" className={styles.header__a}>
        <img
          className={styles.header__a__logo}
          src={isMinScreen ? logoMobile : logo}
          alt="logo"
        />
      </a>
      <div className={styles.header__menu}>
        <a href="/home" className={styles['header__menu-item']}>
          川飞欧
        </a>
        <a href="/intro" className={styles['header__menu-item']}>
          简介
        </a>
        <a href="/contact" className={styles['header__menu-contact']}>
          联系我们
        </a>
      </div>
    </section>
  );
}
