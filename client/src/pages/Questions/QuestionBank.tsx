import React, { useState, useEffect } from 'react';
import { Card, Table, Select, Button, Space, Tag, message, Row, Col } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { questionAPI, knowledgeAPI } from '../../services/api';

const { Option } = Select;

const QuestionBank: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [chapters, setChapters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 20, total: 0 });
  const [filters, setFilters] = useState<any>({ subject: undefined, chapter: undefined, type: undefined, difficulty: undefined });

  useEffect(() => { loadSubjects(); }, []);
  useEffect(() => { loadQuestions(); }, [pagination.current, filters]);

  const loadSubjects = async () => {
    try {
      const response = await knowledgeAPI.getSubjects();
      setSubjects(response.data || []);
    } catch (error) {}
  };

  const loadChapters = async (subjectId: string) => {
    try {
      const response = await knowledgeAPI.getFramework(subjectId);
      const chaptersData = response.data?.chapters?.map((ch: any) => ({
        id: ch.chapter.id,
        name: ch.chapter.name,
        order: ch.chapter.order
      })) || [];
      setChapters(chaptersData);
    } catch (error) { setChapters([]); }
  };

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const response = await questionAPI.getQuestions({
        page: pagination.current,
        limit: pagination.pageSize,
        ...filters
      });
      setQuestions(response.data.questions);
      setPagination(prev => ({ ...prev, total: response.data.pagination.total }));
    } catch (error) {
      message.error('加载题目失败');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    if (key === 'subject') {
      newFilters.chapter = undefined;
      if (value) loadChapters(value);
      else setChapters([]);
    }
    setFilters(newFilters);
    setPagination(prev => ({ ...prev, current: 1 }));
  };

  const columns = [
    { title: '题目', dataIndex: 'content', key: 'content', ellipsis: true, width: '35%' },
    { title: '科目', dataIndex: ['subject', 'name'], key: 'subject', render: (text: string) => <Tag color="blue">{text}</Tag> },
    { title: '章节', dataIndex: ['chapter', 'name'], key: 'chapter', ellipsis: true },
    {
      title: '题型', dataIndex: 'type', key: 'type',
      render: (type: string) => {
        const map: Record<string, { text: string; color: string }> = {
          single: { text: '单选', color: 'blue' }, multiple: { text: '多选', color: 'purple' },
          judge: { text: '判断', color: 'green' }, case: { text: '案例', color: 'orange' }
        };
        const info = map[type] || { text: type, color: 'default' };
        return <Tag color={info.color}>{info.text}</Tag>;
      }
    },
    {
      title: '难度', dataIndex: 'difficulty', key: 'difficulty',
      render: (d: number) => {
        const colors = ['', 'green', 'cyan', 'blue', 'orange', 'red'];
        const labels = ['', '简单', '较易', '中等', '较难', '困难'];
        return <Tag color={colors[d]}>{labels[d]}</Tag>;
      }
    },
    {
      title: '操作', key: 'action',
      render: (_: any, record: any) => (
        <Button type="primary" size="small" onClick={() => navigate(`/questions/practice?id=${record._id}`)}>做题</Button>
      )
    }
  ];

  return (
    <div>
      <Card title="智能题库" extra={
        <Button type="primary" icon={<PlayCircleOutlined />} onClick={() => navigate('/questions/practice')}>开始刷题</Button>
      }>
        <Card style={{ marginBottom: 16, background: '#fafafa' }}>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
              <Select placeholder="选择科目" style={{ width: '100%' }} allowClear
                onChange={(value) => handleFilterChange('subject', value)}>
                {subjects.map(s => <Option key={s._id} value={s._id}>{s.name}</Option>)}
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select placeholder="选择章节" style={{ width: '100%' }} allowClear disabled={!filters.subject}
                onChange={(value) => handleFilterChange('chapter', value)}>
                {chapters.map(c => <Option key={c.id} value={c.id}>{c.name}</Option>)}
              </Select>
            </Col>
            <Col xs={24} sm={12} md={4}>
              <Select placeholder="题型" style={{ width: '100%' }} allowClear
                onChange={(value) => handleFilterChange('type', value)}>
                <Option value="single">单选题</Option>
                <Option value="multiple">多选题</Option>
                <Option value="judge">判断题</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={4}>
              <Select placeholder="难度" style={{ width: '100%' }} allowClear
                onChange={(value) => handleFilterChange('difficulty', value)}>
                <Option value={1}>简单</Option><Option value={2}>较易</Option>
                <Option value={3}>中等</Option><Option value={4}>较难</Option><Option value={5}>困难</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={4}>
              <Select placeholder="重要性" style={{ width: '100%' }} allowClear
                onChange={(value) => handleFilterChange('importance', value)}>
                <Option value="high">高频考点</Option>
                <Option value="medium">常考</Option>
                <Option value="low">了解即可</Option>
              </Select>
            </Col>
          </Row>
        </Card>

        <Table columns={columns} dataSource={questions} rowKey="_id" loading={loading}
          pagination={{
            ...pagination, showSizeChanger: true, showQuickJumper: true,
            showTotal: (total) => `共 ${total} 道题`,
            onChange: (page, pageSize) => setPagination(prev => ({ ...prev, current: page, pageSize }))
          }} />
      </Card>
    </div>
  );
};

export default QuestionBank;
