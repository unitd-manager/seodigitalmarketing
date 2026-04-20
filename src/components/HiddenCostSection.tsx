import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HiddenCostSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    "They gain more authority",
    "Earn more backlinks",
    "Publish more optimized content",
    "Strengthen their ranking position",
  ];

  return (
    <section className="bg-background relative" ref={ref}>
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            The Hidden Cost of Waiting
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            If 1,000 people search for your service each month and your competitor ranks first,
            they are capturing your customers today.
          </p>
        </motion.div>

        {/* Central Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto rounded-2xl p-10 border-2 border-primary bg-card shadow-lg"
        >
          <h3 className="text-center text-primary font-display font-bold text-xl mb-8">
            Every Month You Delay:
          </h3>

          <ul className="space-y-5 text-foreground text-lg font-medium">
            {points.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary shrink-0 mt-1">•</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <p className="mt-8 text-center text-muted-foreground font-medium">
            <span className="font-semibold text-foreground">
              SEO delay = compounding disadvantage.
            </span>
            <br />
            The longer you wait, the harder and more expensive it becomes to compete.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HiddenCostSection;
