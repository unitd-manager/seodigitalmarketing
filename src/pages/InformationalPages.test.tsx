import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";

describe("informational routes", () => {
  afterEach(() => {
    cleanup();
  });

  const renderRoute = (path: string) => {
    window.history.pushState({}, "", path);
    render(<App />);
  };

  it("renders privacy policy and other legal pages", () => {
    renderRoute("/privacy-policy");
    expect(screen.getByRole("heading", { name: "Privacy Policy" })).toBeInTheDocument();

    renderRoute("/terms-and-conditions");
    expect(screen.getByRole("heading", { name: "Terms & Conditions" })).toBeInTheDocument();

    renderRoute("/privacy-policy");
    expect(screen.getByText(/Effective Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Company Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Payment Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Third-Party Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Rights/i)).toBeInTheDocument();
    expect(screen.getByText(/Changes to this Privacy Policy/i)).toBeInTheDocument();

    renderRoute("/refund-policy");
    expect(screen.getByRole("heading", { name: "Refund Policy" })).toBeInTheDocument();

    renderRoute("/contact");
    expect(screen.getByRole("heading", { name: "Contact Us" })).toBeInTheDocument();

    renderRoute("/about");
    expect(screen.getByRole("heading", { name: "About Us" })).toBeInTheDocument();
  });
});
