import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const FinalCTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Your competitors are investing in SEO.{" "}
            <span className="gradient-text">Are you?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Every day you wait is another day your competitors pull further ahead. Let's build your SEO growth engine — starting now.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="glow-button animate-glow-pulse inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl text-lg font-bold"
          >
            Start My Growth Strategy
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>

          <p className="text-sm text-muted-foreground mt-6">Free consultation · No commitment · Results guaranteed</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
