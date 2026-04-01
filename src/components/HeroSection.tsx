import { Phone, MapPin, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/config/business";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt={`${config.name} professional cleaning team`}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-primary-foreground font-semibold">{config.rating}</span>
            <span className="text-primary-foreground/80 text-sm">
              ({config.reviewCount} reviews)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {config.tagline}
          </h1>

          <p className="text-lg text-primary-foreground/85 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {config.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="text-base font-semibold px-8">
              <a href={`tel:${config.phone.replace(/\s/g, "")}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {config.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base font-semibold px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>

          {/* Quick info */}
          <div className="flex flex-col sm:flex-row gap-4 text-primary-foreground/80 text-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {config.areasServed}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {config.hours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
