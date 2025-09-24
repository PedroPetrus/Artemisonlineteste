import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { MOCK_STUDENTS, MOCK_ACADEMIC_HISTORY } from '../../../constants';
import type { Student, AcademicHistory } from '../../../types';

const MyGradesPage: React.FC = () => {
  const { user } = useAuth();
  const [student, setStudent] = useState<Student | undefined>();
  const [history, setHistory] = useState<AcademicHistory[]>([]);

  useEffect(() => {
    if (user) {
      setStudent(MOCK_STUDENTS.find(s => s.id === user.id));
      setHistory(MOCK_ACADEMIC_HISTORY.filter(h => h.studentId === user.id));
    }
  }, [user]);

  if (!student) {
    return <div className="text-center text-xl">Carregando dados do aluno...</div>;
  }

  return (
    <div>
      <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-artemis-white">Minhas Notas e Histórico</h1>
        <p className="text-artemis-light-gray mt-2"><strong>Aluno:</strong> {student.name}</p>
        <p className="text-artemis-light-gray"><strong>Matrícula:</strong> {student.matricula}</p>
      </div>

      <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-artemis-light-blue mb-4">Histórico Escolar</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-artemis-dark border-b border-artemis-gray">
              <tr>
                <th className="p-4">Disciplina Cursada</th>
                <th className="p-4">Nota Final</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-b border-artemis-gray hover:bg-artemis-gray/20 transition-colors">
                  <td className="p-4">{item.discipline}</td>
                  <td className="p-4">{item.finalGrade}</td>
                  <td className={`p-4 font-semibold ${item.status === 'Aprovado' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGradesPage;