import React from "react";

interface TermSaving {
  save: number;
  label: string;
}

interface Props {
  termSavings: Record<string, TermSaving>;
  selectedTerm: string;
  onTermChange: (term: string) => void;
}

const TermSelection: React.FC<Props> = ({
  termSavings,
  selectedTerm,
  onTermChange,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">
        1. Select your term length
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(termSavings).map(([term, { save, label }]) => (
          <label
            key={term}
            className={`relative flex flex-col p-4 rounded-lg border cursor-pointer hover:border-blue-500 transition-colors ${
              selectedTerm === term
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700"
            }`}
          >
            <input
              type="radio"
              name="term"
              value={term}
              checked={selectedTerm === term}
              onChange={(e) => onTermChange(e.target.value)}
              className="sr-only"
            />
            {term === "3" && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-500 text-black text-xs font-medium rounded">
                BEST VALUE!
              </div>
            )}
            <div className="text-white font-medium mb-1">{label}</div>
            {save > 0 && (
              <div className="text-sm text-emerald-400">
                SAVE ${save.toFixed(2)}
              </div>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TermSelection;
