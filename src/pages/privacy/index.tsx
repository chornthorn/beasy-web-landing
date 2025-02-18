import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <hr
          className="border-t-1 border-gray-200 mb-8"
          style={{ width: "100%" }}
        />

        <section className="prose prose-lg">
          <h2>Cookie Policy</h2>
          <p>
            Our website uses cookies to enhance your browsing experience and
            provide personalized services. This policy explains how we use
            cookies and similar technologies on our website.
          </p>

          <h3>What are Cookies?</h3>
          <p>
            Cookies are small text files that are stored on your device when you
            visit our website. They help us recognize your device and provide a
            better user experience.
          </p>

          <h3>How We Use Cookies</h3>
          <ul>
            <li>Essential cookies: Required for basic website functionality</li>
            <li>
              Analytics cookies: Help us understand how visitors use our website
            </li>
            <li>Preference cookies: Remember your settings and preferences</li>
            <li>Marketing cookies: Used for personalized advertising</li>
          </ul>

          <h3>Your Choices</h3>
          <p>
            You can control cookie preferences through your browser settings.
            However, disabling certain cookies may limit your ability to use
            some features of our website.
          </p>

          <h2>Data Collection</h2>
          <p>
            We collect and process your personal data in accordance with
            applicable data protection laws. The types of data we collect may
            include:
          </p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Usage data (how you interact with our website)</li>
            <li>
              Technical data (IP address, browser type, device information)
            </li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our privacy policy or how we handle
            your data, please contact us at:
            <br />
            Email: privacy@suntel.com
            <br />
            Phone: +855 123 456 789
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
