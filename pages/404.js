import { Result, Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/error404.module.css';

function Custom404Error() {
  return (
    <Result
      status='404'
      title='404'
      subTitle='OPS! La página que intentas visitar no existe.'
      extra={<Button type='primary'><Link href='/'> Volver </Link></Button>}
    />
    // <main className={styles.container}>

    //   <p> Imagen </p>
    //   <h2> Ops ! </h2>
    //   <h3> La página que quieres visitar no existe. </h3>

    //   <Button type='primary'>
    //     <Link href='/'> Volver </Link>
    //     <RollbackOutlined />
    //   </Button>
    // </main>
  )
}

export default Custom404Error;
