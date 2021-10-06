import NavbarDiv from './Navbar';
import FooterDiv from './Footer';
import Head from 'next/head';
import { Layout } from 'antd';

function LayoutDiv({ title, children }) {
  const { Content } = Layout;

  return (
    <>
      <Head>
        <title> Catastro | {title} </title>
      </Head>

      <Layout className='layout' style={{ minHeight: '100vh' }}>
        <NavbarDiv />
        <Content style={{
          padding: '20px 200px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div className='site-layout-content'>{children}</div>
        </Content>
        <FooterDiv />
      </Layout>
    </>
  )
}

export default LayoutDiv;
