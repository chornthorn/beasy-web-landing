import React from "react";

interface Region {
  id: string;
  name: string;
  latency: string;
  ping: string;
  discount?: number;
}

interface Props {
  regions: Region[];
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionSelection: React.FC<Props> = ({
  regions,
  selectedRegion,
  onRegionChange,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">2. Region</h3>
      <div className="space-y-4">
        {regions.map((region) => (
          <label
            key={region.id}
            className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer hover:border-blue-500 transition-colors ${
              selectedRegion === region.id
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700"
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="region"
                value={region.id}
                checked={selectedRegion === region.id}
                onChange={(e) => onRegionChange(e.target.value)}
                className="form-radio text-blue-500 focus:ring-blue-500"
              />
              <div className="ml-3">
                <div className="text-gray-100">{region.name}</div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-1">⚡</span>
                  {region.latency} · {region.ping}
                </div>
              </div>
            </div>
            {region.discount && (
              <div className="text-emerald-400">Save {region.discount}%</div>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RegionSelection;
