
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_COURSES, MOCK_DEPARTMENTS } from '../../constants';
import type { Course, Department } from '../../types';
import Button from '../ui/Button';

const CoursesPage: React.FC = () => {
  const { deptId } = useParams<{ deptId: string }>();
  const [department, setDepartment] = useState<Department | undefined>();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (deptId) {
      setDepartment(MOCK_DEPARTMENTS.find(d => d.id === deptId));
      setCourses(MOCK_COURSES.filter(c => c.departmentId === deptId));
    }
  }, [deptId]);

  if (!department) {
    return <div className="text-center text-xl">Departamento não encontrado.</div>;
  }

  return (
    <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-artemis-white">Cursos do Departamento</h1>
          <p className="text-artemis-light-gray">{department.name}</p>
        </div>
        <Button onClick={() => alert('Abrir modal de novo curso')}>
          Adicionar Novo Curso
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-artemis-dark border-b border-artemis-gray">
            <tr>
              <th className="p-4">Nome</th>
              <th className="p-4">Sigla</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b border-artemis-gray hover:bg-artemis-gray/20 transition-colors">
                <td className="p-4">{course.name}</td>
                <td className="p-4">{course.sigla}</td>
                <td className="p-4 space-x-4">
                  <button onClick={() => alert(`Ver disciplinas de ${course.name}`)} className="text-artemis-blue hover:underline">Ver Disciplinas</button>
                  <button onClick={() => alert(`Editar ${course.name}`)} className="text-artemis-light-blue hover:underline">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesPage;
