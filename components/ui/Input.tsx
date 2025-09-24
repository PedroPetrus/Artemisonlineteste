
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-artemis-light-gray mb-1">{label}</label>
      <input
        id={id}
        className="w-full bg-artemis-dark border border-artemis-gray rounded-md px-3 py-2 text-artemis-white placeholder-artemis-gray focus:outline-none focus:ring-2 focus:ring-artemis-blue focus:border-transparent"
        {...props}
      />
    </div>
  );
};

export default Input;
