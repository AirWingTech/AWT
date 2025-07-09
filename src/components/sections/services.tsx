"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Wrench, DraftingCompass, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const services = [
    {
        title: "Expert Machining",
        description: "We are expertized in manufacturing of machining parts which are having the series of different operations, we analyze the design, manufacture, assemble and deliver the end product to use for their applications.",
        icon: <Wrench className="w-10 h-10" />,
        image: "/cmmtypeshi/cmm.jpeg",
        hint: "precision machining"
    },
    {
        title: "Design & Drafting",
        description: "We have a separate design team to design new products like components, jigs and fixtures, we are also doing drafting for the parts.",
        icon: <DraftingCompass className="w-10 h-10" />,
        image: "/cmmtypeshi/cmm2.jpeg",
        hint: "engineering design blueprint"
    },
    {
        title: "CMM Inspection",
        description: "We are able to make assembly parts to machine manufacture, SPM manufacturers and fabricated items manufacturers. We also provide CMM INSPECTION if required.",
        icon: <ZoomIn className="w-10 h-10" />,
        image: "/cmmtypeshi/cmm3.jpeg",
        hint: "cmm inspection machine"
    }
];

export default function Services() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="services" ref={ref} className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className={cn("text-center mb-16 opacity-0", isVisible && "animate-fade-in-down")}>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Commitment to <span className="text-accent">Quality & Service</span></h2>
                </div>

                <div className={cn("bg-primary text-primary-foreground rounded-lg p-8 mb-16 flex flex-col md:flex-row items-center gap-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 opacity-0", isVisible && "animate-zoom-in animation-delay-200")}>
                    <div className="flex-shrink-0">
                        <ShieldCheck className="w-24 h-24 text-accent animate-pulse" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-headline">AN ISO 9001-2015 CERTIFIED COMPANY</h3>
                        <p className="mt-2 max-w-3xl text-primary-foreground/80">
                            Our company is committed to provide ultimate customer satisfaction by ensuring manufacture and supply of precision machined components of highest quality standards and timely delivery of goods.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={cn("opacity-0", isVisible && "animate-fade-in-up")} style={{ animationDelay: `${300 + index * 150}ms` }}>
                            <Card className="group text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20 overflow-hidden">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        data-ai-hint={service.hint}
                                    />
                                </div>
                                <CardHeader className="items-center -mt-12">
                                    <div className="bg-primary text-primary-foreground w-24 h-24 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 z-10 border-4 border-background">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="mt-4 font-headline text-2xl text-primary">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 pt-0">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
