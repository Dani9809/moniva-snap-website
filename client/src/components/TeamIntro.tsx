export default function TeamIntro() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-team-intro-title">
            Meet the Team Behind Moniva Snap
          </h1>
          <div className="flex flex-col gap-6 text-lg text-muted-foreground">
            <p data-testid="text-team-intro-p1">
              We're a passionate group of designers, developers, and digital strategists who believe in the power of great design and clean code. Founded in 2020, Moniva Snap has grown from a small startup to a trusted partner for businesses worldwide.
            </p>
            <p data-testid="text-team-intro-p2">
              Our mission is simple: to create digital experiences that not only look beautiful but also drive real business results. We combine creativity with technical excellence to deliver solutions that exceed expectations.
            </p>
            <p data-testid="text-team-intro-p3">
              Every project we take on is a collaboration, and we're committed to understanding your unique needs and goals. Together, we'll build something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
