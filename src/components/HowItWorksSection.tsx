import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardCheck, Map, Rocket } from "lucide-react";

const steps = [
  { icon: Phone, step: "01", title: "Free Strategy Call", desc: "We learn about your business, goals, and competitive landscape in a no-obligation consultation." },
  { icon: ClipboardCheck, step: "02", title: "In-Depth Website Audit", desc: "We analyze your site top to bottom — technical health, content gaps, and competitive positioning." },
  { icon: Map, step: "03", title: "Custom SEO Roadmap", desc: "You receive a tailored 90-day strategy built around your revenue goals and market opportunity." },
  { icon: Rocket, step: "04", title: "Scale Traffic & Revenue", desc: "We execute, optimize, and scale — turning organic search into your most profitable growth channel." },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Four Steps to SEO Dominance
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="gradient-card rounded-xl p-8 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="text-5xl font-display font-bold text-primary/20 mb-4">{s.step}</div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
