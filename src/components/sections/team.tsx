"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const team = [
  { name: "MR. ARUNKUMAR.D.N", role: "Planning & Business Development", phone: "8147776954" },
  { name: "MR. SHIVAPRASADA.D.S", role: "Production & Project Head", phone: "8748055511" },
  { name: "MR. ESHWAR.C.J", role: "Marketing & Finance Administration", phone: "9743540623" },
  { name: "MR. VIJAY.A.V", role: "Manufacturing & Technical Head", phone: "9353214013" },
];

export default function Team() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="team" ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 opacity-0", isVisible && 'animate-fade-in-down')}>
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Our <span className="text-accent">Leadership</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Driven by a team of experienced and passionate professionals dedicated to excellence.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className={cn("opacity-0", isVisible && 'animate-fade-in-up')} style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 transform hover:-translate-y-2">
                <CardHeader className="items-center pt-8 pb-4">
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
