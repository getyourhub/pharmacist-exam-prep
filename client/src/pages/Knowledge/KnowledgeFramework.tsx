import React, { useState, useEffect } from 'react';
import { Card, Tree, Typography, Tag, Space, Select, message, Empty, Spin } from 'antd';
import { BookOutlined, FolderOutlined, FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { knowledgeAPI } from '../../services/api';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const KnowledgeFramework: React.FC = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [framework, setFramework] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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
      // 临时使用模拟数据
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
      // 临时使用模拟数据
      setFramework({
        subject: { id: subjectId, name: '药学专业知识（一）' },
        chapters: [
          {
            chapter: { id: '1', name: '第一章 药理学总论', importance: 'high' },
            knowledgePoints: [
              { _id: '1', title: '药物的基本作用', importance: 'high', frequency: 'high' },
              { _id: '2', title: '药物的体内过程', importance: 'high', frequency: 'medium' },
              { _id: '3', title: '影响药物作用的因素', importance: 'medium', frequency: 'medium' }
            ]
          },
          {
            chapter: { id: '2', name: '第二章 传出神经系统药理学', importance: 'high' },
            knowledgePoints: [
              { _id: '4', title: '胆碱受体激动药', importance: 'high', frequency: 'high' },
              { _id: '5', title: '抗胆碱酯酶药', importance: 'high', frequency: 'high' },
              { _id: '6', title: '胆碱受体阻断药', importance: 'high', frequency: 'medium' }
            ]
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const treeData = framework?.chapters?.map((chapter: any) => ({
    title: (
      <Space>
        <Text strong>{chapter.chapter.name}</Text>
        {chapter.chapter.importance === 'high' && <Tag color="red">重点</Tag>}
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
  }));

  return (
    <div>
      <Card title="知识框架">
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

          {/* 知识树 */}
          <Card type="inner">
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
          <Card type="inner" title="使用说明">
            <ul>
              <li>点击章节节点可以展开/折叠子节点</li>
              <li>点击知识点可以查看详细内容</li>
              <li><Tag color="red">重点</Tag> 标记表示高频考点</li>
              <li><Tag color="orange">重要</Tag> 标记表示需要重点掌握</li>
              <li><Tag color="blue">高频</Tag> 标记表示经常出现在考题中</li>
            </ul>
          </Card>
        </Space>
      </Card>
    </div>
  );
};

export default KnowledgeFramework;