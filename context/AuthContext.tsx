import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { User } from '../types';
import { MOCK_USERS } from '../constants';

interface AuthContextType {
  user: User | null;
  login: (username: string, password_param: string, role: User['role']) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password_param: string, role: User['role']): boolean => {
    // Standard login for all roles is admin/admin
    if (username.toLowerCase() === 'admin' && password_param === 'admin') {
      // Find the first user that matches the selected role
      const foundUser = MOCK_USERS.find((u) => u.role === role);

      if (foundUser) {
        // Exclude password from the user object that will be stored in state
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userToSet } = foundUser;
        setUser(userToSet);
        return true;
      }
    }

    // If credentials are not admin/admin or no user is found for the role, fail login.
    setUser(null);
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
