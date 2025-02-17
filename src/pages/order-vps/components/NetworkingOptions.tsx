import React from "react";
import Select from "./ui/Select";

interface Props {
  privateNetworking: string;
  bandwidth: string;
  ipv4: string;
  onPrivateNetworkingChange: (value: string) => void;
  onIpv4Change: (value: string) => void;
}

const NetworkingOptions: React.FC<Props> = ({
  privateNetworking,
  bandwidth,
  ipv4,
  onPrivateNetworkingChange,
  onIpv4Change,
}) => {
  const networkingOptions = [
    { value: "none", label: "No Private Networking" },
    { value: "basic", label: "Basic Private Network" },
    { value: "advanced", label: "Advanced Private Network" },
  ];

  const ipv4Options = [
    { value: "1", label: "1 IP Address" },
    { value: "2", label: "2 IP Addresses" },
    { value: "3", label: "3 IP Addresses" },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-semibold text-white">7. Networking</h3>
      </div>

      <div className="space-y-6">
        {/* Private Networking */}
        <Select
          label="Private Networking"
          helpText="Secure communication between your servers"
          value={privateNetworking}
          onChange={onPrivateNetworkingChange}
          options={networkingOptions}
        />

        {/* Bandwidth */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-400">
              Bandwidth
              <div className="w-4 h-4 rounded-full bg-gray-700 text-gray-400 inline-flex items-center justify-center text-xs cursor-help ml-2">
                ?
              </div>
            </label>
          </div>
          <div className="bg-gray-700 border border-gray-600 text-white rounded px-3 py-2">
            <div className="font-medium">{bandwidth}</div>
            <div className="text-sm text-gray-400">200 Mbit/s Connection</div>
          </div>
        </div>

        {/* IPv4 */}
        <Select
          label="IPv4"
          helpText="Additional IP addresses for your server"
          value={ipv4}
          onChange={onIpv4Change}
          options={ipv4Options}
          rightLabel="Free"
        />
      </div>
    </div>
  );
};

export default NetworkingOptions;
