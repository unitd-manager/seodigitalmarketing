import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

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
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
            UTS
          </div>
          <span className="font-display font-bold text-lg text-foreground">United Technologies Solutions</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {isHome && ["Services", "Results", "Process", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
          {isHome && (
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
            >
              Pricing
            </a>
          )}
          {/* <button
            onClick={() => navigate("/packages")}
            className={`text-sm tracking-wider uppercase transition-colors ${
              location.pathname === "/packages"
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Packages
          </button> */}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/cart")}
            className="relative w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href={isHome ? "#cta" : "/packages"}
            className="glow-button bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Book a Call
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
