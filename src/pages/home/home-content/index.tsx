import styles from './index.less';
import OperationCom from './operation';
import ProcessContent from './process';

export default function HomeContent() {
  return (
    <div className={styles.home_container}>
      <OperationCom />
      <ProcessContent />
    </div>
  );
}
