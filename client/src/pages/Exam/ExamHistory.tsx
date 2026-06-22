import React, { useState, useEffect } from 'react';
import { Card, Table, Tag, Button, Space, message, Row, Col, Statistic } from 'antd';
import { FileTextOutlined, TrophyOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { examAPI } from '../../services/api';

const ExamHistory: React.FC = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  });

  useEffect(() => {
    loadExams();
    loadStats();
  }, [pagination.current]);

  const loadExams = async () => {
    setLoading(true);
    try {
      const response = await examAPI.getExamHistory({
        page: pagination.current,
        limit: pagination.pageSize
      });
      setExams(response.data.exams);
      setPagination({
        ...pagination,
        total: response.data.pagination.total
      });
    } catch (error) {
      message.error('加载考试历史失败');
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const response = await examAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('加载统计失败:', error);
    }
  };

  const columns = [
    {
      title: '考试名称',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const typeMap: Record<string, { text: string; color: string }> = {
          mock: { text: '模拟考试', color: 'blue' },
          practice: { text: '练习', color: 'green' },
          chapter: { text: '章节练习', color: 'cyan' },
          random: { text: '随机练习', color: 'purple' }
        };
        const info = typeMap[type] || { text: type, color: 'default' };
        return <Tag color={info.color}>{info.text}</Tag>;
      }
    },
    {
      title: '得分',
      key: 'score',
      render: (_: any, record: any) => (
        <span style={{ color: record.isPassed ? '#52c41a' : '#ff4d4f' }}>
          {record.score}/{record.totalScore} ({record.accuracy}%)
        </span>
      )
    },
    {
      title: '用时',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration: number) => `${Math.floor(duration / 60)}分钟`
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusMap: Record<string, { text: string; color: string }> = {
          completed: { text: '已完成', color: 'green' },
          in_progress: { text: '进行中', color: 'blue' },
          timeout: { text: '超时', color: 'orange' },
          abandoned: { text: '已放弃', color: 'red' }
        };
        const info = statusMap[status] || { text: status, color: 'default' };
        return <Tag color={info.color}>{info.text}</Tag>;
      }
    },
    {
      title: '考试时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => new Date(date).toLocaleString()
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Button
          type="link"
          onClick={() => navigate(`/exam/result/${record._id}`)}
        >
          查看详情
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
              title="考试次数"
              value={stats?.overview?.totalExams || 0}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="平均分"
              value={Math.round(stats?.overview?.avgScore || 0)}
              suffix="%"
              prefix={<TrophyOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="最高分"
              value={stats?.overview?.highestScore || 0}
              suffix="%"
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable>
            <Statistic
              title="总做题数"
              value={stats?.overview?.totalQuestions || 0}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title="考试历史"
        extra={
          <Button
            type="primary"
            onClick={() => navigate('/exam/mock')}
          >
            开始考试
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={exams}
          rowKey="_id"
          loading={loading}
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showTotal: (total) => `共 ${total} 次考试`,
            onChange: (page, pageSize) => {
              setPagination({ ...pagination, current: page, pageSize });
            }
          }}
        />
      </Card>
    </div>
  );
};

export default ExamHistory;