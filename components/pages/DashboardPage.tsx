import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AdminDashboard from '../dashboards/AdminDashboard';
import StudentDashboard from '../dashboards/StudentDashboard';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // Or a loading spinner
  }

  return user.role === 'Aluno' ? <StudentDashboard /> : <AdminDashboard />;
};

export default DashboardPage;