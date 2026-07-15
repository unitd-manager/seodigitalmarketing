import { useEffect, useRef } from "react";

interface RazorpayPaymentButtonProps {
  paymentButtonId: string;
}

const RazorpayPaymentButton = ({ paymentButtonId }: RazorpayPaymentButtonProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", paymentButtonId);
    script.async = true;
    form.appendChild(script);

    return () => {
      if (form.contains(script)) form.removeChild(script);
    };
  }, [paymentButtonId]);

  return <form ref={formRef} />;
};

export default RazorpayPaymentButton;
