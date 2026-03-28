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
      color: "from-red-500/20 to-red-500/5",
      borderColor: "border-red-500/30",
    },
    {
      icon: TrendingUp,
      title: "SEO Compounds",
      description:
        "SEO, when done correctly, compounds. Every optimized page becomes a long-term digital asset generating leads 24/7 without paying per click.",
      color: "from-green-500/20 to-green-500/5",
      borderColor: "border-green-500/30",
    },
    {
      icon: Zap,
      title: "Winners Started Early",
      description:
        "The companies dominating Google today didn’t start last month. They started 12–24 months ago.",
      color: "from-orange-500/20 to-orange-500/5",
      borderColor: "border-orange-500/30",
    },
    {
      icon: Target,
      title: "Delay Strengthens Competitors",
      description:
        "SEO rewards early movers. Delay strengthens competitors.",
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/30",
    },
  ];

  return (
    <section
      className="py-24 lg:py-28 bg-gradient-to-b from-[#0B0F19] via-[#0f172a] to-[#0B0F19] relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h3 className="text-orange-400 font-semibold text-lg mb-3">
            SEO Reality
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            SEO IS NOT A CAMPAIGN.
            <br />
            <span className="text-orange-400">IT’S OWNERSHIP.</span>
          </h2>

          {/* <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Paid ads are rent. SEO builds long-term digital assets that generate traffic and leads 24/7.
          </p> */}
        </motion.div>

        {/* 🔥 SAME CIRCLE DESIGN (CONTENT UPDATED) */}
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
                className={`relative overflow-hidden rounded-full p-6 border ${insight.borderColor} bg-gradient-to-br ${insight.color} backdrop-blur-sm group aspect-square flex flex-col items-center justify-center text-center`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${insight.color} blur opacity-20 rounded-full`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="mb-3 p-2 bg-white/10 rounded-full">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>

                  <h3 className="text-sm md:text-base font-semibold text-white mb-2 leading-tight">
                    {insight.title}
                  </h3>

                  <p className="text-gray-300 text-xs md:text-sm leading-tight px-2">
                    {insight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 FINAL LINE */}
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