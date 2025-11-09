import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Palette, Code, Smartphone, Zap } from "lucide-react";

const services = [
  {
    id: "web-design",
    title: "Web Design & UI/UX",
    icon: Palette,
    description: "We create stunning, user-centric designs that captivate your audience and drive engagement. Our design process focuses on understanding your users' needs and crafting intuitive interfaces that deliver exceptional experiences across all devices.",
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    description: "From simple landing pages to complex web applications, we build robust, scalable solutions using the latest technologies. Our development approach ensures clean code, optimal performance, and seamless functionality that meets your business objectives.",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications that deliver outstanding user experiences. We develop iOS and Android apps that are fast, reliable, and perfectly aligned with your brand identity and business goals.",
  },
  {
    id: "optimization",
    title: "Performance & SEO",
    icon: Zap,
    description: "Maximize your online visibility and site performance with our optimization services. We implement best practices for search engine optimization, improve loading speeds, and ensure your website ranks higher and performs better.",
  },
];

export default function ServicesAccordion() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-services-subtitle">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" defaultValue="web-design">
            {services.map((service) => (
              <AccordionItem key={service.id} value={service.id} data-testid={`accordion-service-${service.id}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-primary" />
                    <span className="font-serif text-xl font-medium">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8 pt-2">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
