import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Zap, Target } from "lucide-react";

const SeoNotaCampaignSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const insights = [
    {
      icon: Clock,
      title: "Paid Ads are Rent",
      description: "The moment you stop paying, traffic disappears.",
    },
    {
      icon: TrendingUp,
      title: "SEO Compounds",
      description:
        "SEO, when done correctly, compounds. Every optimized page becomes a long-term digital asset generating leads 24/7 without paying per click.",
    },
    {
      icon: Zap,
      title: "Winners Started Early",
      description:
        "The companies dominating Google today didn't start last month. They started 12–24 months ago.",
    },
    {
      icon: Target,
      title: "Delay Strengthens Competitors",
      description:
        "SEO rewards early movers. Delay strengthens competitors.",
    },
  ];

  return (
    <section
      className="py-24 lg:py-28 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>

      <div className="section-container relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h3 className="text-primary font-semibold text-lg mb-3">
            SEO Reality
          </h3>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-4">
            SEO IS NOT A CAMPAIGN.
            <br />
            <span className="text-primary">IT'S OWNERSHIP.</span>
          </h2>
        </motion.div>

        {/* Circle Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {insights.map((insight, i) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative overflow-hidden rounded-full p-6 border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm group aspect-square flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute -inset-1 bg-primary/10 blur opacity-20 rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="mb-3 p-2 bg-secondary rounded-full">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 leading-tight">
                    {insight.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-tight px-2">
                    {insight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
        </motion.div>

      </div>
    </section>
  );
};

export default SeoNotaCampaignSection;
