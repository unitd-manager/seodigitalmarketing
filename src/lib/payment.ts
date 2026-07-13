export type PaymentProvider = "razorpay";

export const DEFAULT_PAYMENT_PROVIDER: PaymentProvider = "razorpay";

export const RAZORPAY_PAYMENT_LINKS: Record<string, string> = {
  "seo-basic": "https://rzp.io/rzp/dIi6MbA",
  "seo-professional": "https://rzp.io/rzp/lfGjkJDJ",
  "seo-premium": "https://rzp.io/rzp/jmis3cfv",
  "linkedin-branding": "https://rzp.io/rzp/ckW81wm",
  "social-media": "https://rzp.io/rzp/bVanEIta",
  "performance-marketing": "https://rzp.io/rzp/eIqS2QP",
  //default: "https://rzp.io/i/seo-digital-marketing",
};

export const getPaymentProvider = (_provider?: string | null): PaymentProvider => {
  return DEFAULT_PAYMENT_PROVIDER;
};

export const getRazorpayPaymentLink = (items: Array<{ id: string; name: string }> = []) => {
  const firstItem = items.find((item) => Boolean(item.id));
  const normalizedId = firstItem?.id?.trim().toLowerCase();
  const configuredLink = normalizedId ? RAZORPAY_PAYMENT_LINKS[normalizedId] : undefined;
  return configuredLink || RAZORPAY_PAYMENT_LINKS.default;
};

export const getPaymentButtonLabel = (
  _provider: PaymentProvider,
  amount: number,
  currency = "INR"
) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });

  return `Pay ${formatter.format(amount)} with Razorpay`;
};
