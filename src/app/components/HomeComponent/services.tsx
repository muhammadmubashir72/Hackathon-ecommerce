"use client";
import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      id: 1,
      icon: <FaTruck className="text-blue-500 w-12 h-12" />,
      title: "FREE AND FAST DELIVERY",
      description: "Enjoy free delivery for all orders over $140. Fast and reliable service guaranteed.",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-green-500 w-12 h-12" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Our friendly team is here to assist you anytime, day or night.",
    },
    {
      id: 3,
      icon: <FaMoneyBillWave className="text-yellow-500 w-12 h-12" />,
      title: "MONEY BACK GUARANTEE",
      description: "Hassle-free refunds within 30 days for your peace of mind.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 p-4 bg-gray-100 rounded-full group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-600 transition">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">{feature.description}</p>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-20 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
