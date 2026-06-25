import React, { useState } from 'react';
import { Card, Form, Input, Button, DatePicker, InputNumber, message, Typography, Divider, Row, Col, Statistic, Avatar, Space } from 'antd';
import { UserOutlined, MailOutlined, CalendarOutlined, SaveOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useAuth } from '../../contexts/AuthContext';
import { authAPI } from '../../services/api';

const { Title, Text } = Typography;

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleUpdateProfile = async (values: any) => {
    setLoading(true);
    try {
      const response = await authAPI.updateProfile({
        ...values,
        examDate: values.examDate?.toISOString()
      });
      updateUser(response.data);
      message.success('更新成功');
    } catch (error: any) {
      message.error(error.message || '更新失败');
    } finally {
      setLoading(false);
    }
  };

  const daysUntilExam = user?.examDate
    ? Math.ceil((new Date(user.examDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 0;

  const accuracy = user?.studyStats?.totalQuestions
    ? Math.round((user.studyStats.correctQuestions / user.studyStats.totalQuestions) * 100)
    : 0;

  return (
    <div>
      <Row gutter={24}>
        {/* 左侧：用户信息卡片 */}
        <Col xs={24} lg={8}>
          <Card style={{ textAlign: 'center' }}>
            <Avatar
              size={100}
              icon={<UserOutlined />}
              style={{ backgroundColor: '#1890ff', marginBottom: 16 }}
            />
            <Title level={3}>{user?.username}</Title>
            <Text type="secondary">{user?.email}</Text>

            <Divider />

            <Row gutter={16}>
              <Col span={12}>
                <Statistic
                  title="刷题数"
                  value={user?.studyStats?.totalQuestions || 0}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="正确率"
                  value={accuracy}
                  suffix="%"
                  valueStyle={{ color: accuracy >= 60 ? '#52c41a' : '#ff4d4f' }}
                />
              </Col>
            </Row>

            <Divider />

            <div style={{ background: '#f6f6f6', padding: 16, borderRadius: 8 }}>
              <Space direction="vertical">
                <Text>距离考试还有</Text>
                <Title level={2} style={{ color: daysUntilExam <= 30 ? '#ff4d4f' : '#1890ff' }}>
                  {daysUntilExam} 天
                </Title>
              </Space>
            </div>
          </Card>
        </Col>

        {/* 右侧：设置表单 */}
        <Col xs={24} lg={16}>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            {/* 个人信息 */}
            <Card title="个人信息">
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  username: user?.username,
                  email: user?.email,
                  examDate: user?.examDate ? dayjs(user.examDate) : null,
                  dailyStudyTime: user?.dailyStudyTime || 120
                }}
                onFinish={handleUpdateProfile}
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="username"
                      label="用户名"
                      rules={[
                        { required: true, message: '请输入用户名' },
                        { min: 3, message: '用户名至少3个字符' }
                      ]}
                    >
                      <Input prefix={<UserOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="邮箱"
                      rules={[
                        { required: true, message: '请输入邮箱' },
                        { type: 'email', message: '请输入有效的邮箱' }
                      ]}
                    >
                      <Input prefix={<MailOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="examDate"
                      label="考试日期"
                    >
                      <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="dailyStudyTime"
                      label="每日学习时长（分钟）"
                    >
                      <InputNumber min={30} max={480} style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SaveOutlined />}
                  >
                    保存修改
                  </Button>
                </Form.Item>
              </Form>
            </Card>


          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;