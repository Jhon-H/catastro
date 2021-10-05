import _Layout from '../Layout/Layout';
import { notification, Space } from 'antd';

function Error() {

  return (
    <Space>
      {notification.error({
        message: 'Ocurrió un error',
        description:
          'Ocurrió un error mientras se actualizaban los datos. Intentalo de nuevo más tarde.',
      })}
    </Space>
  )
}

export default Error;