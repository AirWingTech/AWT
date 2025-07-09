"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Factory, ScanSearch } from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const infrastructureData = [
    {
        icon: <Building className="w-10 h-10 text-accent" />,
        title: "Total Buildup Area",
        value: "10,000 Sq. ft.",
        description: "A spacious and modern facility designed for efficient workflow and large-scale projects.",
    },
    {
        icon: <Factory className="w-10 h-10 text-accent" />,
        title: "Shop Floor",
        value: "5,500 Sq. ft.",
        description: "Equipped with 3-axis machines capable of producing components from small detailed parts up to 3.5 meters in length.",
    },
    {
        icon: <ScanSearch className="w-10 h-10 text-accent" />,
        title: "Advanced CMM",
        value: "2.1 Meter Range",
        description: "We are expanding our quality control capabilities by adding a new Coordinate Measuring Machine.",
    },
];

export default function Infrastructure() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="infrastructure" ref={ref} className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className={cn("text-center mb-16 opacity-0", isVisible && "animate-fade-in-down")}>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Our <span className="text-accent">Infrastructure</span></h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        A state-of-the-art facility built for precision, scale, and the future of aerospace manufacturing.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infrastructureData.map((item, index) => (
                        <div key={index} className={cn("opacity-0", isVisible && `animate-fade-in-up`)} style={{ animationDelay: `${index * 150}ms` }}>
                            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 transform hover:-translate-y-2 h-full">
                                <CardHeader className="items-center pb-4">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="font-headline text-xl pt-4">{item.title}</CardTitle>
                                    <p className="text-2xl font-bold text-accent">{item.value}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className={cn("mt-20 relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl opacity-0", isVisible && "animate-zoom-in animation-delay-500")}>
                     <Image
                        src="/infrastructure.jpeg"
                        alt="Airwing Technologies Infrastructure"
                        layout="fill"
                        className="object-cover"
                        data-ai-hint="modern factory floor"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
