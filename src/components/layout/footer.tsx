"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronsUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/AWT-logo.jpeg"
                alt="Airwing Technologies Logo"
                width={180}
                height={40} />
            </Link>
            <p className="text-primary-foreground/70">Shaping the Future of Aerospace.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold font-headline text-lg">Contact Us</h4>
            <address className="not-italic space-y-2 text-primary-foreground/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>#47, 5th cross, Thigalarapalya main road, Balaji nagar, Peenya Industrial estate, Peenya 2nd Stage, Bangalore-560058.</span>
              </p>
              <a href="tel:8147776954" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>8147776954, 8748055511</span>
              </a>
               <a href="mailto:airwingtechnologies@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>airwingtechnologies@gmail.com</span>
              </a>
            </address>
          </div>
          <div className="space-y-4">
             <h4 className="font-bold font-headline text-lg">Quick Links</h4>
             <ul className="space-y-2">
                <li><Link href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors transform hover:translate-x-1 inline-block">About Us</Link></li>
                <li><Link href="#machinery" className="text-primary-foreground/70 hover:text-accent transition-colors transform hover:translate-x-1 inline-block">Machinery</Link></li>
                <li><Link href="#projects" className="text-primary-foreground/70 hover:text-accent transition-colors transform hover:translate-x-1 inline-block">Projects</Link></li>
                <li><Link href="#customers" className="text-primary-foreground/70 hover:text-accent transition-colors transform hover:translate-x-1 inline-block">Customers</Link></li>
             </ul>
          </div>
           <div className="space-y-4">
             <h4 className="font-bold font-headline text-lg">Legal</h4>
             <p className="text-primary-foreground/70"><strong>GSTIN:</strong> 29ABPFA1825P1ZT</p>
          </div>
        </div>
      </div>
      <div className="bg-black/20">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/50">
           <p>&copy; {new Date().getFullYear()} Airwing Technologies. All Rights Reserved.</p>
           <button onClick={scrollToTop} className="mt-4 sm:mt-0 flex items-center gap-2 hover:text-accent transition-colors">
             Back to Top <ChevronsUp className="w-4 h-4" />
           </button>
        </div>
      </div>
    </footer>
  );
}
