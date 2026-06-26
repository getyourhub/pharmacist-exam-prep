import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button, Radio, Space, Typography, Progress, Tag, message, Result, Row, Col, Statistic } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { questionAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;

const QuestionPractice: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('id');

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [stats, setStats] = useState({ total: 0, correct: 0, wrong: 0, skip: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadQuestions(); }, []);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      let response;
      if (questionId) {
        response = await questionAPI.getQuestion(questionId);
        setQuestions([response.data]);
      } else {
        response = await questionAPI.getRandomQuestions({ count: 20 });
        setQuestions(response.data);
      }
      setStats({ total: response.data.length || 1, correct: 0, wrong: 0, skip: 0 });
    } catch (error) {
      message.error('加载题目失败');
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const isMultiple = currentQuestion?.type === 'multiple';

  const getSubmitAnswer = () => {
    if (isMultiple) {
      return selectedAnswers.sort().join('');
    }
    return selectedAnswer;
  };

  const handleAnswer = useCallback(async () => {
    const answer = getSubmitAnswer();
    if (!answer) {
      message.warning('请选择答案');
      return;
    }

    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    try {
      const response = await questionAPI.submitAnswer(currentQuestion._id, {
        answer,
        timeSpent
      });

      setIsCorrect(response.data.isCorrect);
      setShowAnswer(true);

      setStats(prev => ({
        ...prev,
        correct: response.data.isCorrect ? prev.correct + 1 : prev.correct,
        wrong: response.data.isCorrect ? prev.wrong : prev.wrong + 1
      }));
    } catch (error) {
      message.error('提交答案失败');
    }
  }, [selectedAnswer, selectedAnswers, currentQuestion, startTime]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setSelectedAnswers([]);
      setShowAnswer(false);
      setIsCorrect(null);
      setStartTime(Date.now());
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setSelectedAnswers([]);
      setShowAnswer(false);
      setIsCorrect(null);
    }
  };

  const handleSkip = () => {
    setStats(prev => ({ ...prev, skip: prev.skip + 1 }));
    handleNext();
  };

  if (loading) return <Card loading={true} style={{ minHeight: 400 }} />;

  if (!questions.length) {
    return (
      <Result status="warning" title="暂无题目" subTitle="请稍后再试或选择其他类型的题目"
        extra={<Button type="primary" onClick={() => navigate('/questions')}>返回题库</Button>} />
    );
  }

  if (currentIndex >= questions.length) {
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    return (
      <Card>
        <Result icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />} title="练习完成！"
          subTitle={`共 ${stats.total} 道题，正确率 ${accuracy}%`}
          extra={[
            <Button type="primary" key="again" onClick={() => {
              setCurrentIndex(0);
              setStats({ total: questions.length, correct: 0, wrong: 0, skip: 0 });
            }}>再做一遍</Button>,
            <Button key="bank" onClick={() => navigate('/questions')}>返回题库</Button>
          ]}>
          <Row gutter={24} style={{ marginTop: 24 }}>
            <Col span={6}><Statistic title="总题数" value={stats.total} /></Col>
            <Col span={6}><Statistic title="正确" value={stats.correct} valueStyle={{ color: '#52c41a' }} /></Col>
            <Col span={6}><Statistic title="错误" value={stats.wrong} valueStyle={{ color: '#ff4d4f' }} /></Col>
            <Col span={6}><Statistic title="跳过" value={stats.skip} /></Col>
          </Row>
        </Result>
      </Card>
    );
  }

  return (
    <div>
      {/* 进度条 */}
      <Card style={{ marginBottom: 16 }}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Text>进度: {currentIndex + 1} / {questions.length}</Text>
          <Space>
            <Tag color="green">正确: {stats.correct}</Tag>
            <Tag color="red">错误: {stats.wrong}</Tag>
          </Space>
        </Space>
        <Progress percent={Math.round(((currentIndex + 1) / questions.length) * 100)} showInfo={false} style={{ marginTop: 8 }} />
      </Card>

      {/* 题目卡片 */}
      <Card>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          {/* 题目信息 */}
          <Space>
            <Tag color="blue">{currentQuestion.subject?.name}</Tag>
            <Tag>{currentQuestion.chapter?.name}</Tag>
            <Tag color={currentQuestion.type === 'single' ? 'cyan' : currentQuestion.type === 'multiple' ? 'purple' : 'orange'}>
              {currentQuestion.type === 'single' ? '单选题' :
               currentQuestion.type === 'multiple' ? '多选题' :
               currentQuestion.type === 'judge' ? '判断题' : '案例分析'}
            </Tag>
            {isMultiple && <Tag color="red">请选择所有正确答案</Tag>}
          </Space>

          {/* 题目内容 */}
          <Title level={4}>{currentQuestion.content}</Title>

          {/* 选项 - 单选题 */}
          {!isMultiple && (
            <Radio.Group
              onChange={(e) => setSelectedAnswer(e.target.value)}
              value={selectedAnswer}
              disabled={showAnswer}
              style={{ width: '100%' }}
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                {currentQuestion.options?.map((option: any) => (
                  <Radio key={option.label} value={option.label} style={{
                    width: '100%', padding: '12px 16px', margin: '4px 0',
                    border: '1px solid #d9d9d9', borderRadius: 8,
                    backgroundColor: showAnswer
                      ? option.isCorrect ? '#f6ffed' : option.label === selectedAnswer ? '#fff2f0' : '#fff'
                      : option.label === selectedAnswer ? '#e6f7ff' : '#fff'
                  }}>
                    <Space>
                      <Text strong>{option.label}.</Text>
                      <Text>{option.content}</Text>
                      {showAnswer && option.isCorrect && <CheckCircleOutlined style={{ color: '#52c41a' }} />}
                      {showAnswer && option.label === selectedAnswer && !option.isCorrect && <CloseCircleOutlined style={{ color: '#ff4d4f' }} />}
                    </Space>
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          )}

          {/* 选项 - 多选题 */}
          {isMultiple && (
            <div style={{ width: '100%' }}>
              <div style={{ marginBottom: 8, padding: '8px 12px', background: '#f0f5ff', borderRadius: 8, border: '1px solid #adc6ff' }}>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  💡 多选题：点击选项可选中/取消，已选 <Text strong style={{ color: '#1890ff' }}>{selectedAnswers.length}</Text> 项
                </Text>
              </div>
              <Space direction="vertical" style={{ width: '100%' }}>
                {currentQuestion.options?.map((option: any) => {
                  const isSelected = selectedAnswers.includes(option.label);
                  const isCorrectOption = option.isCorrect;
                  return (
                    <div
                      key={option.label}
                      onClick={() => {
                        if (showAnswer) return;
                        setSelectedAnswers(prev =>
                          prev.includes(option.label)
                            ? prev.filter(a => a !== option.label)
                            : [...prev, option.label].sort()
                        );
                      }}
                      style={{
                        width: '100%', padding: '12px 16px', cursor: showAnswer ? 'default' : 'pointer',
                        border: `2px solid ${isSelected ? '#1890ff' : '#d9d9d9'}`, borderRadius: 8,
                        backgroundColor: showAnswer
                          ? isCorrectOption ? '#f6ffed' : isSelected ? '#fff2f0' : '#fff'
                          : isSelected ? '#e6f7ff' : '#fff',
                        transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center'
                      }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 4, marginRight: 12, flexShrink: 0,
                        border: `2px solid ${isSelected ? '#1890ff' : '#d9d9d9'}`,
                        backgroundColor: isSelected ? '#1890ff' : '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s'
                      }}>
                        {isSelected && <span style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>✓</span>}
                      </div>
                      <Space>
                        <Text strong>{option.label}.</Text>
                        <Text>{option.content}</Text>
                        {showAnswer && isCorrectOption && <CheckCircleOutlined style={{ color: '#52c41a' }} />}
                        {showAnswer && isSelected && !isCorrectOption && <CloseCircleOutlined style={{ color: '#ff4d4f' }} />}
                      </Space>
                    </div>
                  );
                })}
              </Space>
            </div>
          )}

          {/* 答案解析 */}
          {showAnswer && (
            <Card style={{
              backgroundColor: isCorrect ? '#f6ffed' : '#fff2f0',
              border: `1px solid ${isCorrect ? '#b7eb8f' : '#ffccc7'}`
            }}>
              <Space direction="vertical">
                <Text strong style={{ color: isCorrect ? '#52c41a' : '#ff4d4f' }}>
                  {isCorrect ? '✓ 回答正确！' : '✗ 回答错误'}
                </Text>
                <Text>正确答案: <Text strong>{currentQuestion.answer}</Text></Text>
                {isMultiple && <Text type="secondary">（多选题需选择全部正确答案才得分）</Text>}
                <Paragraph><Text strong>解析: </Text>{currentQuestion.explanation}</Paragraph>
              </Space>
            </Card>
          )}

          {/* 操作按钮 */}
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Button icon={<ArrowLeftOutlined />} onClick={handlePrev} disabled={currentIndex === 0}>上一题</Button>
            <Space>
              {!showAnswer ? (
                <>
                  <Button onClick={handleSkip}>跳过</Button>
                  <Button type="primary" onClick={handleAnswer}>提交答案</Button>
                </>
              ) : (
                <Button type="primary" icon={<ArrowRightOutlined />} onClick={handleNext}>
                  {currentIndex === questions.length - 1 ? '查看结果' : '下一题'}
                </Button>
              )}
            </Space>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default QuestionPractice;
