import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  error?: string;
  rightElement?: React.ReactNode;
}

const Input: React.FC<Props> = ({
  label,
  helpText,
  error,
  rightElement,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-400 mb-2">
          {label}
          {helpText && (
            <div className="w-4 h-4 rounded-full bg-gray-700 text-gray-400 inline-flex items-center justify-center text-xs cursor-help ml-2">
              ?
            </div>
          )}
        </label>
      )}
      <div className="relative">
        <input
          className={`w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            rightElement ? "pr-10" : ""
          } ${error ? "border-red-500" : "hover:border-gray-500"} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightElement}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-400">{helpText}</p>
      )}
    </div>
  );
};

export default Input;
