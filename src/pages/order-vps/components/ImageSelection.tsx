import React from "react";

interface ImageOption {
  name: string;
  icon: string;
  versions: string[];
  price: string;
  category: string;
}

interface Props {
  categories: string[];
  options: ImageOption[];
  selectedCategory: string;
  selectedImage: ImageOption;
  onCategoryChange: (category: string) => void;
  onImageSelect: (image: ImageOption) => void;
}

const ImageSelection: React.FC<Props> = ({
  categories,
  options,
  selectedCategory,
  selectedImage,
  onCategoryChange,
  onImageSelect,
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">4. Image</h3>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options
          .filter((img) => img.category === selectedCategory)
          .map((image) => (
            <div
              key={image.name}
              className={`p-6 rounded-lg border cursor-pointer transition-all ${
                selectedImage.name === image.name
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-blue-500"
              }`}
              onClick={() => onImageSelect(image)}
            >
              <div className="text-3xl mb-3">{image.icon}</div>
              <h4 className="text-white font-medium mb-2">{image.name}</h4>
              <select
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1 text-sm mb-3"
                onClick={(e) => e.stopPropagation()}
              >
                {image.versions.map((version) => (
                  <option key={version} value={version}>
                    {version}
                  </option>
                ))}
              </select>
              <div className="text-sm text-gray-400">{image.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSelection;
