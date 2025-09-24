import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { User } from '../../types';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: User['role'];
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose, role }) => {
  const [username, setUsername] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would call an API to trigger the password reset email.
    // For this prototype, we'll just simulate the success state.
    console.log(`Password reset requested for username: ${username} with role: ${role}`);
    setIsSubmitted(true);
  };

  const handleClose = () => {
      // Reset state when closing the modal
      setIsSubmitted(false);
      setUsername('');
      onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Recuperar Senha">
      {isSubmitted ? (
        <div>
          <p className="text-artemis-light-gray text-center">
            Se uma conta com o nome de usuário fornecido existir, um e-mail de redefinição de senha foi enviado.
          </p>
          <div className="flex justify-center mt-6">
            <Button onClick={handleClose}>Fechar</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className="text-artemis-light-gray mb-4">
            Digite seu nome de usuário de <strong>{role}</strong> para receber as instruções de redefinição de senha.
          </p>
          <Input
            label="Usuário"
            id="reset-username"
            type="text"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
          <div className="flex justify-end space-x-4 mt-6">
            <Button type="button" variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Enviar Instruções</Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ForgotPasswordModal;
