import React, { useState } from "react";
import TopBanner from "./TopBanner";
import MainNav from "./MainNav";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <TopBanner />

      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <img src="/contabo-logo.svg" alt="Contabo" className="h-8" />
            <MainNav />
            <AuthButtons />
            <MobileMenuButton onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
