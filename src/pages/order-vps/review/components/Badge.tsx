import React from "react";

interface Props {
  variant: "setup" | "credit" | "time";
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ variant, children }) => {
  const variants = {
    setup: {
      bg: "bg-[#3D2227]",
      text: "text-[#F87171]",
    },
    credit: {
      bg: "bg-[#1F3937]",
      text: "text-[#6EE7B7]",
    },
    time: {
      bg: "bg-[#1E2A47]",
      text: "text-[#60A5FA]",
    },
  };

  return (
    <div
      className={`${variants[variant].bg} ${variants[variant].text} rounded-full px-4 py-2 inline-flex items-center gap-1`}
    >
      {variant === "time" && <span className="text-lg leading-none">⏰</span>}
      {children}
    </div>
  );
};

export default Badge;
