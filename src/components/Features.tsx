
import React from 'react';
import { Shield, Settings, Calendar } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-xl glass hover:bg-white/10 transition-all cursor-default group">
      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed with simplicity and functionality in mind, our app provides essential features
            without unnecessary complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield size={24} className="text-primary" />}
            title="Enhanced Security"
            description="End-to-end encryption and advanced security protocols to keep your data safe and private at all times."
          />
          <FeatureCard
            icon={<Settings size={24} className="text-primary" />}
            title="Intuitive Design"
            description="Material You design principles ensure a seamless user experience that adapts to your preferences."
          />
          <FeatureCard
            icon={<Calendar size={24} className="text-primary" />}
            title="Smart Integration"
            description="Effortlessly integrates with your favorite tools and services for a streamlined workflow."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
