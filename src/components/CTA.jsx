import React from "react";
import { motion } from "framer-motion";

// ✅ Import local images
import espresso from "../assets/espresso.webp";
import icedLatte from "../assets/iced latte.webp";
import coldCoffee from "../assets/cold coffee.webp";

export default function CTA() {
  const coffees = [
    {
      name: "Espresso",
      desc: "Bold, rich, and aromatic — a true shot of energy.",
      price: "$3.50",
      img: espresso,
      popular: false,
    },
    {
      name: "Iced Latte",
      desc: "Creamy, cool, and smooth — your favorite summer classic.",
      price: "$4.50",
      img: icedLatte,
      popular: true, // ⭐ Highlight this one
    },
    {
      name: "Cold Coffee",
      desc: "Refreshing and chilled — perfect for your daily pick-me-up.",
      price: "$4.00",
      img: coldCoffee,
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-br from-[#4E342E] via-[#806547] to-[#A3825A] text-white relative overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E4D1B9]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C6AC8F]/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-5xl font-bold mb-4 text-[#F5F1EB]">
          Our Signature Brews
        </h2>
        <p className="text-lg mb-12 text-[#E4D1B9]/90">
          Indulge in our handcrafted blends — brewed to perfection.
        </p>

        {/* Coffee Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {coffees.map((coffee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-[#F5F1EB]/10 backdrop-blur-lg border border-[#F5F1EB]/20 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden hover:shadow-[0_0_35px_rgba(243,224,199,0.3)] transform hover:-translate-y-3 transition-all duration-500"
            >
              {coffee.popular && (
                <div className="absolute top-4 right-4 bg-[#C6AC8F] text-[#4E342E] text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  ⭐ Most Popular
                </div>
              )}

              <img
                src={coffee.img}
                alt={coffee.name}
                className="w-full h-60 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6 text-[#F5F1EB]">
                <h3 className="text-2xl font-bold mb-2">{coffee.name}</h3>
                <p className="text-[#E4D1B9]/80 mb-4">{coffee.desc}</p>
                <div className="text-3xl font-bold mb-6 text-[#C6AC8F]">
                  {coffee.price}
                </div>
                <button className="px-6 py-2 rounded-full font-semibold bg-[#F5F1EB] text-[#4E342E] hover:bg-[#E4D1B9] hover:scale-105 transition-all duration-300">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
