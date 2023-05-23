import classnames from 'classnames';
import HomeContent from './home-content';
import styles from './index.less';
import SlickBanner from './slick-banner';
import HomeFooter from './home-footer';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <SlickBanner />
      <HomeContent />
      <section className={styles.transform__banner}>
        <div className={styles['transform__banner-wrap']}>
          <img src="http://cdn.cfeiou.cn/cfeiou-web-image/transform_banner.jpg" alt="transform_banner" />
          <div className={styles['transform__banner-wrap__slogan']}>
            <span className="scroll-reveal-animation">拥抱，你的美好生活可能性</span>
            <span className="scroll-reveal-animation">Love lights the life</span>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
}
