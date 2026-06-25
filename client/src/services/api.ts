import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器 - 无需认证token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;

// 认证相关API
export const authAPI = {
  register: (data: { username: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  
  getMe: () => api.get('/auth/me'),
  
  updateProfile: (data: any) => api.put('/auth/profile', data),
  
  updatePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put('/auth/password', data)
};

// 题目相关API
export const questionAPI = {
  getQuestions: (params?: any) => api.get('/questions', { params }),
  
  getQuestion: (id: string) => api.get(`/questions/${id}`),
  
  submitAnswer: (id: string, data: { answer: string; timeSpent: number }) =>
    api.post(`/questions/${id}/answer`, data),
  
  getRandomQuestions: (params?: any) => api.get('/questions/random', { params }),
  
  getWeakQuestions: (params?: any) => api.get('/questions/weak', { params })
};

// 错题本API
export const wrongQuestionAPI = {
  getWrongQuestions: (params?: any) => api.get('/wrong-questions', { params }),
  
  getReviewQuestions: () => api.get('/wrong-questions/review'),
  
  updateMastery: (id: string, data: { masteryLevel: number; isCorrect: boolean }) =>
    api.put(`/wrong-questions/${id}/mastery`, data),
  
  addNotes: (id: string, data: { notes: string }) =>
    api.put(`/wrong-questions/${id}/notes`, data),
  
  getStats: () => api.get('/wrong-questions/stats')
};

// 学习计划API
export const studyPlanAPI = {
  generatePlan: (data: any) => api.post('/study-plans/generate', data),
  
  getCurrentPlan: () => api.get('/study-plans/current'),
  
  getTodayTasks: () => api.get('/study-plans/today'),
  
  updateTaskStatus: (taskId: string, data: { status: string; actualTime?: number }) =>
    api.put(`/study-plans/tasks/${taskId}`, data),
  
  getStats: () => api.get('/study-plans/stats')
};

// 考试API
export const examAPI = {
  startExam: (data: { type: string; subject?: string; questionCount?: number; totalTime?: number }) =>
    api.post('/exams/start', data),
  
  submitAnswer: (examId: string, data: { questionIndex: number; answer: string; timeSpent: number }) =>
    api.post(`/exams/${examId}/answer`, data),
  
  finishExam: (examId: string) => api.post(`/exams/${examId}/finish`),
  
  getExamDetail: (examId: string) => api.get(`/exams/${examId}`),
  
  getExamHistory: (params?: any) => api.get('/exams', { params }),
  
  getStats: () => api.get('/exams/stats')
};

// 知识点API
export const knowledgeAPI = {
  getKnowledgePoints: (params?: any) => api.get('/knowledge', { params }),
  
  getKnowledgePoint: (id: string) => api.get(`/knowledge/${id}`),
  
  getFramework: (subjectId: string) => api.get(`/knowledge/framework/${subjectId}`),
  
  search: (keyword: string) => api.get('/knowledge/search', { params: { keyword } }),
  
  updateReview: (id: string) => api.put(`/knowledge/${id}/review`),
  
  getReviewPoints: () => api.get('/knowledge/review')
};
