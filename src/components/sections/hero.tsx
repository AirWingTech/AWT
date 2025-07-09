"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const slides = [
  {
    image: "/slideshow/PE.jpeg",
    hint: "aerospace factory",
    title: "Precision Engineering",
    description: "State-of-the-art manufacturing for complex aerospace components.",
  },
  {
    image: "/slideshow/DEE.jpeg",
    hint: "engineers discussing blueprint",
    title: "Discussed Engineering by Experts",
    description: "Collaborative design and expert analysis to solve the most complex engineering challenges.",
  },
  {
    image: "/slideshow/Raw.jpeg",
    hint: "raw metal block",
    title: "First class raw material turned into components",
    description: "Transforming premium-grade materials into mission-critical, high-performance parts.",
  },
  {
    image: "/slideshow/UM.jpeg",
    hint: "cnc machine",
    title: "Unrivaled Manufacturing",
    description: "Harnessing the power of automation and precision for flawless production.",
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel 
        setApi={setApi} 
        className="w-full h-full" 
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
                  <div className="container mx-auto">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl md:text-5xl font-headline font-bold drop-shadow-lg animate-fade-in-up">{slide.title}</h2>
                      <p className="mt-4 text-lg md:text-xl text-white/80 drop-shadow-md animate-fade-in-up animation-delay-300">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white bg-white/10 hover:bg-white/20 border-white/20" />
        <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white bg-white/10 hover:bg-white/20 border-white/20" />
      </Carousel>

       <div className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-4 transition-opacity duration-1000 ${current === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold drop-shadow-2xl animate-fade-in-up">
          <span className="text-accent">Air</span><span className="text-primary">wing</span> <span className="text-white">Technologies</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-body drop-shadow-xl animate-fade-in-up animation-delay-300">Shaping the Future of Aerospace.</p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${current === index + 1 ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
      </div>
    </section>
  )
}
