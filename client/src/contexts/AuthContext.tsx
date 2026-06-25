import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '../services/api';

interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  examDate?: string;
  dailyStudyTime?: number;
  studyStats?: {
    totalQuestions: number;
    correctQuestions: number;
    totalStudyTime: number;
    streakDays: number;
  };
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>('local-token-no-auth');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // 直接获取默认用户信息，无需登录
        const response = await authAPI.getMe();
        if (response.data) {
          setUser(response.data);
        } else {
          // 如果获取失败，尝试登录获取
          const loginRes = await authAPI.login({ email: '', password: '' });
          const { token: newToken, user: userData } = loginRes.data;
          setToken(newToken);
          setUser(userData);
        }
      } catch (e) {
        console.warn('初始化用户信息失败:', e);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authAPI.login({ email, password });
    const { token: newToken, user: userData } = response.data;
    setToken(newToken);
    setUser(userData);
  };

  const register = async (username: string, email: string, password: string) => {
    const response = await authAPI.register({ username, email, password });
    const { token: newToken, user: userData } = response.data;
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    // 无实际登出操作，保持默认用户
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: true, // 始终已认证
    loading,
    login,
    register,
    logout,
    updateUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
