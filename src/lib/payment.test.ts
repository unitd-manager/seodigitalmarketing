import { describe, expect, it } from "vitest";
import { getPaymentProvider, getPaymentButtonLabel, getRazorpayPaymentLink, RAZORPAY_PAYMENT_LINKS } from "./payment";

describe("payment provider helpers", () => {
  it("returns the Razorpay provider", () => {
    expect(getPaymentProvider("razorpay")).toBe("razorpay");
    expect(getPaymentProvider(undefined)).toBe("razorpay");
  });

  it("returns a Razorpay payment link for a package", () => {
    expect(getRazorpayPaymentLink([{ id: "seo-basic", name: "SEO Basic" }])).toContain("seo-basic");
    expect(getRazorpayPaymentLink([{ id: "unknown", name: "Unknown" }])).toBe(RAZORPAY_PAYMENT_LINKS.default);
  });

  it("formats the checkout button label", () => {
    expect(getPaymentButtonLabel("razorpay", 1500, "INR")).toBe("Pay ₹1,500.00 with Razorpay");
  });
});
