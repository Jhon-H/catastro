import Link from 'next/link';
import { Layout, Menu } from 'antd';

const customPaths = [
  { path: '/', name: 'Home' },
  { path: '/admin', name: 'Administrar' },
  { path: '/filter', name: 'Filtrar Información' }
];

function Navbar() {
  const { Header } = Layout;

  return (
    <Header>
      <div className='logo' />
      <Menu theme="dark" mode="horizontal" >
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

export default Navbar;
