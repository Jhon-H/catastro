import { Result, Button } from 'antd';
import Link from 'next/link';


function Custom404() {
  return (
    <Result
      status='404'
      title='404'
      subTitle='OPS! La página que intentas visitar no existe.'
      extra={
        <Button>
          <Link href='/'> Volver </Link>
        </Button>
      }
    />
  )
}

export default Custom404;
