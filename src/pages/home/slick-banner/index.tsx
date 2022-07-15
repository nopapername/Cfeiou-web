import arrow_bottom from '@/assets/banner/arrow_bottom.svg';
import kv_text from '@/assets/banner/kv_text.svg';
import { Carousel } from 'antd';
import classnames from 'classnames';
import { useModel } from 'umi';
import styles from './index.less';

const bannerList = [
  {
    src: require('@/assets/banner/banner_1.jpg'),
    alt: 'banner_1',
    key: 'banner_1',
    desc: '飞欧装饰，\n不止是装饰',
  },
  {
    src: require('@/assets/banner/banner_2.jpg'),
    alt: 'banner_2',
    key: 'banner_2',
    desc: '装的是品质，\n饰的是格调',
  },
  {
    src: require('@/assets/banner/banner_3.jpg'),
    alt: 'banner_3',
    key: 'banner_3',
    desc: '不求永恒，\n但求经典',
  },
  {
    src: require('@/assets/banner/banner_4.jpg'),
    alt: 'banner_4',
    key: 'banner_4',
    desc: '有限空间，\n无限可能',
  },
  {
    src: require('@/assets/banner/banner_5.jpg'),
    alt: 'banner_5',
    key: 'banner_5',
    desc: '美一个房子，\n美一个家',
  },
  {
    src: require('@/assets/banner/banner_6.jpg'),
    alt: 'banner_6',
    key: 'banner_6',
    desc: '简约风尚，\n由你所想',
  },
  {
    src: require('@/assets/banner/banner_7.jpg'),
    alt: 'banner_7',
    key: 'banner_7',
    desc: '这不是装修，\n这是艺术品',
  },
];

export default function SlickBanner() {
  const { isMinScreen } = useModel('usePublicState');

  return (
    <div className={styles.home_carousel}>
      <Carousel
        effect="fade"
        dots={{ className: styles.home_carousel__dots }}
        autoplay
        autoplaySpeed={3000}
        infinite
        pauseOnHover={false}
      >
        {bannerList.map((item, index) => (
          <div className={styles['home_carousel__banner']} key={item.key}>
            <img src={item.src} alt={item.alt} draggable="false" />
            <div
              className={classnames(
                styles.home_carousel__text,
                styles[`home_carousel__text--banner_${++index}`]
              )}
            >
              {item.desc}
            </div>
            <div>
              <div className={styles['home_carousel__cover']}>
                <div className={styles['home_carousel__othertext']}>
                  <img src={kv_text} alt="Exciting With You" />
                </div>
                <div className={styles['home_carousel__scroll']}>
                  <div className={styles['home_carousel__scroll-arrow']}>
                    <img src={arrow_bottom} alt="arrow" />
                  </div>
                  <svg
                    width={isMinScreen ? '106' : '218'}
                    height={isMinScreen ? '106' : '218'}
                    viewBox={isMinScreen ? '0 0 106 106' : '0 0 218 218'}
                    className={styles['home_carousel__scroll-circle']}
                  >
                    <circle
                      cx={isMinScreen ? '53' : '109'}
                      cy={isMinScreen ? '53' : '109'}
                      r={isMinScreen ? '51' : '107'}
                      className={styles['home_carousel__scroll-circle-bg']}
                    ></circle>
                    <circle
                      cx={isMinScreen ? '53' : '109'}
                      cy={isMinScreen ? '53' : '109'}
                      r={isMinScreen ? '51' : '107'}
                      className={styles['home_carousel__scroll-circle-front']}
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
