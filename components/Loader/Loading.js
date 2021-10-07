import { notification, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { Card } from 'antd';

function Loading() {
  return (
    <>
      <Space>
        {
          notification.open({
            message: 'Actualizando información',
            description: 'Espere mientras terminar la operación',
            icon: <SyncOutlined spin />
          })
        }
      </Space>
      <Space
        direction='horizontal'
        size={50}
        wrap
      >
        {new Array(9).fill(null).map((_, idx) => (
          <Card
            style={{ width: 400, height: 200 }}
            bordered='false'
            size={100}
            loading='true'
            key={idx}
          ></Card>
        ))}
      </Space>
    </>
  )
}

export default Loading;
