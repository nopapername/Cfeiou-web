import axios from 'axios';
import { message } from 'antd';

// 定义发送邮件接口函数
export const sendEmail = async (phone: string, description: string) => {
  try {
    const response = await axios.post('http://localhost:3001', {
      phone,
      description,
    });
    message.success(response.data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
