import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, BookOpen, TrendingUp } from "lucide-react";

const months = [
  {
    icon: Wrench,
    month: "Month 1",
    title: "Foundation & Quick Wins",
    items: ["Technical SEO audit & fixes", "Buyer keyword research", "Quick-win optimizations", "Competitor gap analysis"],
  },
  {
    icon: BookOpen,
    month: "Month 2",
    title: "Authority Building",
    items: ["Content strategy deployment", "High-authority link building", "On-page optimization", "Internal linking architecture"],
  },
  {
    icon: TrendingUp,
    month: "Month 3",
    title: "Ranking Traction",
    items: ["Ranking movement & traction", "Conversion rate alignment", "Performance reporting", "Strategy refinement"],
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Your First 90 Days</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            What Happens in the First 90 Days
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-border" />

          {months.map((item, i) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10 bg-background">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">{item.month}</span>
              <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-4">{item.title}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {item.items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
