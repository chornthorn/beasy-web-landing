import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2.5 bg-gray-600/50 text-white rounded-lg border border-gray-500/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-400"
      />
    </div>
  );
};

export default Input;
