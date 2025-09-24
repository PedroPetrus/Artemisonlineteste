
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_STUDENTS } from '../../constants';
import type { Student } from '../../types';
import Button from '../ui/Button';

const StudentsPage: React.FC = () => {
  const [students] = useState<Student[]>(MOCK_STUDENTS);

  return (
    <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-artemis-white">Lista de Alunos</h1>
        <Button onClick={() => alert('Abrir modal de novo aluno')}>
          Adicionar Novo Aluno
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-artemis-dark border-b border-artemis-gray">
            <tr>
              <th className="p-4">Nome</th>
              <th className="p-4">Matrícula</th>
              <th className="p-4">Curso</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-artemis-gray hover:bg-artemis-gray/20 transition-colors">
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.matricula}</td>
                <td className="p-4">{student.course}</td>
                <td className="p-4 space-x-4">
                  <Link to={`/students/${student.id}`} className="text-artemis-blue hover:underline">Ver</Link>
                  <button onClick={() => alert(`Editar ${student.name}`)} className="text-artemis-light-blue hover:underline">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
