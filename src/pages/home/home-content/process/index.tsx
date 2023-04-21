import ScrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';
import styles from './index.less';

const scrollRevealOption = {
  reset: true,
  origin: 'bottom',
  duration: 1000,
  delay: 80,
  distance: '60px',
};

export default function ProcessContent() {
  const processCardContainerRef1 = useRef(null);
  const processCardContainerRef2 = useRef(null);
  const processCardContainerRef3 = useRef(null);
  const processCardContainerRef4 = useRef(null);
  const processCardContainerRef5 = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(processCardContainerRef1.current || '', { ...scrollRevealOption, origin: 'bottom' });
    ScrollReveal().reveal(processCardContainerRef2.current || '', { ...scrollRevealOption, origin: 'top' });
    ScrollReveal().reveal(processCardContainerRef3.current || '', { ...scrollRevealOption, origin: 'bottom' });
    ScrollReveal().reveal(processCardContainerRef4.current || '', { ...scrollRevealOption, origin: 'top' });
    ScrollReveal().reveal(processCardContainerRef5.current || '', { ...scrollRevealOption, origin: 'bottom' });
  }, []);

  return (
    <div className={styles.container__process}>
      <div className={styles.container__process__base}>
        <div className={styles['container__process-card']} ref={processCardContainerRef1}>
          <div className={styles['container__process-card__content']}>
            <div className={styles['container__process-card__content-header']}>
              <i className="iconfont icon-Chat" />
              <div>沟通</div>
            </div>
            <div className={styles['container__process-card__content-body']}>
              <ul>
                <li><i className="iconfont icon-yuyinjiantou" />初步洽谈</li>
                <li><i className="iconfont icon-yuyinjiantou" />确定意向</li>
                <li><i className="iconfont icon-yuyinjiantou" />核准需求</li>
                <li><i className="iconfont icon-yuyinjiantou" />预约量房</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['container__process-arrow']}><i className="iconfont icon-hand_right" /></div>
        <div className={styles['container__process-card']} ref={processCardContainerRef2}>
          <div className={styles['container__process-card__content']}>
            <div className={styles['container__process-card__content-header']}>
              <i className="iconfont icon-shejiyishu" />
              <div>设计</div>
            </div>
            <div className={styles['container__process-card__content-body']}>
              <ul>
                <li><i className="iconfont icon-yuyinjiantou" />平面规划</li>
                <li><i className="iconfont icon-yuyinjiantou" />设计委托</li>
                <li><i className="iconfont icon-yuyinjiantou" />深化方案</li>
                <li><i className="iconfont icon-yuyinjiantou" />主材选择</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['container__process-arrow']}><i className="iconfont icon-hand_right" /></div>
        <div className={styles['container__process-card']} ref={processCardContainerRef3}>
          <div className={styles['container__process-card__content']}>
            <div className={styles['container__process-card__content-header']}>
              <i className="iconfont icon-shigongdi" />
              <div>施工</div>
            </div>
            <div className={styles['container__process-card__content-body']}>
              <ul>
                <li><i className="iconfont icon-yuyinjiantou" />签订合同</li>
                <li><i className="iconfont icon-yuyinjiantou" />节点交底</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['container__process-arrow']}><i className="iconfont icon-hand_right" /></div>
        <div className={styles['container__process-card']} ref={processCardContainerRef4}>
          <div className={styles['container__process-card__content']}>
            <div className={styles['container__process-card__content-header']}>
              <i className="iconfont icon-icf_folder_complete" />
              <div>竣工</div>
            </div>
            <div className={styles['container__process-card__content-body']}>
              <ul>
                <li><i className="iconfont icon-yuyinjiantou" />竣工验收</li>
                <li><i className="iconfont icon-yuyinjiantou" />完工仪式</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles['container__process-arrow']}><i className="iconfont icon-hand_right" /></div>
        <div className={styles['container__process-card']} ref={processCardContainerRef5}>
          <div className={styles['container__process-card__content']}>
            <div className={styles['container__process-card__content-header']}>
              <i className="iconfont icon-shouhou-2" />
              <div>售后</div>
            </div>
            <div className={styles['container__process-card__content-body']}>
              <ul>
                <li><i className="iconfont icon-yuyinjiantou" />服务回访</li>
                <li><i className="iconfont icon-yuyinjiantou" />客户福利</li>
                <li><i className="iconfont icon-yuyinjiantou" />售后维保</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <section className={styles.container__process__banner}>
        <div className={styles['container__process__banner-wrap']}>
          <img src={require('@/assets/process/process_banner.jpg')} alt="banner" />
        </div>
      </section> */}
      <section className={styles.container__process__title}>
        <div className={styles['container__process__title-symbol']}>
          <i className="iconfont icon-shaniaologo" />
          <div className={styles['container__process__title-symbol__text']}>
            FEIOU
          </div>
        </div>
        <div className={styles['container__process__title-theme']}>
          <span className={styles['container__process__title-theme__text']}>
            Life
          </span>
          <span className={styles['container__process__title-theme__text']}>
            Natural
          </span>
          <span className={styles['container__process__title-theme__text']}>
            Emotion
          </span>
          <span className={styles['container__process__title-theme__text']}>
            Artistic
          </span>
          <span className={styles['container__process__title-theme__text']}>
            Interest
          </span>
          <span className={styles['container__process__title-theme__text']}>
            Simple
          </span>
        </div>
      </section>
    </div>
  );
}
