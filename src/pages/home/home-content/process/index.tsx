import styles from './index.less';

export default function ProcessContent() {
  return (
    <div className={styles.container__process}>
      <div className={styles['container__process-card']}>
        <div className={styles['container__process-card__content']}>
          <div className={styles['container__process-card__content-header']}>
            <i className="iconfont icon-Chat" />
            沟通需求
          </div>
          <div className={styles['container__process-card__content-header']}>
            线上/线下沟通装修需求，确定方案
          </div>
        </div>
      </div>
      <div className={styles['container__process-card']}>
        <div className={styles['container__process-card__content']}>sss</div>
      </div>
      <div className={styles['container__process-card']}>
        <div className={styles['container__process-card__content']}>sss</div>
      </div>
      <div className={styles['container__process-card']}>
        <div className={styles['container__process-card__content']}>sss</div>
      </div>
      <div className={styles['container__process-card']}>
        <div className={styles['container__process-card__content']}>sss</div>
      </div>
    </div>
  );
}
