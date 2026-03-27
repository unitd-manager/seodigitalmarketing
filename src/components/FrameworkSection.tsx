import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Settings, FileText, Link, MapPin, BarChart3 } from "lucide-react";

const features = [
  { icon: Search, title: "Advanced Keyword Research", desc: "We find the exact terms your buyers are searching for — then build content that captures that intent." },
  { icon: Settings, title: "Technical SEO Optimization", desc: "Site speed, crawlability, structured data — we eliminate every technical barrier to ranking." },
  { icon: FileText, title: "On-Page & Content Optimization", desc: "From title tags to content depth, we optimize every page to outperform your competitors." },
  { icon: Link, title: "Authority Link Building", desc: "We earn high-quality backlinks from trusted domains to boost your site's authority and rankings." },
  { icon: MapPin, title: "Local & National SEO", desc: "Whether you serve your city or the entire US, we tailor strategies to your market scope." },
  { icon: BarChart3, title: "Transparent Monthly Reporting", desc: "Real numbers, real insights. You'll always know exactly where your investment is going." },
];

const FrameworkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Our Framework</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Revenue-Driven SEO Framework
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive, battle-tested approach designed to turn organic search into your most profitable growth channel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-card rounded-xl p-8 group hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
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
