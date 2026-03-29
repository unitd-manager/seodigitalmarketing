import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, FileText, Link, MapPin, BarChart3 } from "lucide-react";

const features = [
  { icon: Search, title: "Advanced Keyword Research", desc: "We target high-intent, revenue-driving searches." },
  { icon: Settings, title: "Technical SEO Optimization", desc: "Speed, Core Web Vitals, crawl errors, indexation fixes." },
  { icon: FileText, title: "On-Page & Content Optimization", desc: "Content structured to rank and convert." },
  { icon: Link, title: "Authority Link Building", desc: "Strategic, high-quality backlinks that move rankings." },
  { icon: MapPin, title: "Local & National SEO", desc: "Own your city. Expand your reach." },
  { icon: BarChart3, title: "Transparent Monthly Reporting", desc: "Clear metrics tied to growth and ROI." },
];

const FrameworkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="framework" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Gradient background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-yellow-50/40 to-background" />

      <div className="section-container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }} // faster transition
          className="text-center mb-16"
        >
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
           OUR REVENUE-DRIVEN SEO FRAMEWORK™
          </h2>
          <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
            Everything is Built Around ROI 
          </span>
          {/* <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive, battle-tested approach designed to turn organic search into your most profitable growth channel.
          </p> */}
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }} // faster stagger
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-8 bg-background border border-border shadow-md transition-all duration-200 ease-out hover:shadow-lg hover:shadow-yellow-700/60"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-yellow-400/30 to-yellow-600/20 flex items-center justify-center mb-5 shadow-md shadow-yellow-700/40 transition-all duration-200">
                <f.icon className="w-6 h-6 text-yellow-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
