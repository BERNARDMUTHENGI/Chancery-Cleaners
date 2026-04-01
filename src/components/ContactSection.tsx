import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/config/business";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contact us today for a free quote. We're always happy to discuss your cleaning needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              icon: Phone,
              label: "Phone",
              value: config.phone,
              href: `tel:${config.phone.replace(/\s/g, "")}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: config.email,
              href: `mailto:${config.email}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: config.address,
              href: "#",
            },
            {
              icon: Clock,
              label: "Hours",
              value: config.hours,
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-card rounded-xl p-6 text-center border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {item.label}
              </div>
              <div className="text-sm font-medium text-foreground">
                {item.value}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base font-semibold px-8">
              <a href={`tel:${config.phone.replace(/\s/g, "")}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
            {config.socialLinks.whatsapp && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base font-semibold px-8"
              >
                <a href={config.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
