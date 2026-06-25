import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import QuestionBank from './pages/Questions/QuestionBank';
import QuestionPractice from './pages/Questions/QuestionPractice';
import WrongQuestions from './pages/WrongQuestions/WrongQuestions';
import StudyPlan from './pages/StudyPlan/StudyPlan';
import MockExam from './pages/Exam/MockExam';
import ExamResult from './pages/Exam/ExamResult';
import ExamHistory from './pages/Exam/ExamHistory';
import KnowledgeFramework from './pages/Knowledge/KnowledgeFramework';
import KnowledgeDetail from './pages/Knowledge/KnowledgeDetail';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questions" element={<QuestionBank />} />
          <Route path="/questions/practice" element={<QuestionPractice />} />
          <Route path="/wrong-questions" element={<WrongQuestions />} />
          <Route path="/study-plan" element={<StudyPlan />} />
          <Route path="/exam/mock" element={<MockExam />} />
          <Route path="/exam/result/:examId" element={<ExamResult />} />
          <Route path="/exam/history" element={<ExamHistory />} />
          <Route path="/knowledge" element={<KnowledgeFramework />} />
          <Route path="/knowledge/:id" element={<KnowledgeDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </AuthProvider>
  );
};

export default App;
