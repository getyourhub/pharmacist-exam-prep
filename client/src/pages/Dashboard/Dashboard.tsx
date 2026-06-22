import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Statistic, Progress, Typography, Button, Space, List, Tag, message } from 'antd';
import {
  BookOutlined,
  EditOutlined,
  CalendarOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
  FireOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { studyPlanAPI, examAPI, wrongQuestionAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [todayTasks, setTodayTasks] = useState<any>(null);
  const [examStats, setExamStats] = useState<any>(null);
  const [wrongStats, setWrongStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [tasksRes, examRes, wrongRes] = await Promise.allSettled([
        studyPlanAPI.getTodayTasks(),
        examAPI.getStats(),
        wrongQuestionAPI.getStats()
      ]);

      if (tasksRes.status === 'fulfilled') {
        setTodayTasks(tasksRes.value.data);
      }
      if (examRes.status === 'fulfilled') {
        setExamStats(examRes.value.data);
      }
      if (wrongRes.status === 'fulfilled') {
        setWrongStats(wrongRes.value.data);
      }
    } catch (error) {
      console.error('加载数据失败:', error);
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

  const quickActions = [
    {
      title: '开始刷题',
      icon: <EditOutlined style={{ fontSize: 24 }} />,
      color: '#1890ff',
      path: '/questions/practice'
    },
    {
      title: '错题复习',
      icon: <BookOutlined style={{ fontSize: 24 }} />,
      color: '#ff4d4f',
      path: '/wrong-questions'
    },
    {
      title: '模拟考试',
      icon: <TrophyOutlined style={{ fontSize: 24 }} />,
      color: '#52c41a',
      path: '/exam/mock'
    },
    {
      title: '知识框架',
      icon: <CalendarOutlined style={{ fontSize: 24 }} />,
      color: '#722ed1',
      path: '/knowledge'
    }
  ];

  return (
    <div>
      {/* 欢迎区域 */}
      <Card
        style={{
          marginBottom: 24,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none'
        }}
      >
        <Row gutter={24} align="middle">
          <Col flex="auto">
            <Title level={3} style={{ color: '#fff', marginBottom: 8 }}>
              欢迎回来，{user?.username}！
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 0 }}>
              距离执业药师考试还有
              <Text strong style={{ color: '#fff', fontSize: 28, margin: '0 8px' }}>
                {daysUntilExam}
              </Text>
              天，继续加油！
            </Paragraph>
          </Col>
          <Col>
            <Button
              type="primary"
              size="large"
              ghost
              onClick={() => navigate('/questions/practice')}
            >
              开始今日学习
            </Button>
          </Col>
        </Row>
      </Card>

      {/* 统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="刷题总数"
              value={user?.studyStats?.totalQuestions || 0}
              prefix={<EditOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="正确率"
              value={accuracy}
              suffix="%"
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="学习时长"
              value={user?.studyStats?.totalStudyTime || 0}
              suffix="分钟"
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="连续学习"
              value={user?.studyStats?.streakDays || 0}
              suffix="天"
              prefix={<FireOutlined />}
              valueStyle={{ color: '#fa8c16' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        {/* 快捷入口 */}
        <Col xs={24} lg={12}>
          <Card title="快捷入口" style={{ marginBottom: 24 }}>
            <Row gutter={16}>
              {quickActions.map((action, index) => (
                <Col span={12} key={index}>
                  <Card
                    hoverable
                    style={{ marginBottom: 16, textAlign: 'center' }}
                    onClick={() => navigate(action.path)}
                  >
                    <div style={{ color: action.color, marginBottom: 8 }}>
                      {action.icon}
                    </div>
                    <Text strong>{action.title}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* 今日任务 */}
        <Col xs={24} lg={12}>
          <Card
            title="今日学习任务"
            extra={
              <Button
                type="link"
                onClick={() => navigate('/study-plan')}
              >
                查看全部
              </Button>
            }
            style={{ marginBottom: 24 }}
          >
            {todayTasks?.tasks?.length > 0 ? (
              <List
                dataSource={todayTasks.tasks.slice(0, 5)}
                renderItem={(task: any) => (
                  <List.Item
                    actions={[
                      <Button
                        type="link"
                        onClick={() => navigate('/questions/practice')}
                      >
                        开始
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      title={task.title}
                      description={
                        <Space>
                          <Tag color={task.type === 'study' ? 'blue' : 'green'}>
                            {task.type === 'study' ? '学习' : '练习'}
                          </Tag>
                          <Text type="secondary">{task.targetTime}分钟</Text>
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Text type="secondary">暂无今日任务</Text>
                <br />
                <Button
                  type="primary"
                  style={{ marginTop: 16 }}
                  onClick={() => navigate('/study-plan')}
                >
                  生成学习计划
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      {/* 错题统计 */}
      <Row gutter={24}>
        <Col xs={24} lg={12}>
          <Card
            title="错题本概览"
            extra={
              <Button
                type="link"
                onClick={() => navigate('/wrong-questions')}
              >
                查看详情 <RightOutlined />
              </Button>
            }
          >
            {wrongStats ? (
              <Row gutter={16}>
                <Col span={8}>
                  <Statistic
                    title="待复习"
                    value={wrongStats.overview?.totalWrong - wrongStats.overview?.resolved || 0}
                    valueStyle={{ color: '#ff4d4f' }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="已掌握"
                    value={wrongStats.overview?.resolved || 0}
                    valueStyle={{ color: '#52c41a' }}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="复习次数"
                    value={wrongStats.overview?.totalReviews || 0}
                  />
                </Col>
              </Row>
            ) : (
              <Text type="secondary">暂无错题记录</Text>
            )}
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="考试统计">
            {examStats?.overview?.totalExams > 0 ? (
              <Row gutter={16}>
                <Col span={8}>
                  <Statistic
                    title="考试次数"
                    value={examStats.overview.totalExams}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="平均分"
                    value={Math.round(examStats.overview.avgScore)}
                    suffix="%"
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="最高分"
                    value={examStats.overview.highestScore}
                    suffix="%"
                    valueStyle={{ color: '#52c41a' }}
                  />
                </Col>
              </Row>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Text type="secondary">还没有参加过考试</Text>
                <br />
                <Button
                  type="primary"
                  style={{ marginTop: 16 }}
                  onClick={() => navigate('/exam/mock')}
                >
                  开始模拟考试
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;