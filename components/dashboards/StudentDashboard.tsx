import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../ui/Card';

const StudentDashboard: React.FC = () => {
    const { user } = useAuth();
    
    // Mocked data for student's current courses
    const currentCourses = [
        { id: 1, name: 'Projeto de Software', professor: 'Wesley Dias Maciel' },
        { id: 2, name: 'Algoritmos', professor: 'Viviane Torres' },
        { id: 3, name: 'Cálculo I (Reprovação)', professor: 'Arthur Rodrigues' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-artemis-white mb-2">Bem-vindo, {user?.name}!</h1>
            <p className="text-artemis-light-gray mb-8">Este é o seu portal acadêmico.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card title="Minhas Disciplinas Atuais">
                        <div className="space-y-4">
                            {currentCourses.map(course => (
                                <div key={course.id} className="p-4 bg-artemis-dark rounded-md">
                                    <h4 className="font-semibold text-artemis-white">{course.name}</h4>
                                    <p className="text-sm text-artemis-light-gray">Professor(a): {course.professor}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div>
                    <Card title="Acesso Rápido">
                        <ul className="space-y-3">
                            <li><Link to="/my-grades" className="block p-3 bg-artemis-dark rounded-md text-artemis-blue hover:bg-artemis-gray/50 transition-colors">Consultar Histórico de Notas</Link></li>
                            <li><Link to="/enrollment" className="block p-3 bg-artemis-dark rounded-md text-artemis-blue hover:bg-artemis-gray/50 transition-colors">Realizar Matrícula Online</Link></li>
                            <li><Link to="/documents" className="block p-3 bg-artemis-dark rounded-md text-artemis-blue hover:bg-artemis-gray/50 transition-colors">Emitir Documentos</Link></li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;