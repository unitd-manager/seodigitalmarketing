import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">12 Month Vision</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground mb-6">
            Imagine Where You Could Be in 12 Months
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            While your competitors scramble with ads, you'll have a self-sustaining organic engine generating leads around the clock.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: "Page 1", label: "Rankings for high-intent keywords" },
            { value: "3-5x", label: "Return on your SEO investment" },
            { value: "24/7", label: "Predictable organic lead flow" },
            { value: "50%+", label: "Reduction in customer acquisition cost" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="gradient-card rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-display font-bold text-primary stat-glow mb-2">{item.value}</div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
