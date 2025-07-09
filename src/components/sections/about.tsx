"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Target, Eye, Rocket, ShieldCheck, AreaChart, Zap } from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const aboutText = `AIRWING TECHNOLOGIES is a small scale engineering industry registered under MSME. We are into manufacturing and machining of Aerospace and special purpose components for an engineering industry.
AIRWING TECHNOLOGIES was formed in 2022. Managed by an experienced team of highly skilled in CNC field and dedicated Tool Room personal specialized in design and manufacturing of Aerospace components.
We have a group of passion CAM programmer, strict quality control management, state of art CAD-CAM system and highly precision CNC milling machines to take project from concept to completion with total efficiency.
We have spare capacity to accommodate more job and we have full-fledged quality control room with all necessary measuring instruments. The instruments are calibrated periodically as per standard practice at the approved labs are the calibrated centers. We have necessary qualified man power in the design, quality and production areas and we work around the clock.`;

const accordionItems = [
    {
        value: "item-1",
        title: "Our Commitment and Vision",
        content: "We embrace the challenge of finding timely, accurate solution to intricate design and tooling problems, by constantly investing in new technology tools and equipment’s and upgrading the skill of our employees. We are a people centric organization set out to achieve collective success for our customers, employees and management by ethical means and with high integrity.",
        icon: <Eye className="w-5 h-5 text-accent" />
    },
    {
        value: "item-2",
        title: "Our Mission",
        content: "To provide zero defect precision machined components for aerospace, avionics and airborne system and ensuring zero wastage to achieve INR 10 Crore turnover by 2030.",
        icon: <Rocket className="w-5 h-5 text-accent" />
    },
    {
        value: "item-3",
        title: "Our Focus",
        content: "Design development for new products in AEROSPACE INDUSTRY.\nManufacture and supply of sub-assemblies and high precision components to Indian and overseas customers.\nTo develop high quality low-cost export items engineering applications.\nProviding of measurement service portable Height Gauge.",
        icon: <Target className="w-5 h-5 text-accent" />
    },
    {
        value: "item-4",
        title: "Our Quality Policy",
        content: "We at AIRWING TECHNOLOGIES are committed to total customer’s satisfaction in terms of quality, delivery and services through state of the art engineering techniques. Also strive for continual improvement in quality management system, technology, process and competency.",
        icon: <ShieldCheck className="w-5 h-5 text-accent" />
    },
    {
        value: "item-5",
        title: "Our Facility",
        content: "We have 10,000 square feet of working area and we have good store and fitting facility, CAD-CAM quality and office and also we can handle customer raw material or component with care and identifying the batch and material grade and store in separate place.",
        icon: <AreaChart className="w-5 h-5 text-accent" />
    }
];

export default function About() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

    return (
        <section id="about" ref={ref} className="py-20 lg:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={cn("text-center mb-20 opacity-0", isVisible && "animate-fade-in-down")}>
                    <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Forging the Future of <span className="text-accent">Aerospace</span></h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Combining decades of experience with cutting-edge technology to deliver unparalleled precision and quality.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                    <div className={cn("lg:col-span-7 xl:col-span-6 relative z-10 opacity-0", isVisible && "animate-fade-in-right animation-delay-200")}>
                         <div className="space-y-8">
                            <Card className="shadow-2xl border-2 border-primary/10 bg-background">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl text-primary flex items-center gap-3">
                                      <Zap className="w-8 h-8 text-accent"/>
                                      About Airwing Technologies
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground whitespace-pre-line text-base leading-relaxed">{aboutText}</p>
                                </CardContent>
                            </Card>
                             <Accordion type="single" collapsible className="w-full bg-background p-4 rounded-lg shadow-2xl border-2 border-primary/10" defaultValue="item-1">
                                {accordionItems.map(item => (
                                    <AccordionItem key={item.value} value={item.value}>
                                        <AccordionTrigger className="font-headline text-lg hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                {item.icon}
                                                {item.title}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="whitespace-pre-line text-muted-foreground pt-2 pl-8">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                             </Accordion>
                        </div>
                    </div>
                    <div className={cn("lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 mt-12 lg:mt-0 opacity-0", isVisible && "animate-fade-in-left animation-delay-400")}>
                        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                          <Image 
                            src="/about.jpeg"
                            alt="Forging the Future of Aerospace"
                            fill
                            className="object-cover"
                          />
                           <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
