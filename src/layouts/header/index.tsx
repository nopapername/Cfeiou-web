import styles from './index.less';

export default function HomePage() {
  return (
    <section className={styles.header}>
      <a href="/">
        <img
          className={styles.header__logo}
          src={require('@/assets/header/logo.png')}
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
