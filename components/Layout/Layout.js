import _Navbar from './Navbar';
import _Footer from  './Footer';
import Head from 'next/head';
import { Layout } from 'antd';

function _Layout({ title, children }) {
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>

      <Layout className='layout' style={{ minHeight: '100vh' }}>
        <_Navbar />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <_Footer />
      </Layout>
    </>
  )
}

export default _Layout;
