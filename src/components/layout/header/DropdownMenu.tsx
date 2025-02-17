import React from "react";

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => (
  <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block z-[100]">
    <div className="bg-white rounded-lg shadow-lg py-2 relative">
      <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
);

export default DropdownMenu;
