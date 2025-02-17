import React from "react";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const productItems = [
  { href: "#compute", label: "Compute" },
  { href: "#databases", label: "Databases" },
  { href: "#storage", label: "Storage" },
  { href: "#networking", label: "Networking" },
];

const solutionItems = [
  { href: "#managed", label: "Managed Cloud" },
  { href: "#kubernetes", label: "Kubernetes" },
  { href: "#startups", label: "Startups" },
  { href: "#enterprise", label: "Enterprise" },
];

const developerItems = [
  { href: "#api", label: "API" },
  { href: "#docs", label: "Documentation" },
  { href: "#tools", label: "Developer Tools" },
];

const partnerItems = [
  { href: "#marketplace", label: "Marketplace" },
  { href: "#technology", label: "Technology Partners" },
  { href: "#service", label: "Service Partners" },
];

const MainNav: React.FC = () => (
  <nav className="hidden md:flex items-center justify-center flex-1 mx-12 space-x-8">
    <div className="relative group flex items-center">
      <NavItem href="#products" hasDropdown>
        Products
      </NavItem>
      <DropdownMenu items={productItems} />
    </div>

    <div className="relative group flex items-center">
      <NavItem href="#solutions" hasDropdown>
        Solutions
      </NavItem>
      <DropdownMenu items={solutionItems} />
    </div>

    <div className="relative group flex items-center">
      <NavItem href="#developers" hasDropdown>
        Developers
      </NavItem>
      <DropdownMenu items={developerItems} />
    </div>

    <div className="relative group flex items-center">
      <NavItem href="#partners" hasDropdown>
        Partners
      </NavItem>
      <DropdownMenu items={partnerItems} />
    </div>

    <NavItem href="#pricing">Pricing</NavItem>
  </nav>
);

export default MainNav;
