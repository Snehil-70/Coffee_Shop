import { motion } from "framer-motion";
import { Coffee, Heart, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Coffee className="w-8 h-8 text-[#a67b5b]" />,
      title: "Premium Blends",
      desc: "Handpicked beans roasted to perfection for an authentic flavor experience.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#a67b5b]" />,
      title: "Crafted with Love",
      desc: "Every design detail brewed with warmth, elegance, and care.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#a67b5b]" />,
      title: "Always Fresh",
      desc: "Fast, responsive, and timeless — just like your morning cup.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-8 bg-[#f5f1eb] dark:bg-[#3e2f23] transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6 text-[#3e2f23] dark:text-[#f5f1eb]"
        >
          What Makes Us <span className="text-[#a67b5b]">Special</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#6b5440] dark:text-[#d6bfa3] max-w-2xl mx-auto mb-16"
        >
          Taste the difference of beautifully crafted digital experiences,
          inspired by rich aromas and warm hues.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="p-8 rounded-2xl bg-[#fffaf5] dark:bg-[#4b3624] shadow-md hover:shadow-[0_0_20px_rgba(166,123,91,0.4)] transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e2f23] dark:text-[#f5f1eb]">
                {f.title}
              </h3>
              <p className="text-[#6b5440] dark:text-[#d6bfa3]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
