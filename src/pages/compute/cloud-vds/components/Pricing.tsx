import React from "react";
import SharedPricing from "../../shared/components/Pricing";

const plans = [
  {
    name: "VDS 1",
    price: "46.40",
    specs: {
      cpu: "4 vCPU Cores",
      ram: "16 GB RAM",
      storage: "400 GB NVMe",
      bandwidth: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
    popular: false,
  },
  {
    name: "VDS 2",
    price: "92.80",
    specs: {
      cpu: "8 vCPU Cores",
      ram: "32 GB RAM",
      storage: "800 GB NVMe",
      bandwidth: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
    popular: true,
  },
  {
    name: "VDS 3",
    price: "185.60",
    specs: {
      cpu: "16 vCPU Cores",
      ram: "64 GB RAM",
      storage: "1600 GB NVMe",
      bandwidth: "32 TB Traffic*",
    },
    trafficNote: "Unlimited Incoming",
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <SharedPricing
      title="Virtual Dedicated Server Plans"
      subtitle="Choose the perfect VDS plan for your needs. All plans include dedicated resources and enterprise-grade performance."
      plans={plans}
      note="* In Australia and Japan, we offer 10 TB of outgoing, and unlimited inbound data transfer at the same great performance."
    />
  );
};

export default Pricing;
