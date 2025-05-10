
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TEAM_MEMBERS_DATA, type TeamMember } from '@/lib/constants';

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Conoce a Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Profesionales apasionados por la belleza y expertos en Balayage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS_DATA.map((member: TeamMember) => (
            <Card 
              key={member.id} 
              className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] flex flex-col items-center text-center group"
            >
              <div className="pt-6">
                <Image
                  src={member.avatarSrc}
                  alt={`Foto de ${member.name}`}
                  data-ai-hint={member.aiHint}
                  width={160} 
                  height={160}
                  className="rounded-full object-cover aspect-square border-4 border-transparent group-hover:border-primary/50 transition-colors duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="text-foreground/70 text-sm px-6 pb-6 flex-grow">
                <p>{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
