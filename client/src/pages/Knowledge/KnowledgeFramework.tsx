import React, { useState, useEffect } from 'react';
import { Card, Tree, Typography, Tag, Space, Select, message, Empty, Spin, Button, Modal, Row, Col } from 'antd';
import { BookOutlined, FolderOutlined, FileTextOutlined, BranchesOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { knowledgeAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// 科目对应关系
const subjectMap: Record<string, { code: string; color: string }> = {
  '1': { code: 'pharmacology', color: '#1890ff' },
  '2': { code: 'pharmaceutics', color: '#52c41a' },
  '3': { code: 'pharmacyLaw', color: '#722ed1' },
  '4': { code: 'comprehensiveSkill', color: '#fa8c16' }
};

// 章节对应思维导图文件名
const chapterMindmapMap: Record<string, Record<number, string>> = {
  pharmacology: {
    1: 'pharmacology-ch1', 2: 'pharmacology-ch2', 3: 'pharmacology-ch3',
    4: 'pharmacology-ch4', 5: 'pharmacology-ch5', 6: 'pharmacology-ch6',
    7: 'pharmacology-ch7'
  },
  pharmaceutics: {
    1: 'pharmaceutics-ch1', 2: 'pharmaceutics-ch2', 3: 'pharmaceutics-ch3',
    4: 'pharmaceutics-ch4', 5: 'pharmaceutics-ch5', 6: 'pharmaceutics-ch6',
    7: 'pharmaceutics-ch7'
  },
  pharmacyLaw: {
    1: 'pharmacyLaw-ch1', 2: 'pharmacyLaw-ch2', 3: 'pharmacyLaw-ch3',
    4: 'pharmacyLaw-ch4', 5: 'pharmacyLaw-ch5', 6: 'pharmacyLaw-ch6',
    7: 'pharmacyLaw-ch7'
  },
  comprehensiveSkill: {
    1: 'comprehensiveSkill-ch1', 2: 'comprehensiveSkill-ch2', 3: 'comprehensiveSkill-ch3',
    4: 'comprehensiveSkill-ch4', 5: 'comprehensiveSkill-ch5', 6: 'comprehensiveSkill-ch6',
    7: 'comprehensiveSkill-ch7'
  }
};

const KnowledgeFramework: React.FC = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [framework, setFramework] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [mindmapVisible, setMindmapVisible] = useState(false);
  const [mindmapUrl, setMindmapUrl] = useState('');
  const [mindmapTitle, setMindmapTitle] = useState('');

  useEffect(() => {
    loadSubjects();
  }, []);

  useEffect(() => {
    if (selectedSubject) {
      loadFramework(selectedSubject);
    }
  }, [selectedSubject]);

  const loadSubjects = async () => {
    try {
      const mockSubjects = [
        { _id: '1', name: '药学专业知识（一）', color: '#1890ff' },
        { _id: '2', name: '药学专业知识（二）', color: '#52c41a' },
        { _id: '3', name: '药事管理与法规', color: '#722ed1' },
        { _id: '4', name: '综合知识与技能', color: '#fa8c16' }
      ];
      setSubjects(mockSubjects);
      setSelectedSubject(mockSubjects[0]._id);
    } catch (error) {
      message.error('加载科目失败');
    }
  };

  const loadFramework = async (subjectId: string) => {
    setLoading(true);
    try {
      const response = await knowledgeAPI.getFramework(subjectId);
      setFramework(response.data);
    } catch (error) {
      setFramework({
        subject: { id: subjectId, name: subjects.find(s => s._id === subjectId)?.name || '' },
        chapters: [
          {
            chapter: { id: '1', name: '第一章 药理学总论', importance: 'high', order: 1 },
            knowledgePoints: [
              { _id: '1', title: '药物的基本作用', importance: 'high', frequency: 'high' },
              { _id: '2', title: '药物的体内过程', importance: 'high', frequency: 'medium' }
            ]
          },
          {
            chapter: { id: '2', name: '第二章 传出神经系统药理学', importance: 'high', order: 2 },
            knowledgePoints: [
              { _id: '4', title: '胆碱受体激动药', importance: 'high', frequency: 'high' },
              { _id: '5', title: '抗胆碱酯酶药', importance: 'high', frequency: 'high' }
            ]
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const openMindmap = (chapterName: string, chapterOrder: number) => {
    const subjectInfo = selectedSubject ? subjectMap[selectedSubject] : null;
    if (!subjectInfo) return;

    const mindmapKey = chapterMindmapMap[subjectInfo.code]?.[chapterOrder];
    if (!mindmapKey) {
      message.info('该章节思维导图暂未生成');
      return;
    }

    const url = `/mindmaps/${mindmapKey}.html`;
    setMindmapUrl(url);
    setMindmapTitle(chapterName + ' - 思维导图');
    setMindmapVisible(true);
  };

  const treeData = framework?.chapters?.map((chapter: any) => {
    const chapterOrder = chapter.chapter.order || 1;
    const subjectInfo = selectedSubject ? subjectMap[selectedSubject] : null;
    const hasMindmap = subjectInfo && chapterMindmapMap[subjectInfo.code]?.[chapterOrder];

    return {
      title: (
        <Space>
          <Text strong>{chapter.chapter.name}</Text>
          {chapter.chapter.importance === 'high' && <Tag color="red">重点</Tag>}
          {hasMindmap && (
            <Button
              type="link"
              size="small"
              icon={<BranchesOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                openMindmap(chapter.chapter.name, chapterOrder);
              }}
            >
              思维导图
            </Button>
          )}
        </Space>
      ),
      key: chapter.chapter.id,
      icon: <FolderOutlined />,
      children: chapter.knowledgePoints?.map((point: any) => ({
        title: (
          <Space>
            <Text>{point.title}</Text>
            {point.importance === 'high' && <Tag color="orange">重要</Tag>}
            {point.frequency === 'high' && <Tag color="blue">高频</Tag>}
          </Space>
        ),
        key: point._id,
        icon: <FileTextOutlined />,
        isLeaf: true
      }))
    };
  });

  return (
    <div>
      <Card
        title={
          <Space>
            <BranchesOutlined />
            <span>知识框架与思维导图</span>
          </Space>
        }
      >
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          {/* 科目选择 */}
          <div>
            <Text strong style={{ marginRight: 16 }}>选择科目：</Text>
            <Select
              value={selectedSubject}
              onChange={setSelectedSubject}
              style={{ width: 300 }}
            >
              {subjects.map(subject => (
                <Option key={subject._id} value={subject._id}>
                  <Space>
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: subject.color
                      }}
                    />
                    {subject.name}
                  </Space>
                </Option>
              ))}
            </Select>
          </div>

          {/* 思维导图总览 */}
          <Card type="inner" title="📖 章节思维导图（点击展开查看）">
            <Row gutter={[12, 12]}>
              {framework?.chapters?.map((chapter: any) => {
                const chapterOrder = chapter.chapter.order || 1;
                const subjectInfo = selectedSubject ? subjectMap[selectedSubject] : null;
                const hasMindmap = subjectInfo && chapterMindmapMap[subjectInfo.code]?.[chapterOrder];
                const color = subjectInfo?.color || '#1890ff';

                return (
                  <Col xs={24} sm={12} md={8} lg={6} key={chapter.chapter.id}>
                    <Card
                      hoverable
                      size="small"
                      style={{
                        borderLeft: `4px solid ${color}`,
                        cursor: hasMindmap ? 'pointer' : 'default'
                      }}
                      onClick={() => hasMindmap && openMindmap(chapter.chapter.name, chapterOrder)}
                    >
                      <Space>
                        <BranchesOutlined style={{ color, fontSize: 18 }} />
                        <div>
                          <Text strong style={{ fontSize: 13 }}>{chapter.chapter.name}</Text>
                          <br />
                          {hasMindmap ? (
                            <Text type="secondary" style={{ fontSize: 11 }}>点击查看思维导图</Text>
                          ) : (
                            <Text type="secondary" style={{ fontSize: 11 }}>暂无思维导图</Text>
                          )}
                        </div>
                      </Space>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Card>

          {/* 知识树 */}
          <Card type="inner" title="🌳 知识点树形结构">
            {loading ? (
              <div style={{ textAlign: 'center', padding: 50 }}>
                <Spin size="large" />
              </div>
            ) : treeData && treeData.length > 0 ? (
              <Tree
                showIcon
                defaultExpandAll
                treeData={treeData}
                onSelect={(selectedKeys) => {
                  const key = selectedKeys[0] as string;
                  if (key && key.length > 10) {
                    navigate(`/knowledge/${key}`);
                  }
                }}
              />
            ) : (
              <Empty description="暂无知识框架数据" />
            )}
          </Card>

          {/* 说明 */}
          <Card type="inner" title="💡 使用说明">
            <ul>
              <li>点击章节卡片上的 <b>思维导图</b> 按钮可查看该章节的交互式思维导图</li>
              <li>思维导图支持鼠标拖拽移动、滚轮缩放、点击节点展开/折叠</li>
              <li>思维导图包含该章节的<b>核心知识点、关键要点、记忆口诀</b></li>
              <li><Tag color="red">重点</Tag> 标记表示高频考点</li>
              <li><Tag color="orange">重要</Tag> 标记表示需要重点掌握</li>
              <li><Tag color="blue">高频</Tag> 标记表示经常出现在考题中</li>
            </ul>
          </Card>
        </Space>
      </Card>

      {/* 思维导图弹窗 */}
      <Modal
        title={mindmapTitle}
        open={mindmapVisible}
        onCancel={() => setMindmapVisible(false)}
        footer={null}
        width="95vw"
        style={{ top: 20 }}
        styles={{ body: { padding: 0, height: '85vh' } }}
      >
        {mindmapUrl && (
          <iframe
            src={mindmapUrl}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title={mindmapTitle}
          />
        )}
      </Modal>
    </div>
  );
};

export default KnowledgeFramework;
