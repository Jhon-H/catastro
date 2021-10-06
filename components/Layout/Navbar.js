import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from '../../styles/logo.module.css';
import Search from './Search';


const customPaths = [
  { path: '/', name: 'Home' },
  { path: '/admin', name: 'Administrar' },
];

function NavbarDiv() {
  const { Header } = Layout;

  return (
    <Header style={{ padding: '0 200px' }}>
      <div className={styles.logo} />

      <Menu theme='dark' mode='horizontal' >
        {customPaths.map(({ path, name }) => (
          <Menu.Item key={path}>
            <Link href={path}>
              <a> {name} </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>

      <Search />
    </Header>
  )
}

export default NavbarDiv;
