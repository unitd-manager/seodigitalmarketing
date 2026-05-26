import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, User, UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Mahesh Vinayagam",
    gender: "male",
    location: "qBotica",
    role: "CEO and Founder",
    quote:
      "The SEO strategy significantly improved our search visibility, lead quality, and organic traffic growth. The team consistently delivered measurable results with a strong focus on business impact.",
  },
  {
    name: "Shakeela",
    gender: "female",
    location: "Dr Pals New Me",
    role: "Founder",
    quote:
      "Our website traffic and consultation inquiries increased steadily after the SEO optimization. The team understood our healthcare niche well and helped strengthen our online presence.",
  },
  {
    name: "Murugan",
    gender: "male",
    location: "JusPredict",
    role: "Founder",
    quote:
      "The SEO improvements enhanced our keyword rankings and generated more inbound business inquiries. Their structured approach and continuous optimization delivered excellent long-term results.",
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
      id="testimonials"
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
            Client Testimonials
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
              <div className="flex items-start gap-3 mt-4">
                      {t.gender === "female" ? (
                <UserRound className="w-14 h-14 text-pink-400" />
              ) : (
                <User className="w-14 h-14 text-primary" />
              )}

            <div>
              <div className="font-display font-bold text-foreground">
                {t.name}
              </div>

              <div className="text-sm text-muted-foreground">
                {t.role}
              </div>

              <div className="text-xs text-primary mt-1">
                {t.location}
              </div>
            </div>
          </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
