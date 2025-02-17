import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <div className="mb-8">
      <nav className="flex space-x-2 text-gray-400">
        <span>Virtual Private Servers</span>
        <span>›</span>
        <span className="text-gray-300">Cloud VPS 1</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;
