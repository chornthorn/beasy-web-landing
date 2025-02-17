import React from "react";
import SharedPricing from "../../shared/components/Pricing";
import { windowsPlans } from "../data/plans";

const Pricing: React.FC = () => {
  return (
    <SharedPricing
      title="Windows VPS Plans"
      subtitle="Choose the perfect Windows VPS plan for your needs. All plans include Windows Server and enterprise-grade performance."
      plans={windowsPlans}
      note="* In Australia and Japan, we offer 10 TB of outgoing, and unlimited inbound data transfer at the same great performance."
    />
  );
};

export default Pricing;
