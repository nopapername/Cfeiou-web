import styles from './index.less';
import OperationCom from './operation';
import ProcessContent from './process';
import DesignContent from './design';

export default function HomeContent() {
  return (
    <div className={styles.home_container}>
      <div className={styles['home_container-bg']} />
      <OperationCom />
      <ProcessContent />
      <DesignContent />
    </div>
  );
}
