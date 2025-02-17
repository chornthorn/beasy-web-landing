import React from "react";

const PricingNotes: React.FC = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto">
      {/* Traffic Note */}
      <p className="text-white/90 text-sm mb-8">
        * In Australia and Japan, we offer 10 TB of outgoing, and unlimited
        inbound data transfer at the same great performance.
      </p>

      {/* Contract Terms */}
      <div className="bg-white/5 rounded-xl p-6 space-y-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/90">
          <span>
            <strong>Minimum initial contract length:</strong> 1 month
          </span>
          <span className="before:content-['|'] before:mx-4 before:text-white/30">
            <strong>Minimum following contract length:</strong> Equal to the
            initial contract length
          </span>
          <span className="before:content-['|'] before:mx-4 before:text-white/30">
            <strong>Minimum cancellation notice:</strong> None (pre-paid) or 4
            weeks (post-paid)
          </span>
        </div>

        {/* Credit Back Terms */}
        <div className="text-sm text-white/90">
          <p className="flex items-center gap-2">
            <span className="text-lg">💰</span>
            <strong>Credit Back terms and conditions:</strong>
          </p>
          <p className="mt-1">
            Credit Back equals a fixed amount depending on the chosen product,
            as described on the first screen when configuring your Server.
            Minimum 1-month service duration. Credit automatically appears in
            your account 15 days after provisioning. The credit can be used for
            new services, renewals, and extra Add Ons only. No cash withdrawals
            permitted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingNotes;
