"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Intro() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    if (!isVisible) {
                        setIsVisible(true);
                    }
                    setScrollPosition(rect.top);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    const getParallaxStyle = (rate: number, rotation: number) => {
        if (!isVisible) return {};
        const scrollValue = window.innerHeight - scrollPosition;
        return {
            transform: `translateY(${scrollValue * rate}px) rotate(${rotation}deg)`,
            transition: 'transform 0.1s linear'
        };
    };
    
    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={cn("space-y-6 z-10 opacity-0", isVisible && 'animate-fade-in-right')}>
                        <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">
                            Pioneering Aerospace Innovation
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                           We are ushering in a new era of aerospace manufacturing, where precision engineering and innovative solutions converge to shape the future of flight. Our commitment to excellence is forged in every component we create.
                        </p>
                    </div>
                    <div className="relative h-96 md:h-[500px]">
                        <div 
                            className={cn("absolute top-0 left-0 w-2/3 h-2/3 rounded-lg shadow-2xl transform opacity-0", isVisible && 'animate-zoom-in animation-delay-200')} 
                            style={getParallaxStyle(0.1, -6)}
                        >
                            <Image
                                src="/pai/pai1.jpeg"
                                alt="Aerospace engineering"
                                className="w-full h-full object-cover rounded-lg"
                                layout="fill"
                                data-ai-hint="aerospace manufacturing"
                            />
                        </div>
                        <div 
                            className={cn("absolute bottom-0 right-0 w-2/3 h-2/3 rounded-lg shadow-2xl transform opacity-0", isVisible && 'animate-zoom-in animation-delay-400')} 
                            style={getParallaxStyle(-0.1, 6)}
                        >
                            <Image
                                src="/pai/pai2.jpeg"
                                alt="Advanced machinery"
                                className="w-full h-full object-cover rounded-lg"
                                layout="fill"
                                data-ai-hint="precision machinery"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
