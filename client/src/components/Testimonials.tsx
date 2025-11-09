import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Moniva Snap transformed our online presence completely. The website they built is not only beautiful but also drives real business results.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    rating: 5,
  },
  {
    quote: "Working with this team was an absolute pleasure. They understood our vision and delivered beyond our expectations, on time and within budget.",
    author: "Michael Chen",
    role: "Founder, GrowthLabs",
    rating: 5,
  },
  {
    quote: "The attention to detail and dedication to quality is unmatched. Our new platform has increased user engagement by 150% in just three months.",
    author: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-testimonials-subtitle">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
