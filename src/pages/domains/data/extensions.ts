interface DomainExtension {
  extension: string;
  meaning: string;
  category: string;
  price: number;
}

export const domainExtensions: DomainExtension[] = [
  // Generic TLDs
  {
    extension: ".tel",
    meaning: "Telephone",
    category: "Generic (gTLD)",
    price: 3.89,
  },
  {
    extension: ".biz",
    meaning: "Business",
    category: "Generic (gTLD)",
    price: 2.59,
  },
  {
    extension: ".org",
    meaning: "Organisation",
    category: "Generic (gTLD)",
    price: 2.59,
  },
  {
    extension: ".net",
    meaning: "Network",
    category: "Generic (gTLD)",
    price: 2.59,
  },
  {
    extension: ".info",
    meaning: "Information",
    category: "Generic (gTLD)",
    price: 2.59,
  },
  {
    extension: ".com",
    meaning: "Commercial",
    category: "Generic (gTLD)",
    price: 2.59,
  },
  // Country Code TLDs
  {
    extension: ".ac",
    meaning: "Ascension",
    category: "Country Code (ccTLD)",
    price: 25.99,
  },
  {
    extension: ".af",
    meaning: "Afghanistan",
    category: "Country Code (ccTLD)",
    price: 12.99,
  },
  {
    extension: ".ag",
    meaning: "Antigua and Barbuda",
    category: "Country Code (ccTLD)",
    price: 64.99,
  },
  {
    extension: ".am",
    meaning: "Armenia",
    category: "Country Code (ccTLD)",
    price: 51.99,
  },
  {
    extension: ".as",
    meaning: "American Samoa",
    category: "Country Code (ccTLD)",
    price: 12.99,
  },
  {
    extension: ".asia",
    meaning: "Asia",
    category: "Country Code (ccTLD)",
    price: 2.59,
  },
  {
    extension: ".at",
    meaning: "Austria",
    category: "Country Code (ccTLD)",
    price: 3.89,
  },
  {
    extension: ".be",
    meaning: "Belgium",
    category: "Country Code (ccTLD)",
    price: 2.59,
  },
  {
    extension: ".bg",
    meaning: "Bulgaria",
    category: "Country Code (ccTLD)",
    price: 12.99,
  },
  {
    extension: ".bi",
    meaning: "Burundi",
    category: "Country Code (ccTLD)",
    price: 21.99,
  },
  {
    extension: ".bo",
    meaning: "Bolivia",
    category: "Country Code (ccTLD)",
    price: 61.99,
  },
  {
    extension: ".by",
    meaning: "Belarus",
    category: "Country Code (ccTLD)",
    price: 48.99,
  },
  // New TLDs
  {
    extension: ".surf",
    meaning: "Surfing",
    category: "New (nTLD)",
    price: 3.89,
  },
  {
    extension: ".academy",
    meaning: "Akademien",
    category: "New (nTLD)",
    price: 3.89,
  },
  {
    extension: ".accountant",
    meaning: "Accountant",
    category: "New (nTLD)",
    price: 4.49,
  },
  {
    extension: ".accountants",
    meaning: "Accountants",
    category: "New (nTLD)",
    price: 11.99,
  },
  {
    extension: ".actor",
    meaning: "Actors",
    category: "New (nTLD)",
    price: 4.49,
  },
  {
    extension: ".agency",
    meaning: "Agencies",
    category: "New (nTLD)",
    price: 2.59,
  },
  {
    extension: ".apartments",
    meaning: "Apartments",
    category: "New (nTLD)",
    price: 7.49,
  },
  {
    extension: ".associates",
    meaning: "Associates",
    category: "New (nTLD)",
    price: 3.89,
  },
  {
    extension: ".auction",
    meaning: "Auction",
    category: "New (nTLD)",
    price: 4.49,
  },
  {
    extension: ".audio",
    meaning: "Sound & Audio",
    category: "New (nTLD)",
    price: 15.99,
  },
  {
    extension: ".bar",
    meaning: "bar",
    category: "New (nTLD)",
    price: 8.99,
  },
  {
    extension: ".bargains",
    meaning: "Bargains",
    category: "New (nTLD)",
    price: 3.89,
  },
];

export const features = [
  {
    title: "300+ Extensions (TLDs)",
    description:
      "Choose from a wide range of domain extensions including generic, country-specific, and new TLDs.",
    icon: "🌐",
  },
  {
    title: "Full DNS Entry Management",
    description:
      "Complete control over DNS records with support for A, AAAA, MX, TXT, SRV, and CNAME entries.",
    icon: "⚙️",
  },
  {
    title: "Easy Registration & Transfer",
    description:
      "Simple domain registration and transfer process with full support through our control panel.",
    icon: "🔄",
  },
];

export const categories = [
  {
    id: "generic",
    name: "Generic (gTLD)",
    active: true,
  },
  {
    id: "country",
    name: "Country Code (ccTLD)",
    active: false,
  },
  {
    id: "new",
    name: "New (nTLD)",
    active: false,
  },
];

export const highlights = [
  {
    title: "Choose from over 300 Domain Extensions",
    description:
      "We offer generic domain extensions (gTLDs) like .com and .org as well as numerous new domain extensions (nTLDs) such as .online, .cloud or .email and all common country domain extensions (ccTLDs) like .de, .co.uk, .fr or .it. You will find a complete overview of all domain extensions available at Contabo in the overview below.",
    icon: "🌐",
  },
  {
    title: "Full Self-Service",
    description:
      "Domains can be registered, transferred or updated using Customer Control Panel. Furthermore, you can manage domain handles and DNS records on your own free of charge. After the creation of a DNS zone, you can add and update all kind of common DNS entries such as A, AAAA MX, TXT, SRV or CNAME entries.",
    icon: "⚙️",
  },
];
