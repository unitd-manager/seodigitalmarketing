import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-32 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </motion.div>

          <h1 className="font-display text-4xl font-bold mb-4">
            Payment Successful!
          </h1>
          <p className="text-muted-foreground mb-2">
            Thank you for your purchase. Your SEO campaign is now active.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            A confirmation email has been sent to your inbox. Our team will reach out within 24 hours to get started.
          </p>

          <button
            onClick={() => navigate("/")}
            className="glow-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
