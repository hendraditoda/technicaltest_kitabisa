import React from 'react';
import { Layout, Menu } from 'antd';
import '../css/layout.css';

const { Content, Footer } = Layout;

const LayoutComponent = (props) => {
  let years = new Date().getFullYear();

  return (
    <>
      <Layout>
        {/* <Nav /> */}
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 600,
              }}
            >
              {props.content}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{years} Created by Hendradito
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponent;
