
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import ArtemisLogo from '../icons/ArtemisLogo';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-artemis-dark-2 p-4 flex justify-between items-center shadow-md sticky top-0 z-40">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 text-artemis-light-gray hover:text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:block">
            <ArtemisLogo />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="bg-artemis-dark border border-artemis-gray rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-artemis-blue"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-artemis-light-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-2">
            <span className="text-artemis-light-gray">Welcome, {user?.name}</span>
            <button onClick={logout} className="p-2 rounded-full hover:bg-artemis-gray transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
