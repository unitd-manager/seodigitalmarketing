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
    /* CHANGE: Removed flex and items-center. 
       Used pt-32 (top padding for nav) and pb-16 (bottom padding).
    */
    <section className="relative w-full pt-8 pb-16 overflow-hidden hero-section">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="section-container w-full">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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

            <div className="flex flex-wrap gap-4">
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

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="gradient-card rounded-2xl p-8 lg:p-10"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-display font-bold text-primary stat-glow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
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

        {/* CHANGE: This section now has a specific margin-top (mt-16) 
           instead of being pushed down by flex-grow.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Trusted by Enterprise Brands Worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground/40 font-display text-lg font-semibold">
            {["Qbotica", "Newme", "Juspredict", "Axyo"].map((brand) => (
              <span key={brand} className="hover:text-muted-foreground transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;