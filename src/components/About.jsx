import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        About Our Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Store Information */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome to [Your Store Name], your one-stop destination for the latest electronics and stylish clothing. We started with a simple vision: to bring quality products and exceptional service to our customers.
          </p>
          <p className="text-gray-600 mb-4">
            Founded in [Year], we've grown from a small local shop to an online store serving customers nationwide. Our passion for technology and fashion drives us to curate a diverse selection of products that cater to your needs.
          </p>
          <p className="text-gray-600 mb-4">
            We believe in providing a seamless shopping experience, from browsing our catalog to receiving your order. Our commitment to quality and customer satisfaction is at the heart of everything we do.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To offer high-quality electronics and clothing at competitive prices, while providing outstanding customer service and a user-friendly shopping experience.
          </p>
        </div>

        {/* Right Column: Key Features */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">
              <strong>Wide Selection:</strong> Explore our extensive range of electronics and clothing from top brands.
            </li>
            <li className="mb-2">
              <strong>Quality Assurance:</strong> We carefully select products that meet our high standards for quality and durability.
            </li>
            <li className="mb-2">
              <strong>Competitive Prices:</strong> Enjoy great value with our competitive pricing and regular promotions.
            </li>
            <li className="mb-2">
              <strong>Fast Shipping:</strong> We offer fast and reliable shipping to get your products to you quickly.
            </li>
            <li className="mb-2">
              <strong>Excellent Customer Service:</strong> Our friendly and knowledgeable team is here to assist you with any questions or concerns.
            </li>
            <li>
                <strong>Secure Shopping:</strong> Shop with confidence knowing your transactions are secure.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Have questions or need assistance? Feel free to reach out to us at <a href="mailto:support@yourstore.com" className="text-blue-600 hover:underline">support@yourstore.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;