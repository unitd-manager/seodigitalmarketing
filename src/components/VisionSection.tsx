import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { value: "Rank", label: "for high-intent search terms" },
    { value: "Inbound", label: "inquiries daily" },
    { value: "50%+", label: "Reduced reliance on ads" },
    { value: "Margins↑", label: "Increase margins" },
    { value: "Territory", label: "Own your digital territory" },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"
      ref={ref}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-primary/10 to-yellow-500/10 animate-pulse" />

      <div className="section-container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            12 Month Vision
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-primary to-yellow-500 animate-gradient-x">
            WHERE YOU’LL BE IN 12 MONTHS
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Instead of paying for every click, you’ll build long-term profit infrastructure with SEO — a self-sustaining engine that compounds over time.
          </p>
        </motion.div>

        {/* Straight Line Milestones */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="flex flex-col items-center"
              >
                {/* Larger glowing circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 via-primary to-yellow-500 shadow-[0_0_35px_rgba(255,215,0,0.9)] flex items-center justify-center font-display text-lg text-black font-bold animate-pulse">
                  {item.value}
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <p className="text-lg text-secondary-foreground leading-relaxed font-medium">
            SEO isn’t a marketing expense — it’s your long-term profit infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
