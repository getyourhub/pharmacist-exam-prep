import React, { useState, useEffect } from 'react';
import { Card, Button, Space, Typography, Radio, Progress, Tag, message, Result, Modal, Statistic, Row, Col } from 'antd';
import { ClockCircleOutlined, FileTextOutlined, TrophyOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { examAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;

const MockExam: React.FC = () => {
  const navigate = useNavigate();
  const [examConfig, setExamConfig] = useState({
    type: 'mock',
    questionCount: 100,
    totalTime: 150,
    subject: undefined
  });
  const [exam, setExam] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(false);
  const [examResult, setExamResult] = useState<any>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (exam && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [exam, timeLeft]);

  const handleStartExam = async () => {
    setLoading(true);
    try {
      const response = await examAPI.startExam(examConfig);
      setExam(response.data);
      setTimeLeft(response.data.totalTime);
      setCurrentQuestion(0);
      setAnswers({});
    } catch (error: any) {
      message.error(error.message || '开始考试失败');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmitAnswer = async (questionIndex: number) => {
    const answer = answers[questionIndex];
    if (!answer) {
      message.warning('请先选择答案');
      return;
    }

    try {
      await examAPI.submitAnswer(exam.examId, {
        questionIndex: questionIndex + 1,
        answer,
        timeSpent: 0
      });
    } catch (error) {
      console.error('提交答案失败:', error);
    }
  };

  const handleFinishExam = () => {
    Modal.confirm({
      title: '确认交卷',
      icon: <ExclamationCircleOutlined />,
      content: '确定要提交试卷吗？提交后将无法修改答案。',
      okText: '确认交卷',
      cancelText: '继续答题',
      onOk: async () => {
        try {
          const response = await examAPI.finishExam(exam.examId);
          setExamResult(response.data);
          message.success('考试完成！');
        } catch (error) {
          message.error('提交试卷失败');
        }
      }
    });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 考试结果页面
  if (examResult) {
    return (
      <Card>
        <Result
          icon={<TrophyOutlined style={{ color: examResult.isPassed ? '#52c41a' : '#ff4d4f' }} />}
          title={examResult.isPassed ? '恭喜通过！' : '继续努力！'}
          subTitle={`得分: ${examResult.score}/${examResult.totalScore} (${examResult.accuracy}%)`}
          extra={[
            <Button
              type="primary"
              key="detail"
              onClick={() => navigate(`/exam/result/${examResult.examId}`)}
            >
              查看详情
            </Button>,
            <Button key="again" onClick={() => {
              setExam(null);
              setExamResult(null);
            }}>
              再考一次
            </Button>,
            <Button key="history" onClick={() => navigate('/exam/history')}>
              考试历史
            </Button>
          ]}
        >
          <Row gutter={24} style={{ marginTop: 24 }}>
            <Col span={6}>
              <Statistic title="正确" value={examResult.correctCount} valueStyle={{ color: '#52c41a' }} />
            </Col>
            <Col span={6}>
              <Statistic title="错误" value={examResult.wrongCount} valueStyle={{ color: '#ff4d4f' }} />
            </Col>
            <Col span={6}>
              <Statistic title="用时" value={Math.floor(examResult.duration / 60)} suffix="分钟" />
            </Col>
            <Col span={6}>
              <Statistic
                title="状态"
                value={examResult.isPassed ? '及格' : '不及格'}
                valueStyle={{ color: examResult.isPassed ? '#52c41a' : '#ff4d4f' }}
              />
            </Col>
          </Row>
        </Result>
      </Card>
    );
  }

  // 考试配置页面
  if (!exam) {
    return (
      <Card title="模拟考试">
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Card type="inner" title="考试设置">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Text strong>考试类型：</Text>
                <Radio.Group
                  value={examConfig.type}
                  onChange={(e) => setExamConfig({ ...examConfig, type: e.target.value })}
                >
                  <Radio.Button value="mock">全真模拟</Radio.Button>
                  <Radio.Button value="random">随机抽题</Radio.Button>
                </Radio.Group>
              </div>
              <div>
                <Text strong>题目数量：</Text>
                <Radio.Group
                  value={examConfig.questionCount}
                  onChange={(e) => setExamConfig({ ...examConfig, questionCount: e.target.value })}
                >
                  <Radio.Button value={50}>50题</Radio.Button>
                  <Radio.Button value={100}>100题</Radio.Button>
                  <Radio.Button value={120}>120题</Radio.Button>
                </Radio.Group>
              </div>
              <div>
                <Text strong>考试时长：</Text>
                <Radio.Group
                  value={examConfig.totalTime}
                  onChange={(e) => setExamConfig({ ...examConfig, totalTime: e.target.value })}
                >
                  <Radio.Button value={90}>90分钟</Radio.Button>
                  <Radio.Button value={120}>120分钟</Radio.Button>
                  <Radio.Button value={150}>150分钟</Radio.Button>
                </Radio.Group>
              </div>
            </Space>
          </Card>

          <Card type="inner" title="考试说明">
            <ul>
              <li>考试开始后计时器将自动开始倒计时</li>
              <li>考试过程中可以随时修改答案</li>
              <li>考试时间结束后将自动交卷</li>
              <li>提交试卷后将立即显示成绩和解析</li>
            </ul>
          </Card>

          <Button
            type="primary"
            size="large"
            block
            icon={<FileTextOutlined />}
            loading={loading}
            onClick={handleStartExam}
          >
            开始考试
          </Button>
        </Space>
      </Card>
    );
  }

  // 答题页面
  const question = exam.questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / exam.questions.length) * 100);

  return (
    <div>
      {/* 顶部信息栏 */}
      <Card style={{ marginBottom: 16, position: 'sticky', top: 0, zIndex: 10 }}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Space>
            <Tag color="blue">{exam.title}</Tag>
            <Text>
              {currentQuestion + 1} / {exam.questions.length}
            </Text>
          </Space>
          <Space>
            <ClockCircleOutlined />
            <Text strong style={{ color: timeLeft < 300 ? '#ff4d4f' : undefined }}>
              {formatTime(timeLeft)}
            </Text>
            <Button
              type="primary"
              danger
              onClick={handleFinishExam}
            >
              交卷
            </Button>
          </Space>
        </Space>
        <Progress percent={progress} showInfo={false} style={{ marginTop: 8 }} />
      </Card>

      {/* 题目卡片 */}
      <Card>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Title level={4}>{question.content}</Title>

          <Radio.Group
            onChange={(e) => {
              handleAnswer(currentQuestion, e.target.value);
              handleSubmitAnswer(currentQuestion);
            }}
            value={answers[currentQuestion]}
            style={{ width: '100%' }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              {question.options?.map((option: any) => (
                <Radio
                  key={option.label}
                  value={option.label}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    margin: '4px 0',
                    border: '1px solid #d9d9d9',
                    borderRadius: 8,
                    backgroundColor: answers[currentQuestion] === option.label ? '#e6f7ff' : '#fff'
                  }}
                >
                  <Space>
                    <Text strong>{option.label}.</Text>
                    <Text>{option.content}</Text>
                  </Space>
                </Radio>
              ))}
            </Space>
          </Radio.Group>

          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Button
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(prev => prev - 1)}
            >
              上一题
            </Button>
            <Space>
              {currentQuestion < exam.questions.length - 1 ? (
                <Button
                  type="primary"
                  onClick={() => setCurrentQuestion(prev => prev + 1)}
                >
                  下一题
                </Button>
              ) : (
                <Button
                  type="primary"
                  danger
                  onClick={handleFinishExam}
                >
                  交卷
                </Button>
              )}
            </Space>
          </Space>
        </Space>
      </Card>

      {/* 答题卡 */}
      <Card title="答题卡" style={{ marginTop: 16 }}>
        <Space wrap>
          {exam.questions.map((_: any, index: number) => (
            <Button
              key={index}
              size="small"
              type={answers[index] ? 'primary' : 'default'}
              style={{
                backgroundColor: index === currentQuestion ? '#1890ff' : undefined
              }}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </Button>
          ))}
        </Space>
      </Card>
    </div>
  );
};

export default MockExam;