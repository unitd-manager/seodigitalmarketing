import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "100+", label: "US Businesses Served" },
  { value: "+187%", label: "Average Traffic Growth" },
  { value: "92%", label: "Client Retention" },
  { value: "4:1", label: "Average ROI" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-0 overflow-hidden hero-section">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              #1 Revenue-Focused SEO Agency
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              Stop Being Invisible on Google.{" "}
              <span className="gradient-text">Turn Search Traffic Into Predictable Revenue.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              If your competitors rank above you, they're taking your customers. We help US businesses dominate page one using revenue-focused SEO strategies designed to generate measurable ROI — not empty rankings.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#cta"
                className="glow-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold"
              >
                Get My Free SEO Growth Blueprint
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-secondary transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="gradient-card rounded-2xl p-8 lg:p-10"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-display font-bold text-primary stat-glow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                <span>Average client growth after 6 months</span>
                <span className="text-primary font-semibold">78%</span>
              </div>
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground bg-secondary px-4 py-2 rounded-full">
              <span className="text-primary">★</span> 4.9/5 on Clutch
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
