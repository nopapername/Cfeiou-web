/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { scrollToElementById } from '@/utils/util';
import styles from './index.less';
import ContactModal from '@/common/components';

export default function OperationCom() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.container__link}>
      <a
        href="javascript:void(0)"
        onClick={() => {
          _hmt.push(['_trackEvent', 'banner简介按钮', '点击', '跳转到公司简介']);
          scrollToElementById('introduce_with_us');
        }
        }
      >
        <span>公司简介</span>
      </a>
      <a
        href="javascript:void(0)"
        onClick={() => {
          _hmt.push(['_trackEvent', 'banner即刻装修按钮', '点击', '弹出填写装修意向弹窗']);
          showModal();
          return false;
        }}
      >
        <span>即刻装修</span>
      </a>
      <ContactModal
        open={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
}
