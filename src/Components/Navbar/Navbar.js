import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout>
      <Header className="light-header">
        <Link to="/">
          <div className="logo">
            <img src="/Images/Logo.jfif" alt="Logo" />
          </div>
        </Link>
        <div className="menu">
          <Link to="/" className="menu-link">
            Home
          </Link>
          <Link to="/" className="menu-link">
            Products
          </Link>
          <Link to="/about" className="menu-link">
            About Us
          </Link>
          <Link to="/contact" className="menu-link">
            Contact Us
          </Link>
          <Link to="/media-gallery" className="menu-link">
            Our Gallery
          </Link>
        </div>
        <Button
          className="menu-button"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
        >
          <Menu mode="vertical" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Products</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
            <Menu.Item key="5">Item</Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
}
