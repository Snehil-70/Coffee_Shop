import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#3e2f23] text-[#f5f1eb] py-12 text-center relative"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-semibold mb-4"
      >
        Stay Connected with <span className="text-[#d6bfa3]">CaféLuxe</span>
      </motion.h3>
      <p className="text-[#d6bfa3]/80 mb-6">
        © {new Date().getFullYear()} CaféLuxe. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 text-[#d6bfa3]">
        <a href="#" className="hover:text-[#a67b5b] transition">
          Instagram
        </a>
        <a href="#" className="hover:text-[#a67b5b] transition">
          Twitter
        </a>
        <a href="#" className="hover:text-[#a67b5b] transition">
          LinkedIn
        </a>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#a67b5b]/20 blur-3xl rounded-full"
      />
    </footer>
  );
}
