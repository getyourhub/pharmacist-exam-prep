import React, { useState, useEffect } from 'react';
import { Card, Table, Select, Button, Space, Tag, message, Tabs, Row, Col, Statistic, Modal, Input } from 'antd';
import { BookOutlined, EditOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { wrongQuestionAPI } from '../../services/api';

const { Option } = Select;
const { TextArea } = Input;

const WrongQuestions: React.FC = () => {
  const navigate = useNavigate();
  const [wrongQuestions, setWrongQuestions] = useState<any[]>([]);
  const [reviewQuestions, setReviewQuestions] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0
  });
  const [filters, setFilters] = useState({
    subject: undefined,
    masteryLevel: undefined,
    isResolved: undefined
  });
  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    loadStats();
    if (activeTab === 'all') {
      loadWrongQuestions();
    } else {
      loadReviewQuestions();
    }
  }, [activeTab, pagination.current, filters]);

  const loadStats = async () => {
    try {
      const response = await wrongQuestionAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('加载统计失败:', error);
    }
  };

  const loadWrongQuestions = async () => {
    setLoading(true);
    try {
      const response = await wrongQuestionAPI.getWrongQuestions({
        page: pagination.current,
        limit: pagination.pageSize,
        ...filters
      });
      setWrongQuestions(response.data.wrongQuestions);
      setPagination({
        ...pagination,
        total: response.data.pagination.total
      });
    } catch (error) {
      message.error('加载错题失败');
    } finally {
      setLoading(false);
    }
  };

  const loadReviewQuestions = async () => {
    setLoading(true);
    try {
      const response = await wrongQuestionAPI.getReviewQuestions();
      setReviewQuestions(response.data);
    } catch (error) {
      message.error('加载复习题目失败');
    } finally {
      setLoading(false);
    }
  };

  const handleMasteryUpdate = async (id: string, masteryLevel: number, isCorrect: boolean) => {
    try {
      await wrongQuestionAPI.updateMastery(id, { masteryLevel, isCorrect });
      message.success('更新成功');
      loadWrongQuestions();
      loadStats();
    } catch (error) {
      message.error('更新失败');
    }
  };

  const handleAddNote = async () => {
    if (!selectedQuestion) return;
    try {
      await wrongQuestionAPI.addNotes(selectedQuestion._id, { notes: note });
      message.success('笔记添加成功');
      setNoteModalVisible(false);
      setNote('');
      loadWrongQuestions();
    } catch (error) {
      message.error('添加笔记失败');
    }
  };

  const allColumns = [
    {
      title: '题目',
      dataIndex: ['question', 'content'],
      key: 'content',
      ellipsis: true,
      width: '35%'
    },
    {
      title: '科目',
      dataIndex: ['question', 'subject', 'name'],
      key: 'subject',
      render: (text: string) => <Tag color="blue">{text}</Tag>
    },
    {
      title: '错误次数',
      dataIndex: 'wrongCount',
      key: 'wrongCount',
      render: (count: number) => (
        <Tag color={count > 3 ? 'red' : count > 1 ? 'orange' : 'green'}>
          {count}次
        </Tag>
      )
    },
    {
      title: '掌握程度',
      dataIndex: 'masteryLevel',
      key: 'masteryLevel',
      render: (level: number) => {
        const colors = ['red', 'orange', 'gold', 'lime', 'green', 'cyan'];
        const labels = ['未掌握', '了解', '熟悉', '掌握', '熟练', '精通'];
        return <Tag color={colors[level]}>{labels[level]}</Tag>;
      }
    },
    {
      title: '状态',
      dataIndex: 'isResolved',
      key: 'isResolved',
      render: (resolved: boolean) => (
        resolved ? (
          <Tag color="green" icon={<CheckCircleOutlined />}>已掌握</Tag>
        ) : (
          <Tag color="red">待复习</Tag>
        )
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space>
          <Button
            size="small"
            onClick={() => navigate(`/questions/practice?id=${record.question._id}`)}
          >
            重做
          </Button>
          <Button
            size="small"
            onClick={() => {
              setSelectedQuestion(record);
              setNote(record.notes || '');
              setNoteModalVisible(true);
            }}
          >
            笔记
          </Button>
          {!record.isResolved && (
            <Button
              size="small"
              type="primary"
              onClick={() => handleMasteryUpdate(record._id, record.masteryLevel + 1, true)}
            >
              标记掌握
            </Button>
          )}
        </Space>
      )
    }
  ];

  const reviewColumns = [
    {
      title: '题目',
      dataIndex: ['question', 'content'],
      key: 'content',
      ellipsis: true,
      width: '40%'
    },
    {
      title: '科目',
      dataIndex: ['question', 'subject', 'name'],
      key: 'subject',
      render: (text: string) => <Tag color="blue">{text}</Tag>
    },
    {
      title: '掌握程度',
      dataIndex: 'masteryLevel',
      key: 'masteryLevel',
      render: (level: number) => {
        const colors = ['red', 'orange', 'gold', 'lime', 'green', 'cyan'];
        const labels = ['未掌握', '了解', '熟悉', '掌握', '熟练', '精通'];
        return <Tag color={colors[level]}>{labels[level]}</Tag>;
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Button
          type="primary"
          onClick={() => navigate(`/questions/practice?id=${record.question._id}`)}
        >
          去复习
        </Button>
      )
    }
  ];

  return (
    <div>
      {/* 统计卡片 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="总错题数"
              value={stats?.overview?.totalWrong || 0}
              prefix={<BookOutlined />}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="已掌握"
              value={stats?.overview?.resolved || 0}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="待复习"
              value={(stats?.overview?.totalWrong || 0) - (stats?.overview?.resolved || 0)}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="平均掌握度"
              value={Math.round(stats?.overview?.avgMastery || 0)}
              suffix="/5"
            />
          </Card>
        </Col>
      </Row>

      <Card title="错题本">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: 'all',
              label: '全部错题',
              children: (
                <>
                  {/* 筛选条件 */}
                  <Card style={{ marginBottom: 16, background: '#fafafa' }}>
                    <Space wrap>
                      <Select
                        placeholder="选择科目"
                        style={{ width: 200 }}
                        allowClear
                        onChange={(value) => setFilters({ ...filters, subject: value })}
                      >
                        <Option value="subject1">药学专业知识（一）</Option>
                        <Option value="subject2">药学专业知识（二）</Option>
                        <Option value="subject3">药事管理与法规</Option>
                        <Option value="subject4">综合知识与技能</Option>
                      </Select>
                      <Select
                        placeholder="掌握程度"
                        style={{ width: 120 }}
                        allowClear
                        onChange={(value) => setFilters({ ...filters, masteryLevel: value })}
                      >
                        <Option value={0}>未掌握</Option>
                        <Option value={1}>了解</Option>
                        <Option value={2}>熟悉</Option>
                        <Option value={3}>掌握</Option>
                        <Option value={4}>熟练</Option>
                        <Option value={5}>精通</Option>
                      </Select>
                      <Select
                        placeholder="状态"
                        style={{ width: 120 }}
                        allowClear
                        onChange={(value) => setFilters({ ...filters, isResolved: value })}
                      >
                        <Option value={false}>待复习</Option>
                        <Option value={true}>已掌握</Option>
                      </Select>
                    </Space>
                  </Card>

                  <Table
                    columns={allColumns}
                    dataSource={wrongQuestions}
                    rowKey="_id"
                    loading={loading}
                    pagination={{
                      ...pagination,
                      showSizeChanger: true,
                      showTotal: (total) => `共 ${total} 道错题`,
                      onChange: (page, pageSize) => {
                        setPagination({ ...pagination, current: page, pageSize });
                      }
                    }}
                  />
                </>
              )
            },
            {
              key: 'review',
              label: '今日复习',
              children: (
                <Table
                  columns={reviewColumns}
                  dataSource={reviewQuestions}
                  rowKey="_id"
                  loading={loading}
                  pagination={false}
                />
              )
            }
          ]}
        />
      </Card>

      {/* 笔记弹窗 */}
      <Modal
        title="错题笔记"
        open={noteModalVisible}
        onOk={handleAddNote}
        onCancel={() => setNoteModalVisible(false)}
        okText="保存"
        cancelText="取消"
      >
        <TextArea
          rows={4}
          placeholder="记录你的理解和记忆要点..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default WrongQuestions;