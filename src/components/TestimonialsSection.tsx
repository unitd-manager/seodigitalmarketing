import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    location: "Austin, TX",
    role: "CEO, Torres Financial Group",
    quote: "Within 6 months, our organic traffic tripled and we're ranking #1 for our highest revenue keywords.",
  },
  {
    name: "Sarah Mitchell",
    location: "Denver, CO",
    role: "Founder, Mitchell & Co.",
    quote: "From page 5 to page 1. Our phone hasn't stopped ringing.",
  },
  {
    name: "David Chen",
    location: "San Diego, CA",
    role: "VP Marketing, Chen Medical",
    quote: "400% increase in qualified leads. The ROI speaks for itself.",
  },
];

const stats = [
  { value: "+187%", label: "Organic Traffic Growth" },
  { value: "3X", label: "Lead Increase" },
  { value: "92%", label: "Client Retention" },
  { value: "4:1", label: "Average ROI" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      className="relative bg-gradient-to-br from-background via-secondary to-background"
      ref={ref}
    >
      {/* Overlay shimmer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="section-container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Proven Results
          </h2>
          <h2 className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Real Clients. Real Revenue.
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-6 text-center gradient-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary stat-glow">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl p-8 flex flex-col gradient-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div>
                <div className="font-display font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
                <div className="text-xs text-primary mt-1">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
