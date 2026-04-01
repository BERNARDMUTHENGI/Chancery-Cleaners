import { Building2, Home, Shield, Factory } from "lucide-react";
import config from "@/config/business";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Home,
  Shield,
  Factory,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From homes to industrial facilities, we deliver spotless results with
            eco-friendly products and trained professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
