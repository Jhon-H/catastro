import { notification, Space } from 'antd';


function Sucess() {
  return (
    <Space>
      {
        notification.success({
          message: 'Informción cargada correctamente',
          description: 'Hemos registrado su información de manera existosa.',
        })
      }
    </Space>
  )
}

export default Sucess;