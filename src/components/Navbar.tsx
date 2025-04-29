
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <div className="h-6 w-6 rounded-full bg-primary/80" />
          </div>
          <span className="font-bold text-xl">AppName</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#roadmap" className="text-sm hover:text-primary transition-colors">Roadmap</a>
          <a href="#beta" className="text-sm hover:text-primary transition-colors">Beta</a>
        </div>
        <Button size="sm" variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
