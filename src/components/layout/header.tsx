"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#machinery', label: 'Our Machineries' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#customers', label: 'Customers' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 shadow-md backdrop-blur-sm" : "bg-gradient-to-b from-black/70 to-transparent"
      )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col items-center justify-between lg:h-24 py-3 lg:py-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/AWT-logo.jpeg"
              alt="Airwing Technologies Logo"
              width={135}
              height={30} />
          </Link>
          <nav className="flex items-center justify-center mt-4 lg:mt-0">
            <div className="flex flex-wrap justify-center items-center space-x-1 md:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group",
                  scrolled ? "text-primary hover:text-accent" : "text-white hover:text-gray-200"
                  )}
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              ))}
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group",
                scrolled ? "text-primary hover:text-accent" : "text-white hover:text-gray-200"
                )}
              >
                <span>Brochure</span>
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
