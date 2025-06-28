import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/norman-ollie-rock.JPG";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background image fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/norman-ollie-rock.JPG')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-2xl">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold uppercase leading-tight md:leading-snug tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Elevate
          <span className="block text-red-500">Your Skating</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Dive into curated skate tutorials, cinematic slow‑mo, and insider flow
          techniques—no fluff, all finesse.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <a
            href="#start"
            className="inline-block px-8 py-3 bg-red-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transform transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="inline-block px-8 py-3 border border-white/50 text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-8 z-20 flex items-center text-white uppercase tracking-wider text-xs"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{
          delay: 1.2,
          duration: 2,
          repeat: Infinity,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        Scroll
      </motion.div>

      {/* Photo credit */}
      <div className="absolute bottom-4 right-6 z-20 text-[11px] text-gray-400">
        Photo by{" "}
        <a
          href="https://instagram.com/eduardo.martinez.gallegos"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition"
        >
          @eduardo.martinez.gallegos
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
