export interface VPSPlan {
  model: string;
  cpu: string;
  ram: string;
  storage: string;
  dataTransfer: string;
  price: number;
  badges: string[];
  storageNote?: string;
  transferNote?: string;
  port?: string;
  originalPrice?: number;
  cpuDetail?: string;
  ramNote?: string;
}

export const virtualPrivateServers: VPSPlan[] = [
  {
    model: "Cloud VPS 1",
    cpu: "4 vCPU Cores",
    ram: "6 GB RAM",
    storage: "100 GB NVMe",
    dataTransfer: "32 TB Traffic*",
    price: 5.5,
    badges: ["No Setup Fee", "Credit Back"],
    storageNote: "or 400 GB SSD",
    transferNote: "Unlimited Incoming",
    port: "200 Mbit/s Port",
  },
  {
    model: "Cloud VPS 2",
    cpu: "6 vCPU Cores",
    ram: "16 GB RAM",
    storage: "200 GB NVMe",
    dataTransfer: "32 TB Traffic*",
    price: 12.5,
    badges: ["Credit Back", "No Setup Fee"],
    storageNote: "or 400 GB SSD",
    transferNote: "Unlimited Incoming",
    port: "400 Mbit/s Port",
  },
  {
    model: "Cloud VPS 3",
    cpu: "8 vCPU Cores",
    ram: "24 GB RAM",
    storage: "300 GB NVMe",
    dataTransfer: "32 TB Traffic*",
    price: 17.5,
    badges: ["No Setup Fee", "Credit Back"],
    storageNote: "or 1.2 TB SSD",
    transferNote: "Unlimited Incoming",
    port: "600 Mbit/s Port",
  },
];

export const storageVPSPlans: VPSPlan[] = [
  {
    model: "Storage VPS 1",
    cpu: "2 vCPU Cores",
    ram: "3 GB RAM",
    storage: "800 GB SSD",
    dataTransfer: "32 TB Traffic*",
    price: 5.5,
    badges: ["Credit Back", "No Setup Fee"],
    port: "200 Mbit/s Port",
    transferNote: "Unlimited Incoming",
  },
  {
    model: "Storage VPS 2",
    cpu: "4 vCPU Cores",
    ram: "8 GB RAM",
    storage: "800 GB SSD",
    dataTransfer: "32 TB Traffic*",
    price: 12.5,
    badges: ["Credit Back", "No Setup Fee"],
    port: "400 Mbit/s Port",
    transferNote: "Unlimited Incoming",
  },
  {
    model: "Storage VPS 3",
    cpu: "6 vCPU Cores",
    ram: "12 GB RAM",
    storage: "2.4 TB SSD",
    dataTransfer: "32 TB Traffic*",
    price: 17.5,
    badges: ["Credit Back", "No Setup Fee"],
    port: "600 Mbit/s Port",
    transferNote: "Unlimited Incoming",
  },
];

export const virtualDedicatedServers: VPSPlan[] = [
  {
    model: "Cloud VDS S",
    cpu: "3 Physical Cores",
    cpuDetail: "AMD EPYC 7282 2.8 GHz",
    ram: "24 GB RAM",
    storage: "180 GB NVMe",
    port: "250 Mbit/s Port",
    dataTransfer: "32 TB Traffic*",
    price: 46.4,
    originalPrice: 57.99,
    badges: ["No Setup Fee", "Credit Back"],
    storageNote: "More storage available",
    transferNote: "Unlimited Available",
  },
  {
    model: "Cloud VDS M",
    cpu: "4 Physical Cores",
    cpuDetail: "AMD EPYC 7282 2.8 GHz",
    ram: "32 GB RAM",
    storage: "240 GB NVMe",
    port: "500 Mbit/s Port",
    dataTransfer: "32 TB Traffic*",
    price: 55.2,
    originalPrice: 68.99,
    badges: ["No Setup Fee", "Credit Back"],
    storageNote: "More storage available",
    transferNote: "Unlimited Available",
  },
  {
    model: "Cloud VDS L",
    cpu: "6 Physical Cores",
    cpuDetail: "AMD EPYC 7282 2.8 GHz",
    ram: "48 GB RAM",
    storage: "360 GB NVMe",
    port: "750 Mbit/s Port",
    dataTransfer: "32 TB Traffic*",
    price: 83.2,
    originalPrice: 103.99,
    badges: ["No Setup Fee", "Credit Back"],
    storageNote: "More storage available",
    transferNote: "Unlimited Available",
  },
];

export const dedicatedServers: VPSPlan[] = [
  {
    model: "AMD Ryzen 12",
    cpu: "AMD Ryzen 9 7900",
    cpuDetail: "12 × 3.70 GHz",
    ram: "32 GB REG ECC",
    ramNote: "Up to 128 GB RAM",
    storage: "512 GB NVMe",
    port: "1 Gbit/s Port",
    dataTransfer: "32 TB Traffic*",
    price: 80.0,
    badges: [],
    storageNote: "More storage available",
    transferNote: "Up to 324 TB",
  },
  {
    model: "AMD Genoa 24",
    cpu: "AMD EPYC 9224",
    cpuDetail: "24 × 2.50 GHz (3.70 max)",
    ram: "128 GB REG ECC",
    ramNote: "Up to 768 GB RAM",
    storage: "1 TB SSD",
    port: "1 Gbit/s Port",
    dataTransfer: "32 TB Traffic*",
    price: 163.0,
    badges: [],
    storageNote: "More storage available",
    transferNote: "Up to 324 TB",
  },
];
