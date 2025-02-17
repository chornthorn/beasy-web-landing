export interface CPanelVPSPlan {
  name: string;
  price: string;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    snapshots: string;
    traffic: string;
  };
  popular?: boolean;
  trafficNote: string;
}

export const cpanelPlans: CPanelVPSPlan[] = [
  {
    name: "CLOUD VPS 1",
    price: "32.00",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "6 GB RAM",
      storage: "100 GB NVMe or 400 GB SSD",
      snapshots: "1 Snapshot",
      traffic: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "CLOUD VPS 2",
    price: "39.00",
    specs: {
      cpu: "6 vCPU Cores",
      ram: "16 GB RAM",
      storage: "200 GB NVMe or 400 GB SSD",
      snapshots: "2 Snapshots",
      traffic: "32 TB Traffic*",
    },
    popular: true,
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "CLOUD VPS 3",
    price: "44.00",
    specs: {
      cpu: "8 vCPU Cores",
      ram: "24 GB RAM",
      storage: "300 GB NVMe or 1.2 TB SSD",
      snapshots: "2 Snapshots",
      traffic: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "CLOUD VPS 4",
    price: "59.00",
    specs: {
      cpu: "12 vCPU Cores",
      ram: "48 GB RAM",
      storage: "400 GB NVMe or 1.6 TB SSD",
      snapshots: "3 Snapshots",
      traffic: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "CLOUD VPS 5",
    price: "68.50",
    specs: {
      cpu: "16 vCPU Cores",
      ram: "64 GB RAM",
      storage: "500 GB NVMe or 2 TB SSD",
      snapshots: "3 Snapshots",
      traffic: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "CLOUD VPS 6",
    price: "103.50",
    specs: {
      cpu: "24 vCPU Cores",
      ram: "120 GB RAM",
      storage: "600 GB NVMe or 2.4 TB SSD",
      snapshots: "3 Snapshots",
      traffic: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
  },
];

export const features = [
  {
    title: "cPanel Control Panel",
    description:
      "Industry-leading web hosting control panel for easy website and server management",
    icon: "🎛️",
  },
  {
    title: "One-Click Installers",
    description:
      "Install popular applications like WordPress, Joomla, and Drupal with a single click",
    icon: "🚀",
  },
  {
    title: "Email Management",
    description:
      "Create and manage email accounts, forwarders, and autoresponders with ease",
    icon: "📧",
  },
  {
    title: "Database Support",
    description:
      "Full MySQL/MariaDB database support with phpMyAdmin for easy management",
    icon: "🗄️",
  },
  {
    title: "Website Builder",
    description:
      "Drag-and-drop website builder for creating professional websites without coding",
    icon: "🎨",
  },
  {
    title: "SSL Certificates",
    description:
      "Free SSL certificates and easy installation for secure website hosting",
    icon: "🔒",
  },
];
