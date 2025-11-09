import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import sarahImg from "@assets/generated_images/Team_member_Sarah_portrait_b53c2c6d.png";
import michaelImg from "@assets/generated_images/Team_member_Michael_portrait_1eb66a4d.png";
import emilyImg from "@assets/generated_images/Team_member_Emily_portrait_7cbeefc6.png";
import davidImg from "@assets/generated_images/Team_member_David_portrait_cd08b6e6.png";

const team = [
  {
    name: "Sarah Anderson",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with 10+ years in tech, passionate about building products that make a difference.",
    image: sarahImg,
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Full-stack expert who loves solving complex problems with elegant, scalable solutions.",
    image: michaelImg,
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "UX/UI specialist creating beautiful, intuitive experiences that users love.",
    image: emilyImg,
  },
  {
    name: "David Thompson",
    role: "Tech Lead",
    bio: "Experienced architect ensuring our projects are built on solid technical foundations.",
    image: davidImg,
  },
];

export default function TeamGrid() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4" data-testid="text-team-grid-title">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-team-grid-subtitle">
              The talented people who make it all happen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all text-center"
                data-testid={`card-team-${index}`}
              >
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-xl font-semibold" data-testid={`text-team-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium" data-testid={`text-team-role-${index}`}>
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid={`text-team-bio-${index}`}>
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
