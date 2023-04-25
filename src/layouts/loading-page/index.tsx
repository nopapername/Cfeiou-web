import 'antd/dist/antd.less';
import { PacmanLoader } from 'react-spinners';
import classnames from 'classnames';
import styles from './index.less';

export default function LoadingPage({ className = '', ...restProps }) {
  return (
    <section className={classnames(styles.loading, className)} {...restProps}>
      <PacmanLoader className={styles.loading__pacman} color="#cbdcd2" size={50} />
    </section>
  );
}
