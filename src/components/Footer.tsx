const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xs">
          R
        </div>
        <span className="font-display font-semibold text-foreground">RankDominance</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} RankDominance. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
