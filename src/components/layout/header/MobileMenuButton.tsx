import React from "react";

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => (
  <button
    className="md:hidden text-gray-600 hover:text-blue-600"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
);

export default MobileMenuButton;
