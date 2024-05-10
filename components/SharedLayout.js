"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EnergyPage from '../pages/big_data';
import PlantPage from '../pages/virtual_plant';
import IotPage from '../pages/iot_platform';
import DataCollectionPage from '../pages/data_collection';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;




export default function Home() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [currentRoute, setCurrentRoute] = useState();

  useEffect(() => {
      if (router.pathname !== '/_error') {
        setSelectedMenuKey(router.pathname);
        setCurrentRoute(router.pathname);
      } else {
        setSelectedMenuKey('/data_collection');
        setCurrentRoute('/data_collection');
      }
   }, []);

  const handleMenuClick = (event) => {
    setCurrentRoute(event.key);
    setSelectedMenuKey(event.key);
    router.push(event.key);
 };



  return (
    <main className="flex min-h-screen flex-col" style={{minWidth: 1400, maxWidth: 2560}}>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ width: 256 }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuKey]}
          defaultOpenKeys={['/data_collection']}
          onClick={handleMenuClick}
          items={[
            { key: '/data_collection', icon: <PieChartOutlined />, label: 'Data Collection'},
            { key: '/iot_platform', icon: <PieChartOutlined />, label: 'IoT Platform'},
            { key: '/big_data', icon: <PieChartOutlined />, label: 'Energy Platform'},
            { key: '/virtual_plant', icon: <PieChartOutlined />, label: 'Virtual Plant'},
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            {currentRoute === '/data_collection' && <DataCollectionPage />}
            {currentRoute === '/iot_platform' && <IotPage />}
            {currentRoute === '/big_data' && <EnergyPage />}
            {currentRoute === '/virtual_plant' && <PlantPage />}
        </Content>
      </Layout>
    </Layout>
  </main>
  );
}


