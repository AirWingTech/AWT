"use client"

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const customers = [
  { name: "Hindusthan Aeronautics Limited (HAL) - LCA Tejus Division", logo: "/customers/hal1.jpeg", hint: "HAL logo", description: "Key supplier for the Light Combat Aircraft (LCA) Tejas program, providing critical structural components and assemblies." },
  { name: "Hindusthan Aeronautics Limited (HAL) - Aerospace Division", logo: "/customers/hal2.jpeg", hint: "HAL logo", description: "A long-standing partner, manufacturing high-precision parts for various aerospace platforms and engine programs." },
  { name: "Indo-MIM Private Limited", logo: "/customers/indomim.jpeg", hint: "Indo-MIM logo", description: "Collaborating on Metal Injection Molding (MIM) solutions for complex, high-volume aerospace components." },
  { name: "Mann & Hummel+ Private Limited", logo: "/customers/mann+hummel.jpeg", hint: "Mann Hummel logo", description: "Providing advanced filtration and thermal management component manufacturing for specialized engineering applications." },
  { name: "Skyroot Pvt. Ltd.", logo: "/customers/skyroot.jpeg", hint: "Skyroot Aerospace logo", description: "Proudly supporting India's private space-tech leader with essential components for their launch vehicle systems." },
  { name: "L & T Coimbatore", logo: "/customers/l&t.jpeg", hint: "Larsen Toubro logo", description: "Partnering with Larsen & Toubro on defense and aerospace projects, delivering components with exceptional quality." },
];

export default function Customers() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [api, setApi] = React.useState<CarouselApi>()
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do not stop autoplay on select
    });
    
    api.on("pointerDown", () => {
        plugin.current.stop();
    });

    api.on("pointerUp", () => {
        plugin.current.reset();
    });


  }, [api])

  return (
    <section id="customers" ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 opacity-0", isVisible && 'animate-fade-in-down')}>
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Trusted by <span className="text-accent">Industry Leaders</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are proud to partner with pioneers and visionaries in the aerospace and engineering sectors.
          </p>
        </div>
        <div className={cn("opacity-0", isVisible && 'animate-zoom-in animation-delay-200')}>
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {customers.map((customer, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1 h-full">
                      <Card className="flex flex-col items-center text-center p-6 border-2 border-primary/10 hover:shadow-lg transition-shadow duration-300 h-full">
                          <div className="h-24 flex items-center justify-center">
                              <Image 
                                src={customer.logo} 
                                alt={customer.name} 
                                width={160} 
                                height={80} 
                                className="object-contain max-h-16" 
                                data-ai-hint={customer.hint} 
                              />
                          </div>
                          <CardHeader className="p-2">
                              <CardTitle className="text-base font-bold font-headline">{customer.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-2 flex-grow">
                              <p className="text-sm text-muted-foreground">{customer.description}</p>
                          </CardContent>
                      </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
