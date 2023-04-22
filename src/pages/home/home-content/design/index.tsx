import classnames from 'classnames';
import styles from './index.less';

export default function DesignContent() {
  return (
    <div className={styles.container__design}>
      <section className={styles.container__design__left}>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img1'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img2'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
        <div className={styles['container__design__left-clearfix']} />
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img3'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img4'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__left-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__left-gallery__img'], styles['container__design__left-gallery__img5'])} />
          <div className={styles['container__design__left-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
      </section>
      <section className={styles.container__design__right}>
        <div className={classnames(styles['container__design__right-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__right-gallery__img'], styles['container__design__right-gallery__img6'])} />
          <div className={styles['container__design__right-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__right-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__right-gallery__img'], styles['container__design__right-gallery__img7'])} />
          <div className={styles['container__design__right-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
        <div className={classnames(styles['container__design__right-gallery'], 'scroll-reveal-animation')}>
          <div className={classnames(styles['container__design__right-gallery__img'], styles['container__design__right-gallery__img8'])} />
          <div className={styles['container__design__right-gallery__desc']}>
            <div>Apr 21, 2023 / Interiors</div>
            <div>Keyhouse</div>
            <div>by oftn studio</div>
          </div>
        </div>
      </section>
    </div>
  );
}
