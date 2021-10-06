import { notification, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { Card } from 'antd';

function NoTest() {
  return (
    <>
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
      <Space wrap direction='horizontal'>
        {new Array(15).fill(null).map((_, idx) => (
          <Card style={{ width: 300, marginTop: 16 }} loading='true' key={idx}>
            {/* <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            */}
          </Card>
        ))}
      </Space>
    </>
  )
}

export default NoTest;