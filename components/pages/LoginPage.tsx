import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import ArtemisLogo from '../icons/ArtemisLogo';
import { User } from '../../types';
import ForgotPasswordModal from '../auth/ForgotPasswordModal';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<User['role']>('Aluno');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const loggedIn = login(username, password, activeTab);

    if (!loggedIn) {
      setError('Usuário ou senha inválidos. Utilize "admin" para ambos os campos.');
    }
  };

  const TabButton: React.FC<{ role: User['role'] }> = ({ role }) => (
    <button
      type="button"
      onClick={() => {
        setActiveTab(role);
        setError('');
      }}
      className={`w-1/3 py-3 text-center font-semibold transition-colors duration-200 ${
        activeTab === role
          ? 'text-artemis-white border-b-2 border-artemis-blue'
          : 'text-artemis-light-gray hover:text-white'
      }`}
    >
      {role}
    </button>
  );

  return (
    <>
      <div className="min-h-screen bg-artemis-dark flex flex-col justify-center items-center p-4">
        <div className="mb-8">
          <ArtemisLogo className="h-16" />
        </div>
        <div className="w-full max-w-md bg-artemis-dark-2 rounded-lg shadow-2xl overflow-hidden">
          <div className="flex">
            <TabButton role="Aluno" />
            <TabButton role="Professor" />
            <TabButton role="Admin" />
          </div>
          <form className="p-8" onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold text-center text-artemis-white mb-6">Login de {activeTab}</h2>
            <Input label="Usuário" id="username" type="text" placeholder="admin" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <Input label="Senha" id="password" type="password" placeholder="admin" value={password} onChange={(e) => setPassword(e.target.value)} required />
            
            <div className="text-right -mt-2 mb-4">
              <button
                type="button"
                onClick={() => setIsForgotPasswordOpen(true)}
                className="text-sm text-artemis-blue hover:underline focus:outline-none"
              >
                Esqueci minha senha
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </div>
      </div>
      <ForgotPasswordModal 
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        role={activeTab}
      />
    </>
  );
};

export default LoginPage;