import HomeContent from './home-content';
import styles from './index.less';
import SlickBanner from './slick-banner';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <SlickBanner />
      <HomeContent />
    </div>
  );
}
