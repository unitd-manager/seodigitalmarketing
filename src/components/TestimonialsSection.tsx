import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    location: "Austin, TX",
    role: "CEO, Torres Financial Group",
    quote: "Within 6 months, our organic traffic grew 210%. More importantly, qualified leads increased by 340%. RankDominance doesn't just get rankings — they get results.",
  },
  {
    name: "Sarah Mitchell",
    location: "Denver, CO",
    role: "Founder, Mitchell & Co.",
    quote: "We'd been burned by two agencies before. RankDominance was transparent from day one. Now we're #1 for our most valuable keywords and our pipeline has never been stronger.",
  },
  {
    name: "David Chen",
    location: "San Diego, CA",
    role: "VP Marketing, Chen Medical",
    quote: "The ROI speaks for itself — 5.2x return in year one. Their team operates like an extension of ours. I wish we'd started sooner.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Proven Results</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Real Clients. Real Revenue.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="gradient-card rounded-xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
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
