import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardCheck, Map, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, step: "01", title: "Free Strategy Call" },
  { icon: ClipboardCheck, step: "02", title: "In-Depth Website Audit" },
  { icon: Map, step: "03", title: "Custom SEO Roadmap" },
  { icon: Rocket, step: "04", title: "Scale Traffic & Revenue" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative bg-gradient-to-b from-background via-secondary/20 to-background" ref={ref}>
      <div className="section-container relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 font-display text-4xl md:text-6xl font-extrabold text-primary tracking-tight"
        >
          ⚡ How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16 max-w-3xl mx-auto font-display text-xl md:text-2xl font-bold text-foreground bg-primary/10 px-6 py-4 rounded-lg shadow-lg"
        >
          We handle the heavy lifting. You focus on running your business.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl p-8 text-center bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition group"
            >
              <div className="text-5xl font-display font-extrabold text-primary/30 mb-4">
                {s.step}
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                {s.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
