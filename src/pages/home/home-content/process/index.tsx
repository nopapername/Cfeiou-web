import styles from './index.less';

export default function ProcessContent() {
  return (
    <div className={styles.container__process}>
      <div className={styles.container__process__base}>
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
    </div>
  );
}
