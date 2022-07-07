import classnames from 'classnames';
import styles from './index.less';

export default function HomePage() {
  return (
    <div className={classnames(styles.home, 'w-2')}>
      <h2>Yay! Welcome to home!</h2>
    </div>
  );
}
