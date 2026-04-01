import { CheckCircle2 } from "lucide-react";
import config from "@/config/business";

const highlights = [
  "Registered & Licensed Company",
  "Eco-Friendly Products",
  "Trained & Vetted Professionals",
  "On-Time Project Completion",
  "Commercial & Residential",
  "Competitive Pricing",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose {config.name.split(" ")[0]}?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {config.about}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: `${config.rating}`, label: "Customer Rating", suffix: "★" },
              { value: `${config.reviewCount}+`, label: "Happy Clients", suffix: "" },
              { value: config.yearFounded ? `${new Date().getFullYear() - parseInt(config.yearFounded)}+` : "5+", label: "Years Experience", suffix: "" },
              { value: "100%", label: "Satisfaction", suffix: "" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 text-center border border-border shadow-sm"
              >
                <div className="text-3xl font-extrabold text-primary mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
