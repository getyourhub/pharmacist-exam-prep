import React, { useState, useEffect } from 'react';
import { Card, Calendar, Badge, Button, Space, Typography, Form, DatePicker, InputNumber, message, Modal, Row, Col, Statistic, Tag, List } from 'antd';
import { CalendarOutlined, PlusOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import { studyPlanAPI } from '../../services/api';

const { Title, Text } = Typography;

const StudyPlan: React.FC = () => {
  const [plan, setPlan] = useState<any>(null);
  const [todayTasks, setTodayTasks] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [generateModalVisible, setGenerateModalVisible] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [planRes, tasksRes, statsRes] = await Promise.allSettled([
        studyPlanAPI.getCurrentPlan(),
        studyPlanAPI.getTodayTasks(),
        studyPlanAPI.getStats()
      ]);

      if (planRes.status === 'fulfilled') {
        setPlan(planRes.value.data);
      }
      if (tasksRes.status === 'fulfilled') {
        setTodayTasks(tasksRes.value.data);
      }
      if (statsRes.status === 'fulfilled') {
        setStats(statsRes.value.data);
      }
    } catch (error) {
      console.error('加载数据失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async (values: any) => {
    setGenerating(true);
    try {
      await studyPlanAPI.generatePlan({
        startDate: values.dateRange[0].toISOString(),
        endDate: values.dateRange[1].toISOString(),
        dailyStudyMinutes: values.dailyStudyMinutes,
        studyDaysPerWeek: values.studyDaysPerWeek
      });
      message.success('学习计划生成成功！');
      setGenerateModalVisible(false);
      loadData();
    } catch (error) {
      message.error('生成学习计划失败');
    } finally {
      setGenerating(false);
    }
  };

  const handleTaskStatusChange = async (taskId: string, status: string) => {
    try {
      await studyPlanAPI.updateTaskStatus(taskId, { status });
      message.success('任务状态更新成功');
      loadData();
    } catch (error) {
      message.error('更新失败');
    }
  };

  const dateCellRender = (value: Dayjs) => {
    if (!plan?.dailyTasks) return null;

    const dateStr = value.format('YYYY-MM-DD');
    const task = plan.dailyTasks.find((t: any) => 
      dayjs(t.date).format('YYYY-MM-DD') === dateStr
    );

    if (!task) return null;

    const completedCount = task.tasks.filter((t: any) => t.status === 'completed').length;
    const totalCount = task.tasks.length;

    return (
      <div style={{ textAlign: 'center' }}>
        <Badge
          count={completedCount}
          overflowCount={totalCount}
          style={{ backgroundColor: completedCount === totalCount ? '#52c41a' : '#1890ff' }}
        />
      </div>
    );
  };

  const completionRate = stats?.totalTasks > 0
    ? Math.round((stats.completedTasks / stats.totalTasks) * 100)
    : 0;

  return (
    <div>
      {/* 统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="计划天数"
              value={stats?.totalDays || 0}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="已完成天数"
              value={stats?.completedDays || 0}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="总学习时长"
              value={stats?.totalStudyTime || 0}
              suffix="分钟"
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="完成率"
              value={completionRate}
              suffix="%"
              valueStyle={{ color: completionRate >= 60 ? '#52c41a' : '#ff4d4f' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        {/* 日历 */}
        <Col xs={24} lg={16}>
          <Card
            title="学习日历"
            extra={
              !plan && (
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setGenerateModalVisible(true)}
                >
                  生成学习计划
                </Button>
              )
            }
          >
            <Calendar cellRender={(date, info) => {
              if (info.type === 'date') {
                return dateCellRender(date);
              }
              return info.originNode;
            }} />
          </Card>
        </Col>

        {/* 今日任务 */}
        <Col xs={24} lg={8}>
          <Card title="今日学习任务">
            {todayTasks?.tasks?.length > 0 ? (
              <List
                dataSource={todayTasks.tasks}
                renderItem={(task: any) => (
                  <List.Item
                    actions={[
                      task.status === 'pending' && (
                        <Button
                          type="primary"
                          size="small"
                          onClick={() => handleTaskStatusChange(task._id, 'completed')}
                        >
                          完成
                        </Button>
                      ),
                      task.status === 'completed' && (
                        <Tag color="green">已完成</Tag>
                      )
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <Space>
                          <Tag color={task.type === 'study' ? 'blue' : 'green'}>
                            {task.type === 'study' ? '学习' : '练习'}
                          </Tag>
                          <Text delete={task.status === 'completed'}>
                            {task.title}
                          </Text>
                        </Space>
                      }
                      description={
                        <Space>
                          <ClockCircleOutlined />
                          <Text type="secondary">{task.targetTime}分钟</Text>
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CalendarOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
                <br />
                <Text type="secondary">暂无今日任务</Text>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      {/* 生成计划弹窗 */}
      <Modal
        title="生成学习计划"
        open={generateModalVisible}
        onCancel={() => setGenerateModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleGenerate}
          layout="vertical"
          initialValues={{
            dailyStudyMinutes: 120,
            studyDaysPerWeek: 6
          }}
        >
          <Form.Item
            name="dateRange"
            label="学习周期"
            rules={[{ required: true, message: '请选择学习周期' }]}
          >
            <DatePicker.RangePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="dailyStudyMinutes"
            label="每日学习时长（分钟）"
            rules={[{ required: true, message: '请设置每日学习时长' }]}
          >
            <InputNumber min={30} max={480} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="studyDaysPerWeek"
            label="每周学习天数"
            rules={[{ required: true, message: '请设置每周学习天数' }]}
          >
            <InputNumber min={1} max={7} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={generating}
              block
            >
              生成计划
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StudyPlan;