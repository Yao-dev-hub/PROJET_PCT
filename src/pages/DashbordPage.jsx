import React, { useState } from 'react';
import { Layout } from 'antd';
import SidebarMenu from '../components/SidebarMenu';
import DashboardStats from '../components/DashboardStats';
import Notifications from '../components/Notifications';
import Demandes from '../components/Demandes';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const renderContent = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <DashboardStats />;
      case 'notifications':
        return <Notifications />;
      case 'demandes':
        return <Demandes />;
      case 'statistiques':
        return <p>Statistiques détaillées à venir...</p>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
          Sous-Préfecture
        </div>
        <SidebarMenu selectedPage={selectedPage} onSelect={setSelectedPage} />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center', fontWeight: 'bold' }}>
          Tableau de bord - {selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1)}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>{renderContent()}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;