import { initRem, setTitle } from '@/utils';
import { useMount } from 'ahooks';
import { Layout } from 'antd';
import { Outlet } from 'umi';
import styles from './index.less';

const { Content } = Layout;

export default function PageLayout() {
  useMount(() => {
    // 4k
    initRem();
    setTitle('四川飞欧装饰工程有限公司');
  });

  return (
    <Layout className={styles.layout}>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
