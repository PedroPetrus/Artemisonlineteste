
import React, { useState } from 'react';
import { MOCK_PROFESSORS } from '../../constants';
import type { Professor } from '../../types';
import Button from '../ui/Button';

const ProfessorsPage: React.FC = () => {
  const [professors] = useState<Professor[]>(MOCK_PROFESSORS);

  return (
    <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-artemis-white">Lista de Professores</h1>
        <Button onClick={() => alert('Abrir modal de novo professor')}>
          Adicionar Novo Professor
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-artemis-dark border-b border-artemis-gray">
            <tr>
              <th className="p-4">Nome</th>
              <th className="p-4">CPF</th>
              <th className="p-4">Titulação</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {professors.map((prof) => (
              <tr key={prof.id} className="border-b border-artemis-gray hover:bg-artemis-gray/20 transition-colors">
                <td className="p-4">{prof.name}</td>
                <td className="p-4">{prof.cpf}</td>
                <td className="p-4">{prof.titulacao}</td>
                <td className="p-4 space-x-4">
                  <button onClick={() => alert(`Ver ${prof.name}`)} className="text-artemis-blue hover:underline">Ver</button>
                  <button onClick={() => alert(`Editar ${prof.name}`)} className="text-artemis-light-blue hover:underline">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfessorsPage;
