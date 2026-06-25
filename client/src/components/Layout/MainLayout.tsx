import React, { useState } from 'react';
import { Layout, Menu, Avatar, Space, Typography } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  EditOutlined,
  CalendarOutlined,
  FileTextOutlined,
  BulbOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: '学习仪表盘'
    },
    {
      key: '/questions',
      icon: <EditOutlined />,
      label: '智能题库',
      children: [
        {
          key: '/questions',
          label: '题库浏览'
        },
        {
          key: '/questions/practice',
          label: '刷题练习'
        }
      ]
    },
    {
      key: '/wrong-questions',
      icon: <BookOutlined />,
      label: '错题本'
    },
    {
      key: '/knowledge',
      icon: <BulbOutlined />,
      label: '知识框架与思维导图'
    },
    {
      key: '/study-plan',
      icon: <CalendarOutlined />,
      label: '学习计划'
    },
    {
      key: '/exam',
      icon: <FileTextOutlined />,
      label: '模拟考试',
      children: [
        {
          key: '/exam/mock',
          label: '开始考试'
        },
        {
          key: '/exam/history',
          label: '考试历史'
        }
      ]
    }
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, #001529 0%, #002140 100%)'
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          {collapsed ? (
            <Text strong style={{ color: '#fff', fontSize: 20 }}>
              药
            </Text>
          ) : (
            <Text strong style={{ color: '#fff', fontSize: 18 }}>
              执业药师备考平台
            </Text>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 0 }}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
        <Header
          style={{
            padding: '0 24px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}
        >
          <Space>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
                style: { fontSize: 18, cursor: 'pointer' }
              }
            )}
          </Space>
          <Space>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
            {!collapsed && <Text>{user?.username || '学习者'}</Text>}
          </Space>
        </Header>
        <Content
          style={{
            margin: '24px',
            padding: 24,
            background: '#f5f5f5',
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
