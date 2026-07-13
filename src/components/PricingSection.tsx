import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ShoppingCart, Zap, TrendingUp, Crown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const packages = [
{
  id: "seo-basic",
  name: "SEO Basic",
  tagline: "Starter SEO growth package",
  price: 300,
  billing: "monthly" as const,
  icon: Zap,
  color: "from-blue-500/20 to-blue-600/10",
  border: "border-blue-500/30 hover:border-blue-500/60",
  badge: null,
  features: [
    "2–10 Keywords",
    "10 SEO Articles",
    "Backlink Analysis",
    "Meta Tag Optimization",
    "Google Analytics Setup",
    "Directory Submissions",
    "Basic SEO Reports",
    "Email & Chat Support",
  ],
  notIncluded: [],
},

{
  id: "seo-professional",
  name: "SEO Professional",
  tagline: "Scaled SEO growth",
  price: 700,
  billing: "monthly" as const,
  icon: TrendingUp,
  color: "from-primary/20 to-primary/10",
  border: "border-primary/60 hover:border-primary",
  badge: "Most Popular",
  features: [
    "5–25 Keywords",
    "20 SEO Articles",
    "Advanced Backlink Analysis",
    "Enhanced On-Page SEO",
    "Google Analytics Monitoring",
    "High Authority Directories",
    "Detailed SEO Reports",
    "Priority Support",
  ],
  notIncluded: [],
},

{
  id: "seo-premium",
  name: "SEO Premium",
  tagline: "High-scale SEO domination",
  price: 1500,
  billing: "monthly" as const,
  icon: Crown,
  color: "from-purple-500/20 to-purple-600/10",
  border: "border-purple-500/30 hover:border-purple-500/60",
  badge: "Best Results",
  features: [
    "10–50 Keywords",
    "30 SEO Articles",
    "Deep Keyword Research",
    "Advanced Technical SEO",
    "Goal/Event Tracking",
    "Premium Directory Listings",
    "Executive SEO Reports",
    "comprehensive Recorded Reporting",
  ],
  notIncluded: [],
},
{
  id: "linkedin-branding",
  name: "LinkedIn Branding",
  tagline: "Thought leadership & target outreach",
  price: 240,
  billing: "monthly" as const,
  icon: TrendingUp,
  color: "from-blue-400/20 to-cyan-500/10",
  border: "border-cyan-500/30 hover:border-cyan-500/60",
  badge: null,
  features: [
  "Profile Audit & SEO Optimization",
  "12 Custom Content Posts / Month",
  "Carousels, Polls & Infographics",
  "Daily Industry Group Engagement",
  "Dedicated Network Expansion",
  "Competitor & ICP Lead Targeting",
  "50–100 Connection Requests",
  "Monthly Analytics & Strategy Reports",
],
  notIncluded: [],
},

{
  id: "social-media",
  name: "Social Media Marketing",
  tagline: "Multi-platform organic brand growth",
  price: 240,
  billing: "monthly" as const,
  icon: Zap,
  color: "from-pink-500/20 to-orange-500/10",
  border: "border-pink-500/30 hover:border-pink-500/60",
  badge: null,
  features: [
  "20 Custom Graphic Posts",
  "Facebook & Instagram Management",
  "Story & Highlights Publishing",
  "Monthly Hashtag Research",
  "Basic Customer Inbox Replies",
  "2 Profile Cover Designs / Month",
  "Account & Competitor Audit",
  "Automated Post Scheduling",
],
  notIncluded: [],
},

{
  id: "performance-marketing",
  name: "Performance Marketing",
  tagline: "ROI-focused targeted ad campaigns",
  price: 135,
  billing: "monthly" as const,
  icon: Crown,
  color: "from-green-500/20 to-emerald-600/10",
  border: "border-green-500/30 hover:border-green-500/60",
  badge: "High ROI",
  features: [
  "Meta & Google Ads Management",
  "Dynamic Retargeting Setup",
  "Up to 3 Active Campaigns",
  "6 Ad Sets Optimization",
  "Management of 45 Active Ads",
  "Creative Strategy Planning",
  "Ad Copywriting & A/B Testing",
  "Performance Forecast Reports",
],
  notIncluded: [],
}
];

const PricingSection = () => {
  const { addToCart, cartCount, items } = useCart();
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleAddToCart = (pkg: (typeof packages)[0]) => {
    addToCart({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      billing: pkg.billing,
      priceId: "",
    });
  };

  const handleBuyNow = (pkg: (typeof packages)[0]) => {
    navigate("/checkout", {
      state: {
        buyNowItem: {
          id: pkg.id,
          name: pkg.name,
          price: pkg.price,
          billing: pkg.billing,
          priceId: "",
        },
      },
    });
  };

  return (
    <section id="pricing" className="py-6 lg:py-12" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Pricing Plans
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
            Choose Your{" "}
            <span className="gradient-text">Growth Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, results-driven SEO packages. No hidden fees, no long-term contracts required. Cancel anytime.
          </p>

          {cartCount > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => navigate("/cart")}
              className="mt-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/40 text-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/20 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              View Cart ({cartCount} item{cartCount > 1 ? "s" : ""})
            </motion.button>
          )}
        </motion.div>

        {/* Pricing cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            const isAdded = items.some((item) => item.id === pkg.id);
            const isPopular = pkg.badge === "Most Popular";

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-2xl border bg-card ${pkg.border} transition-all duration-300 ${
                  isPopular ? "ring-2 ring-primary/40 md:scale-105" : ""
                }`}
              >
                {pkg.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                      isPopular
                        ? "bg-primary text-primary-foreground"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Card header */}
                <div className={`p-6 rounded-t-2xl bg-gradient-to-br ${pkg.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-background/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{pkg.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-display font-extrabold text-foreground">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground mb-1">/ mo</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                    {pkg.notIncluded.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground/50 line-through"
                      >
                        <span className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground/30">
                          ✕
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    {/* <button
                      onClick={() => handleBuyNow(pkg)}
                      className={`w-full py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                        isPopular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-button"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      Buy Now
                      <ArrowRight className="w-4 h-4" />
                    </button> */}

                    <button
                      onClick={() => handleAddToCart(pkg)}
                      disabled={isAdded}
                      className={`w-full py-3 px-6 rounded-xl text-sm font-semibold border transition-all duration-200 flex items-center justify-center gap-2 ${
                        isAdded
                          ? "cursor-not-allowed border-green-500 text-green-400 bg-green-500/10"
                          : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {isAdded ? "Already in Cart ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-muted-foreground"
        >
          {[
            "✓ No setup fees",
            "✓ Secure payment via Razorpay",
            "✓ Results guaranteed"
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-6 px-4 py-2  roundedfull text-sm  borner border-border">{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
