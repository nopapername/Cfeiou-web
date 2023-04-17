import styles from './index.less';

export default function OperationCom() {
  return (
    <div className={styles.container__link}>
      <a href="/home">
        <span>公司简介</span>
      </a>
      <a href="/tamplate">
        <span>即刻装修</span>
      </a>
    </div>
  );
}
