import { Result, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/error404.module.css';

function Custom404() {
  return (
    <Result
      status='404'
      title='404'
      subTitle='OPS! La página que intentas visitar no existe.'
      extra={
        <Button type='primary' icon={<RollbackOutlined />}>
          <Link href='/'> Volver </Link>
        </Button>
      }
    />
  )
}

export default Custom404;
