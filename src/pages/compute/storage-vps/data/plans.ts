export interface StorageVPSPlan {
  name: string;
  price: string;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
    traffic: string;
  };
  popular: boolean;
  trafficNote: string;
}

export const storagePlans: StorageVPSPlan[] = [
  {
    name: "STORAGE VPS 1",
    price: "5.50",
    specs: {
      cpu: "2 vCPU Cores",
      ram: "3 GB RAM",
      storage: "800 GB SSD",
      bandwidth: "200 Mbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "STORAGE VPS 2",
    price: "12.50",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8 GB RAM",
      storage: "800 GB SSD",
      bandwidth: "400 Mbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: true,
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "STORAGE VPS 3",
    price: "17.50",
    specs: {
      cpu: "6 vCPU Cores",
      ram: "12 GB RAM",
      storage: "2.4 TB SSD",
      bandwidth: "600 Mbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "STORAGE VPS 4",
    price: "32.50",
    specs: {
      cpu: "10 vCPU Cores",
      ram: "24 GB RAM",
      storage: "3.2 TB SSD",
      bandwidth: "1 Gbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "STORAGE VPS 5",
    price: "42.00",
    specs: {
      cpu: "12 vCPU Cores",
      ram: "32 GB RAM",
      storage: "4 TB SSD",
      bandwidth: "1 Gbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    trafficNote: "Unlimited Incoming",
  },
  {
    name: "STORAGE VPS 6",
    price: "77.00",
    specs: {
      cpu: "18 vCPU Cores",
      ram: "60 GB RAM",
      storage: "4.8 TB SSD",
      bandwidth: "1 Gbit/s Port",
      traffic: "32 TB Traffic*",
    },
    popular: false,
    trafficNote: "Unlimited Incoming",
  },
];

export const features = [
  {
    title: "High-Performance SSDs",
    description: "Fast and reliable storage with enterprise-grade SSDs",
    icon: "💾",
  },
  {
    title: "Instant Deployment",
    description:
      "Get your storage server up and running in less than 60 seconds",
    icon: "🚀",
  },
  {
    title: "Full Root Access",
    description: "Complete control over your storage environment",
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
