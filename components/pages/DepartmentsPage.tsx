
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_DEPARTMENTS } from '../../constants';
import type { Department } from '../../types';
import Button from '../ui/Button';

const DepartmentsPage: React.FC = () => {
  const [departments] = useState<Department[]>(MOCK_DEPARTMENTS);
  
  return (
    <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-artemis-white">Lista de Departamentos</h1>
        <Button onClick={() => alert('Abrir modal de novo departamento')}>
          Adicionar Novo Departamento
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
            {departments.map((dept) => (
              <tr key={dept.id} className="border-b border-artemis-gray hover:bg-artemis-gray/20 transition-colors">
                <td className="p-4">{dept.name}</td>
                <td className="p-4">{dept.sigla}</td>
                <td className="p-4 space-x-4">
                  <Link to={`/departments/${dept.id}/courses`} className="text-artemis-blue hover:underline">Ver Cursos</Link>
                  <button onClick={() => alert(`Editar ${dept.name}`)} className="text-artemis-light-blue hover:underline">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentsPage;
