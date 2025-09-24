import React, { useState } from 'react';
import Button from '../../ui/Button';

const availableDisciplines = [
    { id: 'd-1', name: 'Estrutura de Dados', credits: 4 },
    { id: 'd-2', name: 'Redes de Computadores', credits: 4 },
    { id: 'd-3', name: 'Tópicos Especiais em Inteligência Artificial', credits: 4 },
    { id: 'd-4', name: 'Computação Gráfica', credits: 4 },
    { id: 'd-5', name: 'Direito Digital', credits: 2 },
];

const EnrollmentPage: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);
    
    const toggleSelection = (id: string) => {
        setSelected(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-artemis-white mb-2">Matrícula Online</h1>
            <p className="text-artemis-light-gray mb-6">Selecione as disciplinas que deseja cursar no próximo semestre.</p>
            
            <div className="space-y-3">
                {availableDisciplines.map(discipline => (
                    <div key={discipline.id} className={`flex justify-between items-center p-4 rounded-md transition-all cursor-pointer ${selected.includes(discipline.id) ? 'bg-artemis-blue/30 ring-2 ring-artemis-blue' : 'bg-artemis-dark hover:bg-artemis-gray/20'}`} onClick={() => toggleSelection(discipline.id)}>
                        <div>
                            <h3 className="font-semibold text-artemis-white">{discipline.name}</h3>
                            <p className="text-sm text-artemis-light-gray">{discipline.credits} créditos</p>
                        </div>
                        <Button
                            variant={selected.includes(discipline.id) ? 'secondary' : 'primary'}
                            className="pointer-events-none"
                        >
                            {selected.includes(discipline.id) ? 'Remover' : 'Adicionar'}
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-artemis-gray flex justify-between items-center">
                <p className="text-lg"><strong>{selected.length}</strong> disciplinas selecionadas.</p>
                <Button onClick={() => alert('Matrícula enviada para aprovação!')} disabled={selected.length === 0}>
                    Confirmar Matrícula
                </Button>
            </div>
        </div>
    );
}

export default EnrollmentPage;