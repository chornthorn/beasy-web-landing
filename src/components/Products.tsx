import React from "react";

const Products: React.FC = () => {
  const products = [
    {
      title: "VPS Hosting",
      description:
        "High-performance virtual private servers with dedicated resources and full root access.",
      features: [
        "SSD Storage",
        "Dedicated vCPU Cores",
        "Guaranteed RAM",
        "Unlimited Traffic",
      ],
      icon: "🖥️",
    },
    {
      title: "Cloud VPS",
      description:
        "Scalable cloud servers with instant deployment and pay-as-you-go pricing.",
      features: [
        "Instant Scaling",
        "Global Availability",
        "API Access",
        "Hourly Billing",
      ],
      icon: "☁️",
    },
    {
      title: "Dedicated Servers",
      description:
        "Enterprise-grade dedicated servers with premium hardware and network infrastructure.",
      features: [
        "Enterprise Hardware",
        "DDoS Protection",
        "24/7 Support",
        "Custom Configuration",
      ],
      icon: "🔧",
    },
    {
      title: "Object Storage",
      description:
        "Reliable and scalable object storage solution for all your data needs.",
      features: ["S3 Compatible", "Global CDN", "99.9% Uptime", "Pay Per Use"],
      icon: "💾",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cloud Products You Can Promote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offer your audience high-quality cloud solutions backed by German
            engineering and 24/7 support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#signup"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Promoting
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
