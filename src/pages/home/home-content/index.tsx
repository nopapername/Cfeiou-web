import styles from './index.less';

export default function HomeContent() {
  return (
    <div className={styles.home_container}>
      <div className={styles.container__link}>
        <a href="/home">
          <span>公司简介</span>
        </a>
        <a href="/tamplate">
          <span>即刻装修</span>
        </a>
      </div>
    </div>
  );
}
