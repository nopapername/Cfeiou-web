import HomeContent from './home-content';
import styles from './index.less';
import SlickBanner from './slick-banner';

const bannerList = [
  { src: require('@/assets/banner/banner_1.jpg'), alt: 'banner_1' },
  { src: require('@/assets/banner/banner_2.jpg'), alt: 'banner_2' },
  { src: require('@/assets/banner/banner_3.jpg'), alt: 'banner_3' },
  { src: require('@/assets/banner/banner_4.jpg'), alt: 'banner_4' },
  { src: require('@/assets/banner/banner_5.jpg'), alt: 'banner_5' },
  { src: require('@/assets/banner/banner_6.jpg'), alt: 'banner_6' },
  { src: require('@/assets/banner/banner_7.jpg'), alt: 'banner_7' },
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <SlickBanner />
      <HomeContent />
    </div>
  );
}
