import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma, SiGithub, SiVercel, SiMongodb } from "react-icons/si";

const tools = [
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Figma", Icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "GitHub", Icon: SiGithub, color: "text-foreground" },
  { name: "Vercel", Icon: SiVercel, color: "text-foreground" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
];

export default function ToolsetGrid() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-toolset-title">
              Our Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-toolset-subtitle">
              We use cutting-edge tools and technologies to build exceptional digital products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-4 p-6 rounded-xl border bg-background hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-testid={`card-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <tool.Icon className={`h-12 w-12 ${tool.color}`} />
                <span className="font-medium text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
