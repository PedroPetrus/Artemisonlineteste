import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import MainLayout from './components/layout/MainLayout';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';

// Admin & Professor Pages
import UniversityPage from './components/pages/UniversityPage';
import DepartmentsPage from './components/pages/DepartmentsPage';
import CoursesPage from './components/pages/CoursesPage';
import ProfessorsPage from './components/pages/ProfessorsPage';
import StudentsPage from './components/pages/StudentsPage';
import StudentDetailPage from './components/pages/StudentDetailPage';

// Student Pages
import MyGradesPage from './components/pages/student/MyGradesPage';
import EnrollmentPage from './components/pages/student/EnrollmentPage';
import DocumentsPage from './components/pages/student/DocumentsPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  const renderRoutes = () => {
    if (!user) {
      return (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      );
    }

    if (user.role === 'Aluno') {
      return (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="my-grades" element={<MyGradesPage />} />
          <Route path="enrollment" element={<EnrollmentPage />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      );
    }

    if (user.role === 'Admin' || user.role === 'Professor') {
      return (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="university" element={<UniversityPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="departments/:deptId/courses" element={<CoursesPage />} />
          <Route path="professors" element={<ProfessorsPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="students/:studentId" element={<StudentDetailPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      );
    }
    
    // Fallback for unknown roles
    return <Route path="*" element={<Navigate to="/login" />} />;
  };

  return (
    <HashRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </HashRouter>
  );
};

export default App;