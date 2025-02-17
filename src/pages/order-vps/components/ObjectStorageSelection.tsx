import React from "react";
import Select from "./ui/Select";

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const ObjectStorageSelection: React.FC<Props> = ({
  selectedSize,
  onSizeChange,
}) => {
  const storageOptions = [
    { value: "", label: "None" },
    {
      value: "250GB-asia",
      label: "250 GB Object Storage in Asia",
      price: "$3.39",
    },
    {
      value: "500GB-asia",
      label: "500 GB Object Storage in Asia",
      price: "$6.78",
    },
    {
      value: "1TB-asia",
      label: "1 TB Object Storage in Asia",
      price: "$13.56",
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-semibold text-white">6. Object Storage</h3>
        <div className="w-4 h-4 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center text-xs cursor-help">
          ?
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4">
        Add some Object Storage space to backup your VPS.
      </p>

      <Select
        value={selectedSize}
        onChange={onSizeChange}
        options={storageOptions}
        helpText="Object Storage provides a reliable and scalable solution for your backup needs."
      />
    </div>
  );
};

export default ObjectStorageSelection;
