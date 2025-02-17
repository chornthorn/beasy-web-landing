export interface DeploymentOption {
  name: string;
  logo: string;
  category: "os" | "panel" | "custom";
}

export const deploymentOptions: {
  operatingSystems: DeploymentOption[];
  panels: DeploymentOption[];
} = {
  operatingSystems: [
    {
      name: "Ubuntu",
      logo: "https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png",
      category: "os",
    },
    {
      name: "Windows",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg",
      category: "os",
    },
    {
      name: "CentOS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/CentOS_color_logo.svg",
      category: "os",
    },
    {
      name: "FreeBSD",
      logo: "https://contabo.com/logos/Freebsd.svg",
      category: "os",
    },
    {
      name: "Debian",
      logo: "https://www.debian.org/logos/openlogo-nd.svg",
      category: "os",
    },
    {
      name: "openSUSE",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg",
      category: "os",
    },
    {
      name: "AlmaLinux",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/AlmaLinux_Icon_Logo.svg",
      category: "os",
    },
    {
      name: "Rockylinux",
      logo: "https://contabo.com/logos/Rockylinux.svg",
      category: "os",
    },
  ],
  panels: [
    {
      name: "cPanel",
      logo: "https://contabo.com/logos/Cpanel.svg",
      category: "panel",
    },
    {
      name: "Plesk",
      logo: "https://images.ctfassets.net/uhwn5kvabnul/5GSbzTUQqTFkIxORDEAzU1/10167a57d345411f4054372b8caad983/plesk.svg",
      category: "panel",
    },
    {
      name: "Proxmox",
      logo: "https://contabo.com/logos/Proxmox.svg",
      category: "panel",
    },
    {
      name: "Docker",
      logo: "https://contabo.com/logos/Docker.svg",
      category: "panel",
    },
    {
      name: "Webmin",
      logo: "https://contabo.com/logos/Webmin.svg",
      category: "panel",
    },
  ],
};
