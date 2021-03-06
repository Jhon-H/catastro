import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from '../../styles/logo.module.css';


const customPaths = [
  { path: '/', name: 'Inicio' },
  { path: '/admin', name: 'Administrar' },
];

function NavbarDiv() {
  const { Header } = Layout;

  return (
    <Header style={{ padding: '0 200px' }}>
      <div className={styles.logo}>
        <h2 className={styles.logoTitle}> CATASTRO </h2>
      </div>

      <Menu theme='dark' mode='horizontal' >
        {customPaths.map(({ path, name }) => (
          <Menu.Item key={path}>
            <Link href={path}>
              <a> {name} </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  )
}

export default NavbarDiv;
