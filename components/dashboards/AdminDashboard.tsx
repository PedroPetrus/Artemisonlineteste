import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-artemis-white mb-6">Painel de Controle</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <Card title="Atalhos">
          <ul className="space-y-2">
            <li><Link to="/students" className="text-artemis-blue hover:underline">Gerenciar Alunos</Link></li>
            <li><Link to="/professors" className="text-artemis-blue hover:underline">Gerenciar Professores</Link></li>
            <li><Link to="/departments" className="text-artemis-blue hover:underline">Gerenciar Departamentos</Link></li>
          </ul>
        </Card>

        <Card title="Atividades Recentes">
          <ul className="space-y-3">
            <li className="flex items-center">
                <div className="bg-green-500 rounded-full h-3 w-3 mr-3"></div>
                <span>Matrícula de <strong>Aluno X</strong> aprovada.</span>
            </li>
             <li className="flex items-center">
                <div className="bg-yellow-500 rounded-full h-3 w-3 mr-3"></div>
                <span><strong>Professor Y</strong> atualizou plano de ensino.</span>
            </li>
             <li className="flex items-center">
                <div className="bg-blue-500 rounded-full h-3 w-3 mr-3"></div>
                <span>Novo <strong>Curso Z</strong> adicionado ao departamento.</span>
            </li>
          </ul>
        </Card>
        
        <Card title="Notificações">
           <ul className="space-y-3">
            <li className="p-2 bg-artemis-dark rounded-md">Pendência na matrícula do aluno <strong>Lucas Silva</strong>.</li>
            <li className="p-2 bg-artemis-dark rounded-md">Realocação de sala da turma de <strong>Cálculo I</strong>.</li>
            <li className="p-2 bg-artemis-dark rounded-md">Mudança no horário da disciplina de <strong>Algoritmos</strong>.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;