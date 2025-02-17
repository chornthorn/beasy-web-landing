import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#ff6b4a] to-[#ff3e3e] rounded-3xl overflow-hidden">
          <div className="px-8 py-16 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses that have already partnered with
              us for their digital transformation journey.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
