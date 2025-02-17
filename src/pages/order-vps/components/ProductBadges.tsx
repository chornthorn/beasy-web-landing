import React from "react";

const ProductBadges: React.FC = () => {
  return (
    <div className="flex gap-2">
      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
        Credit Back
      </span>
      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
        High Performance
      </span>
      <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm">
        SSD Storage
      </span>
    </div>
  );
};

export default ProductBadges;
