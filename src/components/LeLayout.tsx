import React from 'react';
import '../style/index.css';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', 'sub1'),

  getItem('Works', 'sub2', [
    getItem('2D', '1'),
    getItem('3D', '2'),
    // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  getItem('Code', 'sub4', [
    getItem('ux/ui', '3'),
    getItem('github', '4'),

  ]),
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const LeLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const head = {
    title: "aléjandra",
    subhead: "Aléjandra. A digital space for my creative endeavors.",
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          width:'20vw',
          position: 'fixed',
          paddingLeft:'10px',
          paddingRight:'10px',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
          <div className='ale-title'>{head.title}</div>
        <div className="demo-logo-vertical" />
        <Menu onClick={onClick} style={{ width: 'auto', textAlign: 'left' }} mode="vertical" items={items} />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />

        
        <Content style={{ margin: '0px 0px 0', overflow: 'initial' }}>
        
          <div
            style={{
              padding: 0,
              textAlign: 'left',
              background: 'red'
            }}

          >
            <Outlet/>
            {/* <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            } */}
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Alejandra ©2023 </Footer>
      </Layout>
    </Layout>
  );
};

export default LeLayout;