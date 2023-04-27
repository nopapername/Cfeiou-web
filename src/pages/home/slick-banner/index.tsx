import { Carousel } from 'antd';
import { useModel } from 'umi';
import { useEffect, useRef } from 'react';
import { CarouselRef } from 'antd/lib/carousel';
import arrowBottom from '@/assets/banner/arrow_bottom.svg';
import styles from './index.less';
import { scrollToElementById } from '@/utils/util';

const bannerList = [
  {
    src: require('@/assets/banner/banner_1.png'),
    alt: 'banner_1',
    key: 'banner_1',
    desc: '飞欧装饰，\n不止是装饰',
  },
  {
    src: require('@/assets/banner/banner_2.png'),
    alt: 'banner_2',
    key: 'banner_2',
    desc: '装的是品质，\n饰的是格调',
  },
  {
    src: require('@/assets/banner/banner_3.png'),
    alt: 'banner_3',
    key: 'banner_3',
    desc: '不求永恒，\n但求经典',
  },
  {
    src: require('@/assets/banner/banner_4.png'),
    alt: 'banner_4',
    key: 'banner_4',
    desc: '有限空间，\n无限可能',
  },
  {
    src: require('@/assets/banner/banner_5.png'),
    alt: 'banner_5',
    key: 'banner_5',
    desc: '美一个房子，\n美一个家',
  },
  {
    src: require('@/assets/banner/banner_6.png'),
    alt: 'banner_6',
    key: 'banner_6',
    desc: '简约风尚，\n由你所想',
  },
  {
    src: require('@/assets/banner/banner_7.png'),
    alt: 'banner_7',
    key: 'banner_7',
    desc: '这不是装修，\n这是艺术品',
  },
];

export default function SlickBanner() {
  const { isMinScreen, setLoading } = useModel('usePublicState');
  const loadedImgCount = useRef(0);
  const isOverLoadingTime = useRef(false);
  const carouselRef = useRef<CarouselRef>(null);

  useEffect(() => {
    setTimeout(() => {
      if (loadedImgCount.current < 2) {
        isOverLoadingTime.current = true;
      } else setLoading(false);
      carouselRef.current?.goTo(0);
    }, 2500);
    bannerList.map((item) => new Promise((resolve) => {
      const img = new Image();
      img.src = item.src;
      img.onload = () => {
        loadedImgCount.current += 1;
        if (loadedImgCount.current === 2 && isOverLoadingTime.current) {
          setLoading(false);
          carouselRef.current?.goTo(6);
        }
        resolve(true);
      };
    }));
  }, [setLoading]);

  return (
    <div className={styles.home_carousel}>
      <Carousel
        effect="fade"
        ref={carouselRef}
        dots={isMinScreen ? false : { className: styles.home_carousel__dots }}
        autoplay
        autoplaySpeed={5000}
        infinite
        pauseOnHover={false}
      >
        {bannerList.map((item) => (
          <div className={styles.home_carousel__banner} key={item.key}>
            <img
              src={item.src}
              alt={item.alt}
              draggable="false"
            />
            {/* <div
              className={classnames(
                styles.home_carousel__text,
                styles[`home_carousel__text--banner_${++index}`]
              )}
            >
              {item.desc}
            </div> */}
            {!isMinScreen && (
              <div>
                <div className={styles.home_carousel__cover}>
                  <div
                    className={styles.home_carousel__scroll}
                    onClick={() => scrollToElementById('design_with_us')}
                  >
                    <div className={styles['home_carousel__scroll-arrow']}>
                      <img src={arrowBottom} alt="arrow" />
                    </div>
                    <svg
                      width="218"
                      height="218"
                      viewBox="0 0 218 218"
                      className={styles['home_carousel__scroll-circle']}
                    >
                      <circle
                        cx="109"
                        cy="109"
                        r="107"
                        className={styles['home_carousel__scroll-circle-bg']}
                      />
                      <circle
                        cx="109"
                        cy="109"
                        r="107"
                        className={styles['home_carousel__scroll-circle-front']}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
