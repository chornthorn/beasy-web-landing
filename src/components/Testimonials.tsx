import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Blogger",
      company: "TechReviews.com",
      content:
        "The commission rates are fantastic, but what really sets Contabo's affiliate program apart is their reliable tracking system and prompt payments. My audience loves their cloud solutions!",
      image: "/testimonials/sarah.jpg", // Placeholder image path
    },
    {
      name: "Michael Rodriguez",
      role: "Cloud Solutions Architect",
      company: "CloudArch Solutions",
      content:
        "As someone who regularly recommends cloud services, Contabo's affiliate program has been a game-changer. The products are top-notch and the support team is always there when you need them.",
      image: "/testimonials/michael.jpg", // Placeholder image path
    },
    {
      name: "Emma Thompson",
      role: "Digital Marketing Consultant",
      company: "Digital Growth Partners",
      content:
        "The marketing materials provided are professional and effective. I've seen a significant increase in conversions since joining Contabo's affiliate program. Highly recommended!",
      image: "/testimonials/emma.jpg", // Placeholder image path
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Affiliates Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful affiliates who are already earning with
            Contabo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  {/* Fallback avatar if image is not available */}
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-600 text-white rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join our affiliate program today and start earning with every
            referral
          </p>
          <a
            href="#signup"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Become an Affiliate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
