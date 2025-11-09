import { Rocket, Users, Target, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality, ensuring your business stays ahead of the competition.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our talented developers and designers bring years of experience to every project, delivering excellence consistently.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We focus on measurable outcomes that matter to your business, from increased conversions to better user engagement.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Count on our dedicated support team to assist you whenever you need help, ensuring smooth operations always.",
  },
];

export default function FeatureBenefits() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-benefits-title">
              Why Choose Moniva Snap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-benefits-subtitle">
              We're committed to delivering exceptional value and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
                data-testid={`card-benefit-${index}`}
              >
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl font-semibold" data-testid={`text-benefit-title-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-benefit-desc-${index}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
