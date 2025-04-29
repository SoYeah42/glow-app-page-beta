
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex flex-col items-center justify-center pt-32">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Revolutionize</span> Your Daily Routine
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A minimal, powerful mobile app designed with Material You principles to simplify and enhance your everyday tasks.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 px-8">
              Sign Up for Beta <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-24 animate-slide-up">
          <div className="relative w-64 h-[500px] mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-[480px] rounded-3xl glass animate-pulse-slow overflow-hidden border border-white/20 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10" />
            </div>
            <div className="absolute top-[5%] left-[55%] -translate-x-1/2 w-56 h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/40 via-primary/5 to-accent/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
