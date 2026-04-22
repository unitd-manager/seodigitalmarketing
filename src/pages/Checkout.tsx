import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Lock, ArrowLeft, CreditCard, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart, type CartItem } from "@/context/CartContext";
import { STRIPE_PAYMENT_LINKS } from "@/config/stripe";

// Check if all payment links are configured
const paymentLinksConfigured = !Object.values(STRIPE_PAYMENT_LINKS).some((v) =>
  v.includes("REPLACE_WITH")
);

interface BillingForm {
  name: string;
  email: string;
  company: string;
  country: string;
}

type CheckoutState = {
  buyNowItem?: Omit<CartItem, "quantity">;
};

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const buyNowItem = (location.state as CheckoutState | null)?.buyNowItem;
  const checkoutItems: CartItem[] = buyNowItem ? [{ ...buyNowItem, quantity: 1 }] : items;
  const checkoutTotal = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState<BillingForm>({
    name: "",
    email: "",
    company: "",
    country: "US",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email before continuing.");
      return;
    }

    if (!paymentLinksConfigured) {
      setError(
        "Payment Links are not configured yet. Please add your Stripe Payment Links to src/config/stripe.ts."
      );
      return;
    }

    // Redirect to Stripe payment page for the first item in checkout.
    const firstItem = checkoutItems[0];
    const linkKey = firstItem?.id as keyof typeof STRIPE_PAYMENT_LINKS;
    const paymentUrl = STRIPE_PAYMENT_LINKS[linkKey];

    if (!paymentUrl) {
      setError("Could not find a payment link for the selected package.");
      return;
    }

    const url = new URL(paymentUrl);
    url.searchParams.set("prefilled_email", form.email);

    // Tell Stripe where to redirect after successful payment
    const successUrl = `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
    url.searchParams.set("success_url", successUrl);

    // Used by the success page to ensure cart clears only after verified success.
    sessionStorage.setItem("stripe_checkout_pending", "1");

    window.location.href = url.toString();
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-28 pb-32 flex items-center justify-center">
          <div className="text-center">
            <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold mb-2">Cart is empty</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Add a package first before checking out.
            </p>
            <button
              onClick={() => navigate("/packages")}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm"
            >
              Browse Packages
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-32" ref={ref}>
        <div className="section-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate(buyNowItem ? "/packages" : "/cart")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {buyNowItem ? "Back to Packages" : "Back to Cart"}
            </button>

            <h1 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <Lock className="w-7 h-7 text-primary" />
              Secure Checkout
            </h1>

            {/* Setup instructions banner */}
            {!paymentLinksConfigured && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-5 mb-6 text-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <p className="font-semibold text-yellow-300">
                    Action required: Add your Stripe Payment Links
                  </p>
                </div>
                <ol className="text-yellow-200/80 space-y-1.5 pl-8 list-decimal">
                  <li>
                    Go to{" "}
                    <a
                      href="https://dashboard.stripe.com/payment-links"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline inline-flex items-center gap-1 hover:text-yellow-200"
                    >
                      Stripe Dashboard → Payment Links
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>Create one Payment Link per package — set each as a <strong>subscription</strong></li>
                  <li>Copy each <code className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-xs">https://buy.stripe.com/…</code> URL</li>
                  <li>Paste them into <code className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-xs">src/config/stripe.ts</code> under <code className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-xs">STRIPE_PAYMENT_LINKS</code></li>
                </ol>
              </motion.div>
            )}

            <div className="grid md:grid-cols-5 gap-8">
              {/* Billing form */}
              <form
                onSubmit={handleCheckout}
                className="md:col-span-3 space-y-5"
              >
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-semibold text-base mb-5 text-foreground">
                    Billing Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5" htmlFor="company">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp (optional)"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-muted-foreground mb-1.5" htmlFor="country">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary/60 transition"
                      >
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IN">India</option>
                        <option value="SG">Singapore</option>
                        <option value="AE">UAE</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <h2 className="font-semibold text-base text-foreground">
                      Payment
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You will be securely redirected to Stripe's hosted payment page to complete your purchase. We never store your card details.
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-red-500/40 bg-red-500/10"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">{error}</p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="glow-button w-full bg-primary text-primary-foreground py-4 px-8 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-primary/90 transition-all"
                >
                  <Lock className="w-5 h-5" />
                  Pay ${checkoutTotal.toLocaleString()} / mo with Stripe
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </button>
              </form>

              {/* Order summary sidebar */}
              <div className="md:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6 sticky top-28">
                  <h2 className="font-display font-bold text-base mb-5">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-4">
                    {checkoutItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} Plan × {item.quantity}
                        </span>
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-5">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-primary text-lg">
                        ${checkoutTotal.toLocaleString()} / mo
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Recurring monthly subscription
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                      256-bit SSL encryption
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                      PCI DSS compliant via Stripe
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                      30-day money-back guarantee
                    </div> */}
                    {/* <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                      Cancel subscription anytime
                    </div> */}
                  </div>

                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground/60 text-center">
                      Powered by{" "}
                      <span className="text-muted-foreground font-medium">Stripe</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
