import { Star } from "lucide-react";
import config from "@/config/business";

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(config.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted"
                }`}
              />
            ))}
            <span className="text-lg font-bold text-foreground ml-2">
              {config.rating}
            </span>
            <span className="text-muted-foreground">
              ({config.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {config.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 border border-border shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {review.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
