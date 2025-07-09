"use client"
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import { Cog, Disc3, Hammer, Truck } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

const machineries = [
  { name: "Vertical Milling Center", make: "BFW", model: "BMV-50 TC24", specs: "850*510*510", icon: <Cog /> },
  { name: "Vertical Milling Center", make: "BFW", model: "BMV-65 TC24", specs: "1500*710*700", icon: <Cog /> },
  { name: "Double column Milling Center", make: "BFW", model: "VIRAT-1530", specs: "3100*1700*1000", icon: <Cog /> },
  { name: "Vertical Milling Center", make: "BFW", model: "XTRON-544", specs: "500*400*400", icon: <Cog /> },
  { name: "Turning Center", make: "MAC POWER", model: "CHALLENGER-200", specs: "500*280", icon: <Disc3 /> },
  { name: "Turning Center", make: "LOKESH MACHINES", model: "TL-20", specs: "300*250", icon: <Disc3 /> },
  { name: "Drilling Machine", make: "ITCO", model: "19mm", specs: "", icon: <Hammer /> },
  { name: "2000Kg Stacker (Forklift)", make: "Newgen forklift", model: "", specs: "", icon: <Truck /> },
];

const machineryList = [
  { name: "BFW Vertical Milling Center", model: "BMV-50 TC24", image: "/machines/m1.jpeg", hint: "vertical milling machine" },
  { name: "BFW Vertical Milling Center", model: "BMV-65 TC24", image: "/machines/m2.jpeg", hint: "cnc milling machine" },
  { name: "BFW Vertical Milling Center", model: "XTRON-544", image: "/machines/m3.jpeg", hint: "precision cnc machine" },
  { name: "BFW Double Column Milling Center", model: "VIRAT-1530", image: "/machines/m4.jpeg", hint: "large cnc machine" },
  { name: "MAC POWER Turning Center", model: "CHALLENGER-200", image: "/machines/m5.jpeg", hint: "turning center lathe" },
  { name: "LOKESH Turning Center", model: "TL-20", image: "/machines/m6.jpeg", hint: "cnc lathe machine" },
  { name: "ITCO Drilling Machine", model: "19mm", image: "/machines/m7.jpeg", hint: "industrial drill press" },
  { name: "Newgen Stacker", model: "Forklift 2000Kg", image: "/machines/m8.jpeg", hint: "forklift industrial" }
];

const instruments = [
  { name: "Digital Vernier", range: "0-200 mm", leastCount: "0.01 mm", make: "Mitutoyo" },
  { name: "Dial Vernier", range: "0-300 mm", leastCount: "0.01 mm", make: "Mitutoyo" },
  { name: "Vernier Caliper", range: "0-200 mm", leastCount: "0.01 mm", make: "Mitutoyo" },
  { name: "Digital Height Gauge", range: "0-600 mm", leastCount: "0.001 mm", make: "Mitutoyo" },
  { name: "Micrometer (Digital)", range: "0-25 mm", leastCount: "0.001 mm", make: "Mitutoyo" },
  { name: "Micrometer", range: "0-25 mm", leastCount: "0.01 mm", make: "Mitutoyo" },
  { name: "Micrometer", range: "25-50 mm", leastCount: "0.01 mm", make: "Mitutoyo" },
  { name: "Dial Stand", range: "1 Set", leastCount: "-", make: "Dasaqua" },
  { name: "Dial indicator", range: "-", leastCount: "0.01 mm", make: "Mitutoyo" },
  { name: "Dial indicator", range: "-", leastCount: "0.002 mm", make: "Mitutoyo" },
  { name: "Slip Gauge Set", range: "1.005-100 mm", leastCount: "0.005 mm", make: "Jefuji" },
  { name: "Bore Gauge Set", range: "10-60 mm", leastCount: "0.001 mm", make: "Mitutoyo" },
  { name: "V blocks", range: "0-150 mm", leastCount: "-", make: "Mitutoyo" },
  { name: "Pin Gauge Set", range: "1-12 mm", leastCount: "0.01 mm", make: "AIK" },
  { name: "Surface Table", range: "2000*1000*200 mm", leastCount: "0.006 mm", make: "MI & S" },
  { name: "TESA HEIGHT MASTER", range: "0-765", leastCount: "0.001", make: "TESA" },
];

export default function Machinery() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="machinery" ref={ref} className="py-20 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 opacity-0", isVisible && 'animate-fade-in-down')}>
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary">Our <span className="text-accent">Capabilities</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Equipped with state-of-the-art machinery and precision instruments to meet the most demanding specifications.
          </p>
        </div>
        <div className="space-y-20">
            <div className={cn("opacity-0", isVisible && 'animate-zoom-in')}>
                <h3 className="text-3xl font-bold font-headline text-primary mb-10 text-center">Our Machineries</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {machineries.map((item, index) => (
                        <div key={index} className={cn("opacity-0", isVisible && `animate-fade-in-up`)} style={{ animationDelay: `${200 + index * 100}ms` }}>
                            <Card className="group text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20 h-full">
                                <CardHeader className="items-center pb-4">
                                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 z-10 border-4 border-background">
                                        {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <h4 className="font-bold text-lg font-headline text-primary truncate">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground"><strong>Make:</strong> {item.make}</p>
                                    {item.model && <p className="text-sm text-muted-foreground"><strong>Model:</strong> {item.model}</p>}
                                    {item.specs && <p className="text-sm text-muted-foreground"><strong>Specs:</strong> {item.specs} mm</p>}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cn("opacity-0", isVisible && 'animate-zoom-in animation-delay-300')}>
              <h3 className="text-3xl font-bold font-headline text-primary mb-10 text-center">Machineries List</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {machineryList.map((machine, index) => (
                  <div key={index} className={cn("opacity-0", isVisible && `animate-fade-in-up`)} style={{ animationDelay: `${400 + index * 100}ms` }}>
                    <Card className="overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
                      <CardHeader className="p-0">
                        <div className="relative h-56">
                          <Image
                            src={machine.image}
                            alt={machine.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={machine.hint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          <CardTitle className="absolute bottom-4 left-4 right-4 text-white font-headline text-lg tracking-wide">{machine.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 bg-background">
                        <p className="font-semibold text-foreground">Model: {machine.model}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("opacity-0", isVisible && "animate-fade-in-up animation-delay-500")}>
              <Card className="shadow-lg border-2 border-primary/10">
                  <CardHeader><CardTitle className="font-headline text-2xl text-primary text-center">Quality Instruments</CardTitle></CardHeader>
                  <CardContent>
                  <Table>
                      <TableHeader>
                      <TableRow>
                          <TableHead>Instrument</TableHead>
                          <TableHead>Range</TableHead>
                          <TableHead>Least Count</TableHead>
                          <TableHead>Make</TableHead>
                      </TableRow>
                      </TableHeader>
                      <TableBody>
                      {instruments.map((item, index) => (
                          <TableRow key={index} className="hover:bg-accent/10">
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.range}</TableCell>
                          <TableCell>{item.leastCount}</TableCell>
                          <TableCell>{item.make}</TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                  </Table>
                  </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  )
}
