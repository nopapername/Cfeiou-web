import classnames from 'classnames';
import styles from './index.less';

export default function DesignContent() {
  return (
    <div className={styles.container__design}>
      <section className={styles.container__design__left}>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img1'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>2022 下旬 / 客厅</div>
            <div>万达天澜</div>
            <div>简约、线条</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img2'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>2021 中旬 / 客厅</div>
            <div>西雅图</div>
            <div>浅色、干净</div>
          </div>
        </div>
        <div className={styles['container__design__left-clearfix']} />
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img3'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>2022 上旬 / 客厅</div>
            <div>印江山</div>
            <div>自然、舒适</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img4'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>清新、明亮</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img5'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>精致、现代</div>
          </div>
        </div>
      </section>
      <section className={styles.container__design__right}>
        <div className={classnames(styles['container__design__right-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__right-gallery__img'], styles['container__design__right-gallery__img6'])} />
          <div className={styles['container__design__right-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>混搭、色彩</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__right-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__right-gallery__img'], styles['container__design__right-gallery__img7'])} />
          <div className={styles['container__design__right-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>艺术、温馨</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__right-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__right-gallery__img'], styles['container__design__right-gallery__img8'])} />
          <div className={styles['container__design__right-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>木质、中式</div>
          </div>
        </div>
      </section>
    </div>
  );
}
