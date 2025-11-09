import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ecommerceImg from "@assets/generated_images/E-commerce_project_showcase_60d16abb.png";
import bankingImg from "@assets/generated_images/Banking_app_project_55c3cca4.png";
import dashboardImg from "@assets/generated_images/Dashboard_project_showcase_a37ae29c.png";

const projects = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    description: "A fully responsive online store with seamless checkout experience and inventory management system.",
    image: ecommerceImg,
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 2,
    title: "Banking Mobile App",
    description: "Secure mobile banking solution with real-time transactions and intuitive financial management.",
    image: bankingImg,
    tags: ["React Native", "TypeScript", "MongoDB"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Enterprise-grade analytics platform with real-time data visualization and comprehensive reporting.",
    image: dashboardImg,
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="py-16 md:py-24 bg-card text-card-foreground" id="projects">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-projects-subtitle">
              Showcasing our recent work and client success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate transition-all group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`text-project-desc-${project.id}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" data-testid={`badge-tag-${tag.toLowerCase()}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full gap-2 mt-2" data-testid={`button-view-project-${project.id}`}>
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
