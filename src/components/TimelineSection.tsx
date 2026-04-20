import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, BookOpen, TrendingUp } from "lucide-react";

const months = [
  {
    icon: Wrench,
    month: "Month 1",
    items: [
      "Technical SEO fixes",
      "Buyer-intent keyword strategy",
      "Quick-win optimizations",
    ],
  },
  {
    icon: BookOpen,
    month: "Month 2",
    items: [
      "Authority building begins",
      "Core content deployment",
      "On-page enhancements",
    ],
  },
  {
    icon: TrendingUp,
    month: "Month 3",
    items: [
      "Early ranking improvements",
      "Traffic traction",
      "Conversion tracking alignment",
    ],
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="section-container relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 font-display text-4xl md:text-6xl font-extrabold text-primary tracking-tight"
        >
          ⚡ What Happens in the First 90 Days
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 max-w-3xl mx-auto font-display text-xl md:text-2xl font-bold text-foreground bg-primary/10 px-6 py-4 rounded-lg shadow-md"
        >
          We don't believe in "wait and hope." You see progress indicators —
          not vague promises.
        </motion.p>

        {/* Timeline Row */}
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-3 gap-8">
            {months.map((item, i) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Card */}
                <div className="gradient-card rounded-2xl p-8">
                  <h3 className="font-display font-bold text-lg text-primary mb-4">
                    {item.month}
                  </h3>
                  <ul className="space-y-3">
                    {item.items.map((task) => (
                      <li key={task} className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="text-primary text-xs">▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
