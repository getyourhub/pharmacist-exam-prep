import React, { useState, useEffect } from 'react';
import { Card, Typography, Tag, Space, Button, message, Row, Col, Divider, List, Empty, Spin, Alert } from 'antd';
import { ArrowLeftOutlined, BookOutlined, StarOutlined, BulbOutlined, LinkOutlined, BranchesOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { knowledgeAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;

const KnowledgeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [point, setPoint] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) loadKnowledgePoint();
  }, [id]);

  const loadKnowledgePoint = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await knowledgeAPI.getKnowledgePoint(id!);
      setPoint(response.data);
    } catch (err: any) {
      setError(true);
      // 尝试从知识点列表中查找
      try {
        const listResponse = await knowledgeAPI.getKnowledgePoints({ limit: 200 });
        const points = listResponse.data?.points || [];
        const found = points.find((p: any) => p._id === id);
        if (found) {
          // 获取完整详情
          const detailResponse = await knowledgeAPI.getKnowledgePoint(found._id);
          setPoint(detailResponse.data);
          setError(false);
        }
      } catch (e) {}
    } finally {
      setLoading(false);
    }
  };

  const handleReview = async () => {
    try {
      await knowledgeAPI.updateReview(id!);
      message.success('已标记复习');
      loadKnowledgePoint();
    } catch (error) {
      message.error('操作失败');
    }
  };

  if (loading) return <Card loading={true} style={{ minHeight: 400 }} />;

  if (error || !point) {
    return (
      <div>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/knowledge')} style={{ marginBottom: 16 }}>
          返回知识框架
        </Button>
        <Card>
          <Empty description={
            <Space direction="vertical">
              <Text>知识点数据加载失败</Text>
              <Text type="secondary">请确保数据库已初始化：docker exec pharmacist-backend node seeds/index.js</Text>
              <Button type="primary" onClick={() => navigate('/knowledge')}>返回知识框架</Button>
            </Space>
          } />
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/knowledge')} style={{ marginBottom: 16 }}>
        返回知识框架
      </Button>

      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <Card>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              {/* 标题 */}
              <div>
                <Space wrap>
                  {point.subject?.name && <Tag color="blue">{point.subject.name}</Tag>}
                  {point.chapter?.name && <Tag>{point.chapter.name}</Tag>}
                  {point.importance === 'high' && <Tag color="red">重点</Tag>}
                  {point.frequency === 'high' && <Tag color="orange">高频考点</Tag>}
                </Space>
                <Title level={2} style={{ marginTop: 16 }}>{point.title}</Title>
              </div>

              <Divider />

              {/* 正文内容 */}
              <div>
                <Title level={4}><BookOutlined /> 知识点内容</Title>
                <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>{point.content}</Paragraph>
              </div>

              {/* 关键点 */}
              {point.keyPoints?.length > 0 && (
                <div>
                  <Title level={4}><StarOutlined /> 关键要点</Title>
                  <List dataSource={point.keyPoints}
                    renderItem={(item: string) => (
                      <List.Item>
                        <Text>• {item}</Text>
                      </List.Item>
                    )} />
                </div>
              )}

              {/* 举例说明 */}
              {point.examples?.length > 0 && (
                <div>
                  <Title level={4}><BulbOutlined /> 举例说明</Title>
                  <List dataSource={point.examples}
                    renderItem={(item: string, index: number) => (
                      <List.Item><Text>{index + 1}. {item}</Text></List.Item>
                    )} />
                </div>
              )}

              {/* 记忆口诀 */}
              {point.mnemonics?.length > 0 && (
                <Card type="inner" title="🎯 记忆口诀" style={{ background: '#fffbe6', borderColor: '#ffe58f' }}>
                  <List dataSource={point.mnemonics}
                    renderItem={(item: string) => (
                      <List.Item>
                        <Text strong style={{ fontSize: 16, color: '#d48806' }}>{item}</Text>
                      </List.Item>
                    )} />
                </Card>
              )}
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            {/* 操作 */}
            <Card title="操作">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button type="primary" block icon={<BranchesOutlined />} onClick={handleReview}>标记已复习</Button>
                <Button block onClick={() => navigate('/questions/practice')}>相关练习题</Button>
              </Space>
            </Card>

            {/* 标签 */}
            {point.tags?.length > 0 && (
              <Card title="标签">
                <Space wrap>
                  {point.tags.map((tag: string, index: number) => (
                    <Tag key={index} color="blue">{tag}</Tag>
                  ))}
                </Space>
              </Card>
            )}

            {/* 关联知识点 */}
            {point.relatedPoints?.length > 0 && (
              <Card title="关联知识点">
                <List dataSource={point.relatedPoints}
                  renderItem={(item: any) => (
                    <List.Item>
                      <Button type="link" icon={<LinkOutlined />}
                        onClick={() => navigate(`/knowledge/${item._id}`)}>
                        {item.title}
                      </Button>
                    </List.Item>
                  )} />
              </Card>
            )}

            {/* 复习统计 */}
            <Card title="复习统计">
              <Space direction="vertical">
                <Text>已复习: {point.reviewCount || 0} 次</Text>
                {point.lastReviewDate && <Text>上次复习: {new Date(point.lastReviewDate).toLocaleDateString()}</Text>}
                {point.nextReviewDate && <Text>下次复习: {new Date(point.nextReviewDate).toLocaleDateString()}</Text>}
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default KnowledgeDetail;
