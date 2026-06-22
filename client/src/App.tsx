import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import MainLayout from './components/Layout/MainLayout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
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
import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>加载中...</div>;
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
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
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;