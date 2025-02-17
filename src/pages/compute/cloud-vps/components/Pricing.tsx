import React from "react";
import SharedPricing from "../../shared/components/Pricing";

const plans = [
  {
    name: "VPS 1",
    price: "5.50",
    specs: {
      cpu: "2 vCPU Cores",
      ram: "4 GB RAM",
      storage: "50 GB NVMe",
      bandwidth: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
    popular: false,
  },
  {
    name: "VPS 2",
    price: "10.50",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8 GB RAM",
      storage: "100 GB NVMe",
      bandwidth: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
    popular: true,
  },
  {
    name: "VPS 3",
    price: "15.50",
    specs: {
      cpu: "6 vCPU Cores",
      ram: "16 GB RAM",
      storage: "200 GB NVMe",
      bandwidth: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <SharedPricing
      title="Cloud VPS Plans"
      subtitle="Choose the perfect VPS plan for your needs. All plans include enterprise-grade hardware and optimized performance."
      plans={plans}
      note="* In Australia and Japan, we offer 10 TB of outgoing, and unlimited inbound data transfer at the same great performance."
    />
  );
};

export default Pricing;
