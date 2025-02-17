export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PlanSpecs {
  cpu: string;
  cpuModel: string;
  ram: string;
  storage: string;
  bandwidth: string;
  traffic: string;
}

export interface Plan {
  name: string;
  originalPrice: string;
  price: string;
  specs: PlanSpecs;
  popular: boolean;
  storageNote: string;
  trafficNote: string;
}

export const features: Feature[] = [
  {
    title: "NVMe Storage",
    description:
      "Lightning-fast storage with up to 100x faster I/O than traditional SSDs",
    icon: "⚡️",
  },
  {
    title: "Instant Deployment",
    description: "Get your server up and running in less than 60 seconds",
    icon: "🚀",
  },
  {
    title: "Full Root Access",
    description: "Complete control over your virtual server environment",
    icon: "🔑",
  },
  {
    title: "99.99% Uptime",
    description: "Enterprise-grade infrastructure with guaranteed availability",
    icon: "✨",
  },
  {
    title: "DDoS Protection",
    description: "Advanced protection against DDoS attacks included free",
    icon: "🛡️",
  },
  {
    title: "24/7 Support",
    description: "Expert technical support available around the clock",
    icon: "💬",
  },
];

export const plans: Plan[] = [
  {
    name: "CLOUD VDS S",
    originalPrice: "57.99",
    price: "46.40",
    specs: {
      cpu: "3 Physical Cores",
      cpuModel: "AMD EPYC 7282 2.8 GHz",
      ram: "24 GB RAM",
      storage: "180 GB NVMe",
      bandwidth: "250 Mbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    storageNote: "More storage available",
    trafficNote: "Unlimited Available",
  },
  {
    name: "CLOUD VDS M",
    originalPrice: "68.99",
    price: "55.20",
    specs: {
      cpu: "4 Physical Cores",
      cpuModel: "AMD EPYC 7282 2.8 GHz",
      ram: "32 GB RAM",
      storage: "240 GB NVMe",
      bandwidth: "500 Mbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: true,
    storageNote: "More storage available",
    trafficNote: "Unlimited Available",
  },
  {
    name: "CLOUD VDS L",
    originalPrice: "103.99",
    price: "83.20",
    specs: {
      cpu: "6 Physical Cores",
      cpuModel: "AMD EPYC 7282 2.8 GHz",
      ram: "48 GB RAM",
      storage: "360 GB NVMe",
      bandwidth: "750 Mbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    storageNote: "More storage available",
    trafficNote: "Unlimited Available",
  },
  {
    name: "CLOUD VDS XL",
    originalPrice: "137.99",
    price: "110.40",
    specs: {
      cpu: "8 Physical Cores",
      cpuModel: "AMD EPYC 7282 2.8 GHz",
      ram: "64 GB RAM",
      storage: "480 GB NVMe",
      bandwidth: "1 Gbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    storageNote: "More storage available",
    trafficNote: "Unlimited Available",
  },
  {
    name: "CLOUD VDS XXL",
    originalPrice: "194.99",
    price: "156.00",
    specs: {
      cpu: "12 Physical Cores",
      cpuModel: "AMD EPYC 7282 2.8 GHz",
      ram: "96 GB RAM",
      storage: "720 GB NVMe",
      bandwidth: "1 Gbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    storageNote: "More storage available",
    trafficNote: "Unlimited Available",
  },
];
