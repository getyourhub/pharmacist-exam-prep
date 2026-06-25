import React, { useState, useEffect } from 'react';
import { Card, Tree, Typography, Tag, Space, Select, message, Empty, Spin, Button, Modal, Row, Col } from 'antd';
import { FolderOutlined, FileTextOutlined, BranchesOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { knowledgeAPI } from '../../services/api';

const { Text } = Typography;
const { Option } = Select;

const subjectColorMap: Record<string, string> = {
  pharmacology: '#1890ff',
  pharmaceutics: '#52c41a',
  pharmacyLaw: '#722ed1',
  comprehensiveSkill: '#fa8c16'
};

const chapterMindmapMap: Record<string, Record<number, string>> = {
  pharmacology: { 1:'pharmacology-ch1',2:'pharmacology-ch2',3:'pharmacology-ch3',4:'pharmacology-ch4',5:'pharmacology-ch5',6:'pharmacology-ch6',7:'pharmacology-ch7' },
  pharmaceutics: { 1:'pharmaceutics-ch1',2:'pharmaceutics-ch2',3:'pharmaceutics-ch3',4:'pharmaceutics-ch4',5:'pharmaceutics-ch5',6:'pharmaceutics-ch6',7:'pharmaceutics-ch7' },
  pharmacyLaw: { 1:'pharmacyLaw-ch1',2:'pharmacyLaw-ch2',3:'pharmacyLaw-ch3',4:'pharmacyLaw-ch4',5:'pharmacyLaw-ch5',6:'pharmacyLaw-ch6',7:'pharmacyLaw-ch7' },
  comprehensiveSkill: { 1:'comprehensiveSkill-ch1',2:'comprehensiveSkill-ch2',3:'comprehensiveSkill-ch3',4:'comprehensiveSkill-ch4',5:'comprehensiveSkill-ch5',6:'comprehensiveSkill-ch6',7:'comprehensiveSkill-ch7' }
};

const KnowledgeFramework: React.FC = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [framework, setFramework] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [mindmapVisible, setMindmapVisible] = useState(false);
  const [mindmapUrl, setMindmapUrl] = useState('');
  const [mindmapTitle, setMindmapTitle] = useState('');

  useEffect(() => { loadSubjects(); }, []);
  useEffect(() => { if (selectedSubjectId) loadFramework(selectedSubjectId); }, [selectedSubjectId]);

  const loadSubjects = async () => {
    try {
      const response = await knowledgeAPI.getSubjects();
      const subs = response.data || [];
      setSubjects(subs);
      if (subs.length > 0) setSelectedSubjectId(subs[0]._id);
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
      setFramework(null);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentSubjectCode = (): string => {
    const subject = subjects.find(s => s._id === selectedSubjectId);
    return subject?.code || '';
  };

  const getColor = (): string => {
    return subjectColorMap[getCurrentSubjectCode()] || '#1890ff';
  };

  const openMindmap = (chapterName: string, chapterOrder: number) => {
    const subjectCode = getCurrentSubjectCode();
    const mindmapKey = chapterMindmapMap[subjectCode]?.[chapterOrder];
    if (!mindmapKey) { message.info('该章节思维导图暂未生成'); return; }
    setMindmapUrl(`/mindmaps/${mindmapKey}.html`);
    setMindmapTitle(chapterName + ' - 思维导图');
    setMindmapVisible(true);
  };

  const treeData = framework?.chapters?.map((ch: any) => {
    const chapterOrder = ch.chapter.order || 1;
    const subjectCode = getCurrentSubjectCode();
    const hasMindmap = !!chapterMindmapMap[subjectCode]?.[chapterOrder];
    return {
      title: (
        <Space>
          <Text strong>{ch.chapter.name}</Text>
          {ch.chapter.importance === 'high' && <Tag color="red">重点</Tag>}
          {hasMindmap && (
            <Button type="link" size="small" icon={<BranchesOutlined />}
              onClick={(e) => { e.stopPropagation(); openMindmap(ch.chapter.name, chapterOrder); }}>
              思维导图
            </Button>
          )}
        </Space>
      ),
      key: ch.chapter.id,
      icon: <FolderOutlined />,
      children: ch.knowledgePoints?.map((point: any) => ({
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
      <Card title={<Space><BranchesOutlined /><span>知识框架与思维导图</span></Space>}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          {/* 科目选择 */}
          <div>
            <Text strong style={{ marginRight: 16 }}>选择科目：</Text>
            <Select value={selectedSubjectId} onChange={setSelectedSubjectId} style={{ width: 300 }}>
              {subjects.map(s => (
                <Option key={s._id} value={s._id}>
                  <Space>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: subjectColorMap[s.code] || '#1890ff' }} />
                    {s.name}
                  </Space>
                </Option>
              ))}
            </Select>
          </div>

          {/* 思维导图卡片 */}
          {framework?.chapters?.length > 0 && (
            <Card type="inner" title="📖 章节思维导图（点击查看）">
              <Row gutter={[12, 12]}>
                {framework.chapters.map((ch: any) => {
                  const chapterOrder = ch.chapter.order || 1;
                  const subjectCode = getCurrentSubjectCode();
                  const hasMindmap = !!chapterMindmapMap[subjectCode]?.[chapterOrder];
                  const color = getColor();
                  return (
                    <Col xs={24} sm={12} md={8} lg={6} key={ch.chapter.id}>
                      <Card hoverable size="small" style={{ borderLeft: `4px solid ${color}`, cursor: hasMindmap ? 'pointer' : 'default' }}
                        onClick={() => hasMindmap && openMindmap(ch.chapter.name, chapterOrder)}>
                        <Space>
                          <BranchesOutlined style={{ color, fontSize: 18 }} />
                          <div>
                            <Text strong style={{ fontSize: 13 }}>{ch.chapter.name}</Text>
                            <br />
                            <Text type="secondary" style={{ fontSize: 11 }}>
                              {hasMindmap ? '点击查看思维导图' : '暂无思维导图'}
                            </Text>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Card>
          )}

          {/* 知识树 */}
          <Card type="inner" title="🌳 知识点树形结构（点击查看详情）">
            {loading ? (
              <div style={{ textAlign: 'center', padding: 50 }}><Spin size="large" /></div>
            ) : treeData && treeData.length > 0 ? (
              <Tree showIcon defaultExpandAll treeData={treeData}
                onSelect={(selectedKeys) => {
                  const key = selectedKeys[0] as string;
                  if (key && key.length > 10) navigate(`/knowledge/${key}`);
                }} />
            ) : (
              <Empty description="暂无知识框架数据，请先初始化数据库" />
            )}
          </Card>

          {/* 说明 */}
          <Card type="inner" title="💡 使用说明">
            <ul>
              <li>点击章节卡片可查看该章节的<b>交互式思维导图</b></li>
              <li>思维导图支持鼠标拖拽、滚轮缩放、节点展开/折叠</li>
              <li>点击树形结构中的知识点可查看<b>详细内容和记忆口诀</b></li>
              <li><Tag color="red">重点</Tag>高频考点 · <Tag color="orange">重要</Tag>需重点掌握 · <Tag color="blue">高频</Tag>常出现在考题中</li>
            </ul>
          </Card>
        </Space>
      </Card>

      {/* 思维导图弹窗 */}
      <Modal title={mindmapTitle} open={mindmapVisible} onCancel={() => setMindmapVisible(false)}
        footer={null} width="95vw" style={{ top: 20 }}
        styles={{ body: { padding: 0, height: '85vh' } }}>
        {mindmapUrl && <iframe src={mindmapUrl} style={{ width: '100%', height: '100%', border: 'none' }} title={mindmapTitle} />}
      </Modal>
    </div>
  );
};

export default KnowledgeFramework;
