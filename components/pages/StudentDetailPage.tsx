
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_STUDENTS, MOCK_ACADEMIC_HISTORY } from '../../constants';
import type { Student, AcademicHistory } from '../../types';

const StudentDetailPage: React.FC = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const [student, setStudent] = useState<Student | undefined>();
  const [history, setHistory] = useState<AcademicHistory[]>([]);

  useEffect(() => {
    if (studentId) {
      setStudent(MOCK_STUDENTS.find(s => s.id === studentId));
      setHistory(MOCK_ACADEMIC_HISTORY.filter(h => h.studentId === studentId));
    }
  }, [studentId]);

  if (!student) {
    return <div className="text-center text-xl">Aluno não encontrado.</div>;
  }

  return (
    <div>
      <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold text-artemis-white">Dados do Aluno</h1>
                <p className="text-artemis-light-gray mt-2"><strong>Nome:</strong> {student.name}</p>
                <p className="text-artemis-light-gray"><strong>Matrícula:</strong> {student.matricula}</p>
            </div>
            <button className="text-artemis-blue hover:underline">[Editar Dados]</button>
        </div>
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

export default StudentDetailPage;
