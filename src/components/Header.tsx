import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
            R
          </div>
          <span className="font-display font-bold text-lg text-foreground">RankDominance</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Results", "Process", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="glow-button bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
        >
          Book a Call
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
