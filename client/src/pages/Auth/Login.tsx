import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      message.success('登录成功！');
      navigate('/dashboard');
    } catch (error: any) {
      message.error(error.message || '登录失败，请检查邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title level={2} style={{ marginBottom: 8 }}>
            执业药师备考平台
          </Title>
          <Text type="secondary">系统化学习，高效备考</Text>
        </div>

        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="邮箱地址"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{
                height: 48,
                borderRadius: 8,
                fontSize: 16,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none'
              }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>

        <Divider plain>
          <Text type="secondary">默认账号</Text>
        </Divider>

        <div style={{ 
          background: '#f6f6f6', 
          padding: '12px 16px', 
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <Text type="secondary" style={{ fontSize: 13 }}>
            邮箱: admin@pharmacist.com
          </Text>
          <br />
          <Text type="secondary" style={{ fontSize: 13 }}>
            密码: 123456
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Login;