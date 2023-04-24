import { useEffect, useState } from 'react';
import { Modal, Input } from 'antd';
import styles from './index.less';
import { sendEmail } from '@/api';

const { TextArea } = Input;

export default function ContactModal({
  modalVisible = false, onOk = () => { }, onCancel = () => { }, ...restProps
}) {
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (!modalVisible) {
      setPhone('');
      setPhoneError(false);
    }
  }, [modalVisible]);

  const handleOk = async () => {
    if (!phone || phoneError) return;
    const isSuccess = await sendEmail(phone, desc);
    if (isSuccess) onOk && onOk();
  };

  const handleCancel = () => {
    onCancel && onCancel();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhone(e.target.value);
  };

  const handlePhoneBlur = () => {
    // 此处使用中国大陆手机号码的正则表达式
    const phoneRegex = /^1[3456789]\d{9}$/;
    if (phoneRegex.test(phone)) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  return (
    <Modal
      visible={modalVisible}
      onOk={handleOk}
      centered
      mask={false}
      onCancel={handleCancel}
      title="即刻装修"
      className={styles['contact-modal']}
      okText="确认意向"
      closable
      destroyOnClose
      {...restProps}
    >
      <div className={styles['contact-modal__phone']}>
        <div>手机号<span>（不会打电话，仅加微信先了解意向）</span>：</div>
        <Input
          placeholder="请输入联系电话，获取装修方案"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
        />
      </div>
      {phoneError && (
        <div className={styles['contact-modal__error']}>* 请输入正确的手机号码</div>
      )}
      <div className={styles['contact-modal__desc']}>
        <div> 一些期望或意见<span>（可不填）</span>：</div>
        <TextArea placeholder="可填写自己的装修意愿、风格、楼盘、地址或者联系方式（如微信号）" allowClear onChange={handleDescChange} autoSize={{ minRows: 3, maxRows: 6 }} />
      </div>
      <div className={styles['contact-modal__vx']}>
        <span>或者直接联系我们（官方微信号）：</span>
        <img src={require('@/assets/footer/contact_us.jpg')} alt="contact_us" />
      </div>
    </Modal>
  );
}
