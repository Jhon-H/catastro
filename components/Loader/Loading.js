import _Layout from '../Layout/Layout';
import { notification, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';


function Loading() {
  return (
    <Space>
      {
        notification.open({
          message: 'Actualizando información',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          icon: <SyncOutlined spin />
        })
      }
    </Space>
  )
}

export default Loading;