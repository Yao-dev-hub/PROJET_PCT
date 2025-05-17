import React from 'react';
import { Menu } from 'antd';
import {
  PieChartOutlined,
  BellOutlined,
  FileTextOutlined,
  HomeOutlined
} from '@ant-design/icons';

const SidebarMenu = ({ selectedPage, onSelect }) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[selectedPage]}
      onClick={({ key }) => onSelect(key)}
    >
      <Menu.Item key="dashboard" icon={<HomeOutlined />}>Dashboard</Menu.Item>
      <Menu.Item key="statistiques" icon={<PieChartOutlined />}>Statistiques</Menu.Item>
      <Menu.Item key="notifications" icon={<BellOutlined />}>Notifications</Menu.Item>
      <Menu.Item key="demandes" icon={<FileTextOutlined />}>Demandes</Menu.Item>
    </Menu>
  );
};

export default SidebarMenu;
