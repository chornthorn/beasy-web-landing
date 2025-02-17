import React from "react";
import Select from "./ui/Select";

interface Props {
  backupSpace: string;
  serverManagement: string;
  monitoring: string;
  ssl: string;
  onBackupSpaceChange: (value: string) => void;
  onServerManagementChange: (value: string) => void;
  onMonitoringChange: (value: string) => void;
  onSslChange: (value: string) => void;
}

const AddOns: React.FC<Props> = ({
  backupSpace,
  serverManagement,
  monitoring,
  ssl,
  onBackupSpaceChange,
  onServerManagementChange,
  onMonitoringChange,
  onSslChange,
}) => {
  const backupOptions = [
    { value: "none", label: "None" },
    { value: "100gb", label: "100 GB", price: "$5.00/mo" },
    { value: "200gb", label: "200 GB", price: "$10.00/mo" },
    { value: "300gb", label: "300 GB", price: "$15.00/mo" },
  ];

  const managementOptions = [
    { value: "unmanaged", label: "Unmanaged" },
    { value: "basic", label: "Basic Management" },
    { value: "premium", label: "Premium Management" },
  ];

  const monitoringOptions = [
    { value: "none", label: "None" },
    { value: "basic", label: "Basic Monitoring", price: "$10.00/mo" },
    { value: "advanced", label: "Advanced Monitoring", price: "$20.00/mo" },
  ];

  const sslOptions = [
    { value: "none", label: "None" },
    { value: "standard", label: "Standard SSL", price: "$30.00/year" },
    { value: "wildcard", label: "Wildcard SSL", price: "$150.00/year" },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-semibold text-white">8. Add-Ons</h3>
      </div>

      <div className="space-y-6">
        <Select
          label="Backup Space"
          helpText="Regular automated backups of your server"
          value={backupSpace}
          onChange={onBackupSpaceChange}
          options={backupOptions}
        />

        <Select
          label="Server Management"
          helpText="Let our experts handle server maintenance"
          value={serverManagement}
          onChange={onServerManagementChange}
          options={managementOptions}
          rightLabel="Free"
        />

        <Select
          label="Monitoring"
          helpText="Proactive monitoring and alerts"
          value={monitoring}
          onChange={onMonitoringChange}
          options={monitoringOptions}
        />

        <Select
          label="SSL"
          helpText="Secure your website with SSL certificates"
          value={ssl}
          onChange={onSslChange}
          options={sslOptions}
        />
      </div>
    </div>
  );
};

export default AddOns;
