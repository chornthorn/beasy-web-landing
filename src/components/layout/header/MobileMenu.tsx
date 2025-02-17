import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <div className="max-w-[1200px] mx-auto px-4 py-3">
        <nav className="space-y-4">
          <a
            href="#products"
            className="block text-gray-700 hover:text-blue-600"
          >
            Products
          </a>
          <a
            href="#solutions"
            className="block text-gray-700 hover:text-blue-600"
          >
            Solutions
          </a>
          <a
            href="#developers"
            className="block text-gray-700 hover:text-blue-600"
          >
            Developers
          </a>
          <a
            href="#partners"
            className="block text-gray-700 hover:text-blue-600"
          >
            Partners
          </a>
          <a
            href="#pricing"
            className="block text-gray-700 hover:text-blue-600"
          >
            Pricing
          </a>
          <div className="pt-4 border-t">
            <a
              href="#login"
              className="block text-gray-700 hover:text-blue-600 mb-2"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
            >
              Sign up
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
