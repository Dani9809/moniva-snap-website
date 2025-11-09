import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_code_editor_screenshot_8194607e.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-title">
                Crafting Digital Experiences That Matter
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" data-testid="text-hero-subtitle">
                We transform ideas into beautiful, functional websites that drive results. Your vision, our expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-start-project">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#projects">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-work">
                  <Play className="h-4 w-4" />
                  View Our Work
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border shadow-lg hover-elevate transition-transform duration-300">
              <img
                src={heroImage}
                alt="Modern code editor workspace"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
