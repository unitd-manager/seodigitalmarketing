import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type InfoSection = {
  heading: string;
  content: ReactNode;
};

type InformationalPageProps = {
  title: string;
  intro: string;
  sections: InfoSection[];
};

const InformationalPage = ({ title, intro, sections }: InformationalPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <div className="section-container max-w-5xl">
          <div className="mb-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-sm text-muted-foreground">
              United Technologies Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Looking for our services? <Link to="/" className="font-semibold text-primary hover:underline">Return to the homepage</Link>.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.heading} className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <div className="mt-4 space-y-3 text-base leading-7 text-muted-foreground">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const PrivacyPolicyPage = () => (
  <InformationalPage
    title="Privacy Policy"
    intro="This Privacy Policy explains how United Technologies Solutions collects, uses, and protects personal information when you visit our websites or engage with our SEO and digital marketing services."
    sections={[
      {
        heading: "Effective Date",
        content: (
          <div className="space-y-2">
            <p><strong>Effective Date:</strong> 13 July 2026</p>
            <p><strong>Last Updated:</strong> 13 July 2026</p>
          </div>
        ),
      },
      {
        heading: "Company Information",
        content: (
          <div className="space-y-2">
            <p><strong>United Technologies Solutions</strong></p>
            <p>Email: <a className="text-primary underline" href="mailto:admin@unitdtechnologies.com">admin@unitdtechnologies.com</a></p>
            <p>Phone: <a className="text-primary underline" href="tel:+919444207357">+91 94442 07357</a></p>
            <p>Website: <a className="text-primary underline" href="https://seo.unitdtechnologies.com">https://seo.unitdtechnologies.com</a></p>
          </div>
        ),
      },
      {
        heading: "Information We Collect",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>Name, email address, and phone number provided through consultation forms or direct communication.</li>
            <li>Project-related information needed to provide SEO, digital marketing, and website services.</li>
            <li>Website usage information such as browser details, cookies, and interaction data.</li>
          </ul>
        ),
      },
      {
        heading: "How We Use Your Information",
        content: (
          <p>
            We use the information you provide to respond to inquiries, discuss service requirements, deliver digital marketing work, improve website performance, and communicate updates related to your project. We do not sell or rent your personal information to third parties.
          </p>
        ),
      },
      {
        heading: "Payment Information",
        content: (
          <p>
            Online payments are securely processed through trusted payment gateway providers. We do not store customers' debit card, credit card, or banking information on our servers.
          </p>
        ),
      },
      {
        heading: "Websites Covered",
        content: (
          <p>
            This policy applies to <a className="text-primary underline" href="https://seo.unitdtechnologies.com">https://seo.unitdtechnologies.com</a>.
          </p>
        ),
      },
      {
        heading: "Third-Party Services",
        content: (
          <p>
            We may use trusted third-party services such as payment gateways, website analytics, email services, and cloud hosting providers to deliver our services.
          </p>
        ),
      },
      {
        heading: "Cookies and Analytics",
        content: (
          <p>
            Our websites may use cookies and analytics tools to understand visitor behavior, improve user experience, and measure campaign effectiveness. You can disable cookies in your browser settings if you prefer.
          </p>
        ),
      },
      {
        heading: "Data Security",
        content: (
          <p>
            We take reasonable steps to protect personal information from unauthorized access, disclosure, or misuse. However, no online transmission or storage system can be guaranteed to be 100% secure.
          </p>
        ),
      },
      {
        heading: "Children's Privacy",
        content: (
          <p>
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
          </p>
        ),
      },
      {
        heading: "Your Rights",
        content: (
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us at <a className="text-primary underline" href="mailto:admin@unitdtechnologies.com">admin@unitdtechnologies.com</a>.
          </p>
        ),
      },
      {
        heading: "Changes to this Privacy Policy",
        content: (
          <p>
            We may update this Privacy Policy from time to time. The latest version will always be available on this page.
          </p>
        ),
      },
      {
        heading: "Contact Us",
        content: (
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a className="text-primary underline" href="mailto:admin@unitdtechnologies.com">admin@unitdtechnologies.com</a>.
          </p>
        ),
      },
    ]}
  />
);

export const TermsAndConditionsPage = () => (
  <InformationalPage
    title="Terms & Conditions"
    intro="These Terms & Conditions define the relationship between United Technologies Solutions and its clients for SEO, digital marketing, branding, website development, and related services."
    sections={[
      {
        heading: "Services Offered",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>SEO strategy and implementation</li>
            <li>Digital marketing and performance campaigns</li>
            <li>Social media marketing</li>
            <li>LinkedIn branding and professional positioning</li>
            <li>Website development and optimization</li>
          </ul>
        ),
      },
      {
        heading: "Service Delivery",
        content: (
          <p>
            Project timelines depend on the agreed scope of work. SEO and digital marketing services are delivered according to the selected package and project schedule.
          </p>
        ),
      },
      {
        heading: "Payment Terms",
        content: (
          <p>
            Fees for services are agreed in writing before work begins. Any project milestones, retainers, or one-time service fees are payable according to the agreed schedule. Delayed payments may result in temporary suspension of ongoing work.
          </p>
        ),
      },
      {
        heading: "Client Responsibilities",
        content: (
          <p>
            Clients are expected to provide accurate information, timely approvals, access to required accounts, and clear communication throughout the engagement. Delays caused by incomplete information may affect deadlines and deliverables.
          </p>
        ),
      },
      {
        heading: "Intellectual Property",
        content: (
          <p>
            Deliverables created specifically for the client remain the property of the client upon full payment, unless otherwise stated in a written agreement. United Technologies Solutions retains ownership of general methods, frameworks, and pre-existing materials.
          </p>
        ),
      },
      {
        heading: "Limitation of Liability",
        content: (
          <p>
            United Technologies Solutions shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific service in question.
          </p>
        ),
      },
    ]}
  />
);

export const RefundPolicyPage = () => (
  <InformationalPage
    title="Refund Policy"
    intro="Our refund policy is designed to be transparent and fair while reflecting the nature of digital services and the work involved in delivering them."
    sections={[
      {
        heading: "General Approach",
        content: (
          <p>
            Refund requests are reviewed on a case-by-case basis. Once work has commenced or digital services have been delivered, payments are generally non-refundable unless otherwise agreed in writing.
          </p>
        ),
      },
      {
        heading: "Project Work in Progress",
        content: (
          <p>
            If a project has already begun, any work completed or resources used may not be refundable. We will make every effort to discuss alternatives such as partial service adjustments or milestone-based solutions.
          </p>
        ),
      },
      {
        heading: "Cancellation Before Commencement",
        content: (
          <p>
            If a client requests cancellation before work begins, we may consider a refund or credit depending on the circumstances and the stage of onboarding.
          </p>
        ),
      },
      {
        heading: "Processing Time",
        content: (
          <p>
            Approved refunds are processed within 7-10 business days through the original payment method.
          </p>
        ),
      },
      {
        heading: "How to Request a Refund",
        content: (
          <p>
            Please contact us at <a className="text-primary underline" href="mailto:admin@unitdtechnologies.com">admin@unitdtechnologies.com</a> with your project details and the reason for your request. We will review it promptly and respond with the next steps.
          </p>
        ),
      },
    ]}
  />
);

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(true);
  };

  return (
    <InformationalPage
      title="Contact Us"
      intro="We are happy to discuss your business goals, digital growth challenges, and the services that could support your next stage of growth."
      sections={[
        {
          heading: "Get in Touch",
          content: (
            <div className="space-y-3">
              <p><strong>Company:</strong> United Technologies Solutions</p>
              <p><strong>Email:</strong> <a className="text-primary underline" href="mailto:admin@unitdtechnologies.com">admin@unitdtechnologies.com</a></p>
              <p><strong>Phone:</strong> <a className="text-primary underline" href="tel:+919444207357">+91 94442 07357</a></p>
              <p><strong>Business Address:</strong></p>
              <p>United Technologies Solutions</p>
              <p>Chennai, Tamil Nadu</p>
              <p>India</p>
            </div>
          ),
        },
        {
          heading: "Contact Form",
          content: (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-border bg-background px-4 py-3" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required />
                <input className="rounded-xl border border-border bg-background px-4 py-3" placeholder="Your email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <input className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
              <textarea className="min-h-32 w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="How can we help?" name="message" value={formData.message} onChange={handleChange} required />
              <button type="submit" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">
                Send Message
              </button>
              {submitted && (
                <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600">
                  Thank you! Your message has been received. We will get back to you soon.
                </p>
              )}
              <p className="text-sm text-muted-foreground">This form now provides immediate feedback and clears the fields after submission.</p>
            </form>
          ),
        },
      ]}
    />
  );
};

export const AboutPage = () => (
  <InformationalPage
    title="About Us"
    intro="United Technologies Solutions is a digital growth partner focused on helping businesses improve visibility, generate qualified leads, and build stronger online presence."
    sections={[
      {
        heading: "Who We Are",
        content: (
          <p>
            We are a team of digital marketing and technology specialists supporting businesses with SEO, online branding, content strategy, and website solutions. Our focus is on practical growth that aligns with business goals.
          </p>
        ),
      },
      {
        heading: "Experience and Expertise",
        content: (
          <p>
            With years of experience in digital marketing, search visibility, and growth strategy, we combine analytical thinking with execution to deliver measurable improvement for our clients.
          </p>
        ),
      },
      {
        heading: "Services We Provide",
        content: (
          <ul className="list-disc space-y-2 pl-5">
            <li>SEO and technical optimization</li>
            <li>Performance marketing and campaign planning</li>
            <li>Social media marketing and LinkedIn branding</li>
            <li>Website development and digital presence strategy</li>
          </ul>
        ),
      },
      {
        heading: "Countries We Serve",
        content: (
          <p>
            We provide SEO and digital marketing services to businesses in India, United States, United Kingdom, Canada, Australia, Europe, UAE, Singapore and other international markets.
          </p>
        ),
      },
      {
        heading: "Why Choose Us",
        content: (
          <p>
            Clients choose United Technologies Solutions for transparent communication, strategic thinking, tailored execution, and a results-focused approach to digital growth.
          </p>
        ),
      },
    ]}
  />
);

export default InformationalPage;
