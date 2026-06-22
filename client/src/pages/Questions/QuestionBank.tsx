import React, { useState, useEffect } from 'react';
import { Card, Table, Select, Button, Space, Tag, Input, message, Row, Col, Statistic } from 'antd';
import { SearchOutlined, FilterOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { questionAPI } from '../../services/api';

const { Option } = Select;

const QuestionBank: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
    total: 0
  });
  const [filters, setFilters] = useState({
    subject: undefined,
    chapter: undefined,
    type: undefined,
    difficulty: undefined,
    importance: undefined
  });

  useEffect(() => {
    loadQuestions();
  }, [pagination.current, filters]);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const response = await questionAPI.getQuestions({
        page: pagination.current,
        limit: pagination.pageSize,
        ...filters
      });
      setQuestions(response.data.questions);
      setPagination({
        ...pagination,
        total: response.data.pagination.total
      });
    } catch (error) {
      message.error('加载题目失败');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
    setPagination({ ...pagination, current: 1 });
  };

  const columns = [
    {
      title: '题目',
      dataIndex: 'content',
      key: 'content',
      ellipsis: true,
      width: '40%'
    },
    {
      title: '科目',
      dataIndex: ['subject', 'name'],
      key: 'subject',
      render: (text: string) => <Tag color="blue">{text}</Tag>
    },
    {
      title: '章节',
      dataIndex: ['chapter', 'name'],
      key: 'chapter',
      ellipsis: true
    },
    {
      title: '题型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const typeMap: Record<string, { text: string; color: string }> = {
          single: { text: '单选', color: 'blue' },
          multiple: { text: '多选', color: 'purple' },
          judge: { text: '判断', color: 'green' },
          case: { text: '案例', color: 'orange' }
        };
        const info = typeMap[type] || { text: type, color: 'default' };
        return <Tag color={info.color}>{info.text}</Tag>;
      }
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty: number) => {
        const colors = ['', 'green', 'cyan', 'blue', 'orange', 'red'];
        const labels = ['', '简单', '较易', '中等', '较难', '困难'];
        return <Tag color={colors[difficulty]}>{labels[difficulty]}</Tag>;
      }
    },
    {
      title: '正确率',
      dataIndex: 'accuracy',
      key: 'accuracy',
      render: (accuracy: number) => (
        <span style={{ color: accuracy >= 60 ? '#52c41a' : '#ff4d4f' }}>
          {accuracy}%
        </span>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Button
          type="primary"
          size="small"
          onClick={() => navigate(`/questions/practice?id=${record._id}`)}
        >
          做题
        </Button>
      )
    }
  ];

  return (
    <div>
      <Card
        title="智能题库"
        extra={
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            onClick={() => navigate('/questions/practice')}
          >
            开始刷题
          </Button>
        }
      >
        {/* 筛选条件 */}
        <Card style={{ marginBottom: 16, background: '#fafafa' }}>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="选择科目"
                style={{ width: '100%' }}
                allowClear
                onChange={(value) => handleFilterChange('subject', value)}
              >
                <Option value="subject1">药学专业知识（一）</Option>
                <Option value="subject2">药学专业知识（二）</Option>
                <Option value="subject3">药事管理与法规</Option>
                <Option value="subject4">综合知识与技能</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="题型"
                style={{ width: '100%' }}
                allowClear
                onChange={(value) => handleFilterChange('type', value)}
              >
                <Option value="single">单选题</Option>
                <Option value="multiple">多选题</Option>
                <Option value="judge">判断题</Option>
                <Option value="case">案例分析</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="难度"
                style={{ width: '100%' }}
                allowClear
                onChange={(value) => handleFilterChange('difficulty', value)}
              >
                <Option value={1}>简单</Option>
                <Option value={2}>较易</Option>
                <Option value={3}>中等</Option>
                <Option value={4}>较难</Option>
                <Option value={5}>困难</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="重要性"
                style={{ width: '100%' }}
                allowClear
                onChange={(value) => handleFilterChange('importance', value)}
              >
                <Option value="high">高频考点</Option>
                <Option value="medium">常考</Option>
                <Option value="low">了解即可</Option>
              </Select>
            </Col>
          </Row>
        </Card>

        {/* 题目列表 */}
        <Table
          columns={columns}
          dataSource={questions}
          rowKey="_id"
          loading={loading}
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 道题`,
            onChange: (page, pageSize) => {
              setPagination({ ...pagination, current: page, pageSize });
            }
          }}
        />
      </Card>
    </div>
  );
};

export default QuestionBank;