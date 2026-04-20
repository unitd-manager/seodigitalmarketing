import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  TrendingDown,
  Users,
  Search,
  DollarSign,
} from "lucide-react";

const painPoints = [
  { icon: Search, text: "Your website is buried on page 2+." },
  { icon: TrendingDown, text: "Organic traffic keeps declining." },
  { icon: Users, text: "Leads are inconsistent or low-quality." },
  { icon: AlertTriangle, text: "Competitors dominate search results." },
  { icon: DollarSign, text: "You've invested in SEO before — and saw no real ROI." },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-background relative overflow-hidden" ref={ref}>
      
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>

      <div className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-primary font-semibold text-lg mb-2">
            The Problem
          </h3>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
            Is Your Business Invisible Online?
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            If any of this sounds familiar, you're losing revenue every single day
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="group relative rounded-xl p-[1px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent"
            >
              <div className="rounded-xl bg-card p-5 flex items-start gap-3 h-full transition-all duration-300 group-hover:bg-secondary">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="p-2.5 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 group-hover:from-primary/40 group-hover:to-primary/20 transition"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>

                {/* Text */}
                <p className="text-secondary-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-primary/20"></div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block px-8 py-5 rounded-2xl border border-primary/20 glass-card">

            <p className="text-xl md:text-2xl font-bold text-foreground italic">
              The longer this continues, the more ground you lose.
            </p>

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-primary/10 -z-10"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
