import React from 'react';
import { NavLink } from 'react-router-dom';
import ArtemisLogo from '../icons/ArtemisLogo';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { user } = useAuth();

  const adminLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Universidade', path: '/university' },
    { name: 'Departamentos', path: '/departments' },
    { name: 'Professores', path: '/professors' },
    { name: 'Alunos', path: '/students' },
  ];

  const studentLinks = [
    { name: 'Painel', path: '/dashboard' },
    { name: 'Minhas Notas', path: '/my-grades' },
    { name: 'Matrícula Online', path: '/enrollment' },
    { name: 'Documentos', path: '/documents' },
  ];

  const navigationLinks = user?.role === 'Aluno' ? studentLinks : adminLinks;
  
  const navLinkClasses = 'flex items-center px-4 py-3 text-artemis-light-gray hover:bg-artemis-gray hover:text-artemis-white rounded-md transition-colors duration-200';
  const activeNavLinkClasses = 'bg-artemis-blue text-white';

  return (
    <aside className={`bg-artemis-dark-2 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}>
      <div className="px-4">
        <ArtemisLogo />
      </div>
      <nav>
        {navigationLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;