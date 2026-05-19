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

  const navItems = [
    "Services",
    "Results",
    "Process",
    "About",
    "Pricing",
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
            UTS
          </div>

          <span className="font-bold text-lg text-foreground">
            United Technologies Solutions
          </span>
        </button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isHome &&
            navItems.map((item) => {
              const isActive =
                location.hash === `#${item.toLowerCase()}`;

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`
                    text-sm uppercase tracking-[2px]
                    transition-all duration-200 cursor-pointer
                    text-muted-foreground
                    hover:text-orange-300
                    hover:drop-shadow-[0_0_8px_#fb923c]
                    ${
                      isActive
                        ? "text-orange-300 glow-button text-muted-foreground"
                        : ""
                    }
                  `}
                >
                  {item}
                </a>
              );
            })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className={`
              relative w-10 h-10 rounded-lg flex items-center justify-center
              transition-all duration-200
              text-muted-foreground
              hover:text-orange-300
              hover:bg-muted/50
              hover:drop-shadow-[0_0_8px_#fb923c]
              ${location.pathname === "/cart"
                ? "text-orange-300"
                : ""
              }
            `}
            aria-label="Cart"
          >
            <ShoppingCart className="w-5 h-5" />

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-300 text-black text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* CTA */}
          <a
            href="https://calendar.app.google/FR6cLZASpaqTPHRV6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:drop-shadow-[0_0_10px_#fb923c]"
          >
            Book a Call
          </a>

        </div>
      </div>
    </motion.header>
  );
};

export default Header;