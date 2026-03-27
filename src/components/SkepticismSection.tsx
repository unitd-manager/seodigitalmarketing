import { motion } from "framer-motion";
import { AlertCircle, Clock, ShieldX, Zap } from "lucide-react";

const objections = [
  { icon: Clock, text: "SEO takes too long." },
  { icon: ShieldX, text: "Agencies overpromise." },
  { icon: AlertCircle, text: "We tried it before. Nothing happened." },
  { icon: Zap, text: "Ads are faster." },
];

const SkepticismSection = () => {
  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg mb-3">
            The Concern
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Why Most Businesses Hesitate to Invest in SEO
          </h2>

          <p className="text-gray-400 mb-6">
            Let’s address the real concern. These are the exact thoughts most business owners have before investing in SEO.
          </p>

          {/* Statement Boxes */}
          <div className="space-y-4">

            {/* Box 1 */}
            <div className="relative inline-block px-6 py-4 rounded-xl border border-orange-400/30 bg-orange-500/10 backdrop-blur">
              <p className="text-white font-medium">
                That skepticism makes sense.
              </p>
              <div className="absolute inset-0 blur-xl bg-orange-500/20 -z-10 rounded-xl"></div>
            </div>

            {/* Box 2 */}
            <div className="relative inline-block px-6 py-4 rounded-xl border border-orange-400/30 bg-orange-500/10 backdrop-blur">
              <p className="text-white font-semibold text-center">
                Most SEO agencies sell rankings.
              </p>
              <p className="text-orange-400 font-semibold text-center mt-1">
                We build revenue assets.
              </p>
              <div className="absolute inset-0 blur-xl bg-orange-500/20 -z-10 rounded-xl"></div>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="grid gap-4">
          {objections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group flex items-center justify-center gap-4 p-5 rounded-xl bg-[#0f172a] border border-gray-800 hover:border-orange-400/40 transition"
            >
              {/* Icon */}
              <div className="p-2.5 rounded-lg bg-orange-600/20 group-hover:bg-orange-600/30 transition">
                <item.icon className="w-5 h-5 text-orange-400" />
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm text-left w-full">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Highlight */}
     
    </section>
  );
};

export default SkepticismSection;