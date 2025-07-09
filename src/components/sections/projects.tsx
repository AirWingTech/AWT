"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const projects = [
  { title: "Component 1", image: "/products/p1.jpeg", hint: "aerospace component", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 6061-T651"}, {label: "RAW MATERIAL SIZE", value: "1150 X 700 X 120mm"}, {label: "WT", value: "274Kgs"}, {label: "FINISH PART WEIGHT", value: "15kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.1mm"}] },
  { title: "Component 2", image: "/products/p2.jpeg", hint: "machined part", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 7075-T6"}, {label: "RAW MATERIAL SIZE", value: "415 X 370 X 110mm"}, {label: "WT", value: "48Kgs"}, {label: "FINISH PART WEIGHT", value: "4kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.1mm"}] },
  { title: "Component 3", image: "/products/p3.jpeg", hint: "titanium part", details: [{label: "RAW MATERIAL", value: "TI-ALLOY"}, {label: "RAW MATERIAL SIZE", value: "650 X 180 X 110mm"}, {label: "WT", value: "76Kgs"}, {label: "FINISH PART WEIGHT", value: "3.6kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.2mm"}] },
  { title: "Component 4", image: "/products/p4.jpeg", hint: "aluminum component", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 7075-T6"}, {label: "RAW MATERIAL SIZE", value: "950 X 500 X 45mm"}, {label: "WT", value: "60Kgs"}, {label: "FINISH PART WEIGHT", value: "2.5kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.2mm"}] },
  { title: "Component 5", image: "/products/p5.jpeg", hint: "large aluminum part", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 7075-T6"}, {label: "RAW MATERIAL SIZE", value: "1070 X 500 X 45mm"}, {label: "WT", value: "68Kgs"}, {label: "FINISH PART WEIGHT", value: "2.7kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.2mm"}] },
  { title: "Component 6", image: "/products/p6.jpeg", hint: "heavy aluminum block", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 7075-T6"}, {label: "RAW MATERIAL SIZE", value: "900 X 400 X 130mm"}, {label: "WT", value: "131Kgs"}, {label: "FINISH PART WEIGHT", value: "3.95kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.2mm"}] },
  { title: "Component 7", image: "/products/p7.jpeg", hint: "long aerospace part", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 7075-T6"}, {label: "RAW MATERIAL SIZE", value: "2030 X 650 X 45mm"}, {label: "WT", value: "220Kgs"}, {label: "FINISH PART WEIGHT", value: "8.5kgs"}, {label: "POSITION TOLERANCE", value: "0.05mm"}, {label: "PROFILE TOLERANCE", value: "0.2mm"}] },
  { title: "Precision Gauge", image: "/products/p12.jpeg", hint: "precision gauge", details: [{label: "RAW MATERIAL", value: "AL-ALLOY 6082-T6"}, {label: "FINAL FINISHED GAUGE SIZE", value: "2000 X 1000 X 205mm"}, {label: "WT", value: "127Kgs"}, {label: "POSITION TOLERANCE", value: "0.02mm"}, {label: "PROFILE TOLERANCE", value: "0.05mm"}] },
  { title: "Jobrock Master Moulds", image: "/products/p9.jpeg", hint: "industrial mould", details: [] },
  { title: "Assembly Pipe Weld Jigs", image: "/products/p10.jpeg", hint: "welding jig", details: [] },
  { title: "Vacuum Fixtures", image: "/products/p11.jpeg", hint: "vacuum fixture", details: [] },
  { title: "Sheet Metal Form Tools", image: "/products/p8.jpeg", hint: "metal forming tool", details: [] },
  { title: "Die Moulds", image: "/products/p13.jpeg", hint: "die casting mould", details: [] },
  { title: "Checking Fixtures & Gauges", image: "/products/p14.jpeg", hint: "inspection fixture", details: [] },
  { title: "Automotive CNC Parts", image: "/products/p15.jpeg", hint: "automotive part", details: [] },
  { title: "Medical CNC Equipment", image: "/products/p16.jpeg", hint: "medical device", details: [] },
];

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 opacity-0", isVisible && 'animate-fade-in-down')}>
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Our <span className="text-accent">Showcase</span> Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Demonstrating our capability in handling complex geometries and exotic materials with tight tolerances.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={cn("opacity-0", isVisible && 'animate-zoom-in')} style={{ animationDelay: `${index * 50}ms` }}>
              <Card className="overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] bg-card">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-2"
                      data-ai-hint={project.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <CardTitle className="absolute bottom-4 left-4 right-4 text-white font-headline text-lg tracking-wide">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 bg-secondary/30 h-full">
                  {project.details.length > 0 ? (
                      <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.details.map((detail, i) => (
                          <li key={i} className="flex justify-between">
                              <span className="font-semibold text-foreground/80">{detail.label}:</span> 
                              <span className="text-right">{detail.value}</span>
                          </li>
                      ))}
                      </ul>
                  ) : (
                      <div className="flex items-center justify-center h-full">
                          <p className="text-muted-foreground italic">Specialized Tooling Project</p>
                      </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
