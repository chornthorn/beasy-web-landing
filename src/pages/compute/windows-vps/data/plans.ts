export interface WindowsVPSPlan {
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

export const windowsPlans: WindowsVPSPlan[] = [
  {
    name: "CLOUD VPS 1 Windows Server",
    price: "15.50",
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
    name: "CLOUD VPS 2 Windows Server",
    price: "32.50",
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
    name: "CLOUD VPS 3 Windows Server",
    price: "50.00",
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
    name: "CLOUD VPS 4 Windows Server",
    price: "93.00",
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
    name: "CLOUD VPS 5 Windows Server",
    price: "114.75",
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
    name: "CLOUD VPS 6 Windows Server",
    price: "164.50",
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
    title: "Windows App Support",
    description:
      "Run essential Windows-based applications like .NET and ASP.NET, ensuring smooth execution and straightforward deployment.",
    icon: "🪟",
  },
  {
    title: "Integrated Active Directory",
    description:
      "Enjoy the convenience of integrated Active Directory, simplifying authentication, user identities, and access management.",
    icon: "🔐",
  },
  {
    title: "Remote Desktop Access",
    description:
      "Stay connected from anywhere with secure Remote Desktop access, facilitating remote work and efficient server management.",
    icon: "🖥️",
  },
  {
    title: "Scalable Resources",
    description:
      "Effortlessly scale up or down on resources like CPU, RAM, and storage - perfect for handling SharePoint and SQL Server databases.",
    icon: "📈",
  },
  {
    title: "Consistent Environment",
    description:
      "Maintain a uniform Windows environment across your infrastructure, enhancing compatibility and streamlining deployment and maintenance.",
    icon: "🔄",
  },
  {
    title: "Maximize Windows Expertise",
    description:
      "Harness your team's existing familiarity with Windows OS to streamline server setup and management without a steep learning curve.",
    icon: "👨‍💻",
  },
];
