import React, { useState, useEffect } from 'react';
import { Card, Typography, Space, Tag, Button, Table, Row, Col, Statistic, Progress, Collapse, message } from 'antd';
import { TrophyOutlined, CheckCircleOutlined, CloseCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';
import { examAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;

const ExamResult: React.FC = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const [exam, setExam] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (examId) {
      loadExamDetail();
    }
  }, [examId]);

  const loadExamDetail = async () => {
    setLoading(true);
    try {
      const response = await examAPI.getExamDetail(examId!);
      setExam(response.data);
    } catch (error) {
      message.error('加载考试详情失败');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Card loading={true} style={{ minHeight: 400 }} />;
  }

  if (!exam) {
    return (
      <Card>
        <Text>考试记录不存在</Text>
      </Card>
    );
  }

  const accuracy = Math.round((exam.correctCount / exam.questions.length) * 100);

  return (
    <div>
      {/* 返回按钮 */}
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/exam/history')}
        style={{ marginBottom: 16 }}
      >
        返回考试历史
      </Button>

      {/* 成绩概览 */}
      <Card style={{ marginBottom: 24 }}>
        <Row gutter={24} align="middle">
          <Col flex="auto">
            <Space direction="vertical">
              <Title level={3} style={{ marginBottom: 0 }}>
                {exam.title}
              </Title>
              <Text type="secondary">
                考试时间: {new Date(exam.startTime).toLocaleString()}
              </Text>
            </Space>
          </Col>
          <Col>
            <div style={{ textAlign: 'center' }}>
              <Progress
                type="circle"
                percent={accuracy}
                format={() => (
                  <div>
                    <div style={{ fontSize: 24 }}>{exam.score}</div>
                    <div style={{ fontSize: 12 }}>/{exam.totalScore}</div>
                  </div>
                )}
                width={120}
                strokeColor={exam.isPassed ? '#52c41a' : '#ff4d4f'}
              />
              <div style={{ marginTop: 8 }}>
                <Tag color={exam.isPassed ? 'green' : 'red'}>
                  {exam.isPassed ? '及格' : '不及格'}
                </Tag>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      {/* 统计数据 */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="正确"
              value={exam.correctCount}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="错误"
              value={exam.wrongCount}
              prefix={<CloseCircleOutlined />}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="用时"
              value={Math.floor(exam.duration / 60)}
              suffix="分钟"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="正确率"
              value={accuracy}
              suffix="%"
              valueStyle={{ color: accuracy >= 60 ? '#52c41a' : '#ff4d4f' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 薄弱知识点 */}
      {exam.analysis?.weakPoints?.length > 0 && (
        <Card title="薄弱知识点" style={{ marginBottom: 24 }}>
          <Space wrap>
            {exam.analysis.weakPoints.map((point: any, index: number) => (
              <Tag key={index} color="red">
                {point.knowledgePoint?.title || '未知知识点'} (错{point.errorCount}次)
              </Tag>
            ))}
          </Space>
        </Card>
      )}

      {/* 详细答题记录 */}
      <Card title="答题详情">
        <Collapse>
          {exam.questions.map((q: any, index: number) => (
            <Collapse.Panel
              key={index}
              header={
                <Space>
                  <Tag color={q.isCorrect ? 'green' : 'red'}>
                    {index + 1}
                  </Tag>
                  <Text ellipsis style={{ maxWidth: 500 }}>
                    {q.content}
                  </Text>
                  {q.isCorrect ? (
                    <CheckCircleOutlined style={{ color: '#52c41a' }} />
                  ) : (
                    <CloseCircleOutlined style={{ color: '#ff4d4f' }} />
                  )}
                </Space>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                {/* 选项 */}
                {q.options?.map((option: any) => (
                  <div
                    key={option.label}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 4,
                      backgroundColor: option.isCorrect
                        ? '#f6ffed'
                        : option.label === q.userAnswer && !q.isCorrect
                        ? '#fff2f0'
                        : '#fafafa'
                    }}
                  >
                    <Space>
                      <Text strong>{option.label}.</Text>
                      <Text>{option.content}</Text>
                      {option.isCorrect && <Tag color="green">正确答案</Tag>}
                      {option.label === q.userAnswer && !option.isCorrect && (
                        <Tag color="red">你的答案</Tag>
                      )}
                    </Space>
                  </div>
                ))}

                {/* 答案对比 */}
                <Card size="small" style={{ background: '#fafafa' }}>
                  <Space>
                    <Text>你的答案:</Text>
                    <Tag color={q.isCorrect ? 'green' : 'red'}>
                      {q.userAnswer || '未作答'}
                    </Tag>
                    {!q.isCorrect && (
                      <>
                        <Text>正确答案:</Text>
                        <Tag color="green">{q.correctAnswer}</Tag>
                      </>
                    )}
                  </Space>
                </Card>

                {/* 解析 */}
                {q.explanation && (
                  <Card size="small" title="解析">
                    <Paragraph>{q.explanation}</Paragraph>
                  </Card>
                )}
              </Space>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Card>
    </div>
  );
};

export default ExamResult;