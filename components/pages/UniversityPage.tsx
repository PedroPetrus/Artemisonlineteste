
import React, { useState } from 'react';
import { MOCK_UNITS } from '../../constants';
import type { UniversityUnit } from '../../types';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Input from '../ui/Input';

const UniversityPage: React.FC = () => {
  const [units, setUnits] = useState<UniversityUnit[]>(MOCK_UNITS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UniversityUnit | null>(null);

  const handleEdit = (unit: UniversityUnit) => {
    setSelectedUnit(unit);
    setIsModalOpen(true);
  };
  
  const handleAdd = () => {
      setSelectedUnit(null);
      setIsModalOpen(true);
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save unit would go here
    setIsModalOpen(false);
    setSelectedUnit(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-artemis-white mb-6">Gerenciamento da Universidade</h1>
      <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-artemis-light-blue mb-4">Detalhes</h2>
        <div className="space-y-2">
            <p><strong>Nome:</strong> Pontifícia Universidade de ...</p>
            <p><strong>Sigla:</strong> PUC Minas</p>
            <p><strong>CNPJ:</strong> XX.XXX.XXX/0001-XX</p>
        </div>
      </div>

      <div className="bg-artemis-dark-2 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-artemis-light-blue">Unidades (Campus)</h2>
            <Button onClick={handleAdd}>Adicionar Unidade</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-artemis-dark border-b border-artemis-gray">
              <tr>
                <th className="p-4">Nome</th>
                <th className="p-4">Sigla</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit) => (
                <tr key={unit.id} className="border-b border-artemis-gray hover:bg-artemis-gray/20 transition-colors">
                  <td className="p-4">{unit.name}</td>
                  <td className="p-4">{unit.sigla}</td>
                  <td className="p-4">{unit.type}</td>
                  <td className="p-4">
                    <button onClick={() => handleEdit(unit)} className="text-artemis-blue hover:underline">Ver/Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedUnit ? 'Editar Unidade' : 'Cadastrar Unidade'}>
        <form onSubmit={handleSave}>
            <Input label="Nome*" id="name" defaultValue={selectedUnit?.name || ''} required/>
            <Input label="Sigla (3 caracteres)*" id="sigla" defaultValue={selectedUnit?.sigla || ''} maxLength={3} required/>
            <Input label="Endereço*" id="address" defaultValue={selectedUnit?.address || ''} required/>
            <div className="mb-4">
                <span className="block text-sm font-medium text-artemis-light-gray mb-1">Tipo*</span>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input type="radio" name="type" value="Matriz" defaultChecked={selectedUnit?.type === 'Matriz'} className="form-radio text-artemis-blue" />
                        <span className="ml-2">Matriz</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="type" value="Filial" defaultChecked={selectedUnit?.type === 'Filial'} className="form-radio text-artemis-blue" />
                        <span className="ml-2">Filial</span>
                    </label>
                </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
                <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                <Button type="submit">Salvar Alterações</Button>
            </div>
        </form>
      </Modal>

    </div>
  );
};

export default UniversityPage;
