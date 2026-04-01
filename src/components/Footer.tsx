import config from "@/config/business";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-background mb-3">
              {config.name}
            </h3>
            <p className="text-sm text-background/60 leading-relaxed">
              {config.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "Services", "About", "Reviews", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-3 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>{config.phone}</p>
              <p>{config.email}</p>
              <p>{config.address}</p>
              <p>{config.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {year} {config.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
