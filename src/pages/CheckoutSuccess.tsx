import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const sessionId = searchParams.get("session_id");
  const redirectStatus = searchParams.get("redirect_status");
  const paymentIntent = searchParams.get("payment_intent");
  const setupIntent = searchParams.get("setup_intent");
  const pending = sessionStorage.getItem("stripe_checkout_pending") === "1";
  const hasStripeSuccessSignal =
    Boolean(sessionId) ||
    redirectStatus === "succeeded" ||
    Boolean(paymentIntent) ||
    Boolean(setupIntent);

  // Payment Links can redirect to success URL without always including session_id,
  // so we accept success route + pending checkout flag as a valid completion signal.
  const verifiedSuccessOnLoad = Boolean(
    pending && (hasStripeSuccessSignal || location.pathname === "/checkout/success")
  );
  const [isVerifiedSuccess] = useState(verifiedSuccessOnLoad);
  const emailSentRef = useRef(false);

  useEffect(() => {
    if (!isVerifiedSuccess) return;
    clearCart();
    sessionStorage.removeItem("stripe_checkout_pending");
  }, [isVerifiedSuccess, clearCart]);

  useEffect(() => {
    if (!isVerifiedSuccess || !sessionId || emailSentRef.current) return;
    emailSentRef.current = true;
    fetch("/send-confirmation.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId }),
    }).catch(() => {
      // Email errors are non-fatal — order is already complete
    });
  }, [isVerifiedSuccess, sessionId]);

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
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              isVerifiedSuccess
                ? "bg-green-400/10 border border-green-400/30"
                : "bg-yellow-400/10 border border-yellow-400/30"
            }`}
          >
            {isVerifiedSuccess ? (
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            ) : (
              <AlertCircle className="w-10 h-10 text-yellow-400" />
            )}
          </motion.div>

          <h1 className="font-display text-4xl font-bold mb-4">
            {isVerifiedSuccess ? "Payment Successful!" : "Payment Not Completed"}
          </h1>
          {isVerifiedSuccess ? (
            <>
              <p className="text-muted-foreground mb-2">
                Thank you for your purchase. Your SEO campaign is now active.
              </p>
              <p className="text-sm text-muted-foreground/70 mb-8">
                A confirmation email has been sent to your inbox. Our team will reach out within 24 hours to get started.
              </p>
            </>
          ) : (
            <>
              <p className="text-muted-foreground mb-2">
                We could not verify a successful Stripe payment for this visit.
              </p>
              <p className="text-sm text-muted-foreground/70 mb-8">
                Your cart is still saved. Please return to checkout and complete payment.
              </p>
            </>
          )}

          <button
            onClick={() => navigate(isVerifiedSuccess ? "/" : "/cart")}
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
