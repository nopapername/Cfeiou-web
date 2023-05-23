/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useModel } from 'umi';
import logo from '@/assets/header/logo.svg';
import logoMobile from '@/assets/header/logo_mobile.svg';
import styles from './index.less';
import { scrollToElementById } from '@/utils/util';

export default function HomePage() {
  const { isMinScreen } = useModel('usePublicState');
  return (
    <section className={styles.header}>
      <a
        href="javascript:void(0)"
        onClick={() => {
          _hmt.push(['_trackEvent', 'header按钮', '点击', 'logo']); scrollToElementById('introduce_with_us');
        }}
        className={styles.header__a}
      >
        <img
          className={styles.header__a__logo}
          src={isMinScreen ? logoMobile : logo}
          alt="logo"
        />
      </a>
      <div className={styles.header__menu}>
        <a
          href="javascript:void(0)"
          onClick={() => {
            _hmt.push(['_trackEvent', 'header按钮', '点击', '川飞欧']); scrollToElementById('design_with_us');
          }}
          className={styles['header__menu-item']}
        >
          {isMinScreen ? '川飞欧' : '川飞欧装修'}
        </a>
        <a
          href="javascript:void(0)"
          onClick={() => {
            _hmt.push(['_trackEvent', 'header按钮', '点击', '简介']);
            scrollToElementById('introduce_with_us');
          }}
          className={styles['header__menu-item']}
        >
          简介
        </a>
        <a
          href="javascript:void(0)"
          onClick={() => {
            _hmt.push(['_trackEvent', 'header按钮', '点击', '联系我们']); scrollToElementById('contact_with_us');
          }}
          className={styles['header__menu-contact']}
        >
          联系我们
        </a>
      </div>
    </section>
  );
}
