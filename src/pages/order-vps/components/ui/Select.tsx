import React, { SelectHTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
  price?: string;
  description?: string;
}

interface Props
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  helpText?: string;
  error?: string;
  options: Option[];
  onChange: (value: string) => void;
  rightLabel?: string;
}

const Select: React.FC<Props> = ({
  label,
  helpText,
  error,
  options,
  onChange,
  rightLabel,
  className = "",
  value,
  ...props
}) => {
  return (
    <div className="w-full">
      {(label || rightLabel) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <label className="text-gray-400">
              {label}
              {helpText && (
                <div className="w-4 h-4 rounded-full bg-gray-700 text-gray-400 inline-flex items-center justify-center text-xs cursor-help ml-2">
                  ?
                </div>
              )}
            </label>
          )}
          {rightLabel && <span className="text-emerald-400">{rightLabel}</span>}
        </div>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none bg-gray-700 border border-gray-600 text-white rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            error ? "border-red-500" : "hover:border-gray-500"
          } ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
              {option.price && ` - ${option.price}`}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-400">{helpText}</p>
      )}
    </div>
  );
};

export default Select;
