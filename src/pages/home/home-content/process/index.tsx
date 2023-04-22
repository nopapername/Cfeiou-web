import classnames from 'classnames';
import styles from './index.less';

export default function ProcessContent() {
  return (
    <div className={styles.container__process}>
      <div className={classnames(styles.container__process__base, 'scroll-reveal-animation')}>
        <div className={styles['container__process-card']}>
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
        <div className={styles['container__process-card']}>
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
        <div className={styles['container__process-card']}>
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
        <div className={styles['container__process-card']}>
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
        <div className={styles['container__process-card']}>
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
      <section className={styles.container__process__title}>
        <div className={classnames(styles['container__process__title-symbol'], 'scroll-reveal-animation')}>
          <i className="iconfont icon-shaniaologo" />
          <div className={styles['container__process__title-symbol__text']}>
            <span>飞欧</span>
            <span>FEIOU</span>
          </div>
        </div>
        <div className={classnames(styles['container__process__title-theme'], 'scroll-reveal-animation')}>
          <div className={styles['container__process__title-theme__text']}>
            <span className={styles['container__process__title-theme__chinese']}>
              生活
            </span>
            <span className={styles['container__process__title-theme__english']}>
              Life
            </span>
          </div>
          <div className={styles['container__process__title-theme__text']}>
            <span className={styles['container__process__title-theme__chinese']}>
              自然
            </span>
            <span className={styles['container__process__title-theme__english']}>
              Natural
            </span>
          </div>
          <div className={styles['container__process__title-theme__text']}>
            <span className={styles['container__process__title-theme__chinese']}>
              情感
            </span>
            <span className={styles['container__process__title-theme__english']}>
              Emotion
            </span>
          </div>
          <div className={styles['container__process__title-theme__text']}>
            <span className={styles['container__process__title-theme__chinese']}>
              艺术
            </span>
            <span className={styles['container__process__title-theme__english']}>
              Artistic
            </span>
          </div>
          <div className={styles['container__process__title-theme__text']}>
            <span className={styles['container__process__title-theme__chinese']}>
              意趣
            </span>
            <span className={styles['container__process__title-theme__english']}>
              Interest
            </span>
          </div>
          <div className={styles['container__process__title-theme__text']}>
            <span className={styles['container__process__title-theme__chinese']}>
              简单
            </span>
            <span className={styles['container__process__title-theme__english']}>
              Simple
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
