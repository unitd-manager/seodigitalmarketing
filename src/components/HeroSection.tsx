import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const stats = [
  { value: "100+", label: "US Businesses Served" },
  { value: "+187%", label: "Average Traffic Growth" },
  { value: "92%", label: "Client Retention" },
  { value: "4:1", label: "Average ROI" },
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  
};

    
  return (
    <section
    id="about"
    className="relative w-full pt-8 pb-16 overflow-hidden hero-section"
  > 
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="section-container w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              #1 Revenue-Focused SEO Agency
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              Stop Being Invisible on Google.{" "}
              <span className="gradient-text">
                Turn Search Traffic Into Predictable Revenue.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              If your competitors rank above you, they're taking your customers. We help US businesses dominate page one using revenue-focused SEO strategies designed to generate measurable ROI.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full">

  {/* FIRST BUTTON - Opens Form in New Tab */}
  <a
  href="/seo-form.html"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-primary text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
>
  Get My Free SEO Growth Blueprint
</a>
  {/* SECOND BUTTON - Next to First */}
  <a
  href="https://calendar.app.google/FR6cLZASpaqTPHRV6"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex  items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-secondary transition-colors whitespace-nowrap w-full sm:w-auto"
>
  Book a Session
</a>

</div>
            {/* POPUP FORM */}
            {open && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                
                <div className="bg-[#0f172a] text-white p-6 rounded-2xl w-[380px] relative shadow-xl">

                  {/* CLOSE */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-4 text-xl"
                  >
                    ×
                  </button>

                  <h3 className="text-lg font-semibold mb-4">
                    Get Your Free SEO Audit Report
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="p-3 rounded text-black"
                    />

                    <input
                      name="website"
                      type="text"
                      placeholder="Website URL"
                      required
                      className="p-3 rounded text-black"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="p-3 rounded text-black"
                    />

                    <button
                      type="submit"
                      className="bg-yellow-500 text-black py-2 rounded font-semibold"
                    >
                      Get My Report
                    </button>

                  </form>
                </div>
              </div>
            )}

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="gradient-card rounded-2xl p-8 lg:p-10"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;