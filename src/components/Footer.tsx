
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
              <div className="h-4 w-4 rounded-full bg-primary/80" />
            </div>
            <span className="font-bold text-lg">AppName</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AppName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
