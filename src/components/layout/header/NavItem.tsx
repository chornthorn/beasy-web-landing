import React from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, hasDropdown }) => (
  <div className="relative group flex items-center">
    <a
      href={href}
      className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
    >
      {children}
      {hasDropdown && (
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </a>
  </div>
);

export default NavItem;
