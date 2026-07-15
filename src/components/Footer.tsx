import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="section-container flex flex-col gap-8 lg:flex-row lg:justify-between">
      <div className="max-w-sm">
        <p className="font-display font-semibold text-foreground">United Technologies Solutions</p>
        <p className="mt-2 text-sm text-muted-foreground">Digital Marketing & SEO Services</p>
        <p className="mt-1 text-sm text-muted-foreground">India</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        {footerLinks.map((link) => (
          <Link key={link.href} to={link.href} className="transition-colors hover:text-primary">
            {link.label}
          </Link>
        ))}
      </div>
    </div>

    <div className="section-container mt-8 border-t border-border/60 pt-6">
      <p className="text-sm text-muted-foreground">
        © 2026 United Technologies Solutions. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
