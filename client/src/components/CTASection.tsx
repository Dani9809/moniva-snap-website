import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold" data-testid="text-cta-title">
            Let's Talk About Your Project!
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl" data-testid="text-cta-subtitle">
            Ready to bring your vision to life? Get in touch with us today and let's create something amazing together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8"
              data-testid="button-cta"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
