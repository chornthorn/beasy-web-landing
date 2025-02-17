import React from "react";

interface StorageType {
  name: string;
  price: string;
  description: string;
  range: string;
}

interface Props {
  selectedType: "nvme" | "ssd";
  selectedSize: number;
  onTypeChange: (type: "nvme" | "ssd") => void;
  onSizeChange: (size: number) => void;
}

const StorageConfiguration: React.FC<Props> = ({
  selectedType,
  selectedSize,
  onTypeChange,
  onSizeChange,
}) => {
  const storageTypes: Record<string, StorageType> = {
    nvme: {
      name: "NVME STORAGE",
      price: "$0.1/GB/mo",
      description: "High-performance NVMe storage for demanding workloads",
      range: "100 GB - 400 GB",
    },
    ssd: {
      name: "SSD STORAGE",
      price: "$0.05/GB/mo",
      description: "Cost-effective SSD storage for general purpose use",
      range: "400 GB - 1600 GB",
    },
  };

  const storageOptions = [100, 200, 300, 400];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">
        5. Storage Configuration
      </h3>

      <div className="text-sm text-gray-400 mb-4">Storage Type</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries(storageTypes).map(([type, info]) => (
          <label
            key={type}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedType === type
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700 hover:border-blue-500"
            }`}
            onClick={() => onTypeChange(type as "nvme" | "ssd")}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-white font-medium">{info.name}</span>
              <span className="text-blue-400">{info.price}</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">{info.description}</p>
            <div className="text-gray-500 text-sm">{info.range}</div>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Storage Size</span>
          <span className="text-blue-400">
            ${(selectedSize * 0.1).toFixed(2)}/mo
          </span>
        </div>

        <div className="relative">
          <input
            type="range"
            min="100"
            max="400"
            step="100"
            value={selectedSize}
            onChange={(e) => onSizeChange(parseInt(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            {storageOptions.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`px-4 py-1 rounded-full transition-colors ${
                  selectedSize === size
                    ? "bg-blue-500 text-white"
                    : "hover:text-gray-300"
                }`}
              >
                {size} GB
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-yellow-400 mt-1">💡</span>
          <p className="text-gray-300 text-sm">
            NVMe storage offers up to 10x faster performance compared to regular
            SSDs, ideal for databases and high-traffic applications.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-yellow-400 mt-1">💡</span>
          <p className="text-gray-300 text-sm">
            Storage can be resized at any time through the control panel.
            Upgrades are instant, while downgrades require a reboot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorageConfiguration;
