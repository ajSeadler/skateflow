import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pictures", to: "/pictures" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 shadow-lg py-3" : "bg-transparent py-2"
      } `}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-xl tracking-widest uppercase flex items-center gap-2"
        >
          <motion.div
            className={`transition-all duration-500 ${
              scrolled ? "w-10 h-10" : "w-9 h-9"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/logo.JPG"
              alt="Logo"
              className="w-full h-full object-cover rounded-full border border-white/30"
            />
          </motion.div>
          <span>
            Skateflow <span className="text-red-600">Nation</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex gap-8 text-sm font-medium transition-all duration-500 ${
            scrolled ? "text-white" : "text-white/80"
          }`}
        >
          {navLinks.map(({ label, to }) => (
            <li key={label} className="relative group transition">
              <Link
                to={to}
                className="group-hover:text-red-500 transition duration-200"
              >
                {label}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center space-y-8 text-white text-xl uppercase tracking-widest md:hidden"
            >
              {navLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-red-500 transition"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavBar;
