import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 pt-32 pb-16 md:pt-40 md:pb-24 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Brewed with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a67b5b] to-[#8b5e3c]">
            Passion & Perfection
          </span>
        </h1>
        <p className="mt-4 text-[#6b5440] text-lg max-w-lg">
          Experience the warmth of handcrafted design, blended perfectly with
          modern digital aesthetics.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-gradient-to-r from-[#a67b5b] to-[#8b5e3c] text-white px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform shadow-[0_0_15px_rgba(166,123,91,0.6)]">
            Explore Menu
          </button>
          <button className="border border-[#a67b5b] text-[#3e2f23] dark:text-[#f5f1eb] px-8 py-3 rounded-full hover:bg-[#a67b5b]/20 transition">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
        alt="Coffee Cup Illustration"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-72 md:w-[400px] mb-8 md:mb-0 drop-shadow-[0_0_30px_rgba(166,123,91,0.4)]"
      />
    </section>
  );
}
