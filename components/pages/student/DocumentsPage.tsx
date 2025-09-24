import React from 'react';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const DocumentsPage: React.FC = () => {
  const handleDownload = (documentName: string) => {
    alert(`Download do documento "${documentName}" iniciado! (simulação)`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-artemis-white mb-6">Emissão de Documentos</h1>
      <Card title="Documentos Disponíveis">
        <div className="space-y-4">
            <div className="p-4 bg-artemis-dark rounded-md flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-artemis-white">Comprovante de Matrícula</h4>
                <p className="text-sm text-artemis-light-gray">Gere seu comprovante de matrícula em formato PDF para o semestre atual.</p>
              </div>
              <Button onClick={() => handleDownload('Comprovante de Matrícula')}>
                Emitir PDF
              </Button>
            </div>
            <div className="p-4 bg-artemis-dark rounded-md flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-artemis-white">Histórico Escolar Completo</h4>
                <p className="text-sm text-artemis-light-gray">Gere o seu histórico escolar completo com todas as notas e disciplinas cursadas.</p>
              </div>
              <Button onClick={() => handleDownload('Histórico Escolar')}>
                Emitir PDF
              </Button>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default DocumentsPage;