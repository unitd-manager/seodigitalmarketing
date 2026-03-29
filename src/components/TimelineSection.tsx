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
    <section className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="section-container relative">
        {/* Attractive Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 font-display text-4xl md:text-6xl font-extrabold text-primary tracking-tight"
        >
          🚀 What Happens in the First 90 Days
        </motion.h2>

        {/* Highlighted Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16 max-w-3xl mx-auto font-display text-xl md:text-2xl font-bold text-foreground bg-primary/10 px-6 py-4 rounded-lg shadow-md"
        >
          We don’t believe in “wait and hope.” You see progress indicators —
          not vague promises.
        </motion.p>

        {/* Timeline Row */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center line */}
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
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10 bg-background">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Card */}
                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition flex flex-col items-center justify-center h-full">
                  <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                    {item.month}
                  </span>

                  <ul className="space-y-3 text-muted-foreground text-sm text-center mt-4">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {li}
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
