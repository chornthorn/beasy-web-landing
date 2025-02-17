import React from "react";

interface VPSSpecs {
  cpu: string;
  ram: string;
  storage: string;
  snapshot: string;
}

interface Props {
  specs: VPSSpecs;
}

const Specs: React.FC<Props> = ({ specs }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div>
        <div className="text-sm text-gray-400 mb-1">CPU</div>
        <div className="text-white font-medium">{specs.cpu}</div>
      </div>
      <div>
        <div className="text-sm text-gray-400 mb-1">RAM</div>
        <div className="text-white font-medium">{specs.ram}</div>
      </div>
      <div>
        <div className="text-sm text-gray-400 mb-1">STORAGE</div>
        <div className="text-white font-medium">{specs.storage}</div>
        <div className="text-sm text-gray-500">Up to 400 GB</div>
      </div>
      <div>
        <div className="text-sm text-gray-400 mb-1">SNAPSHOT</div>
        <div className="text-white font-medium">{specs.snapshot}</div>
      </div>
    </div>
  );
};

export default Specs;
