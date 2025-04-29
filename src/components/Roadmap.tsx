
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface RoadmapItemProps {
  title: string;
  description: string;
  completed: boolean;
  date: string;
}

const RoadmapItem = ({ title, description, completed, date }: RoadmapItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">
        {completed ? (
          <CheckCircle size={20} className="text-primary" />
        ) : (
          <Circle size={20} className="text-muted-foreground" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-lg">{title}</h3>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our journey as we develop and enhance the app with new features and improvements.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <RoadmapItem
              title="Core App Development"
              description="Build the foundation of our app with essential features and Material You design principles."
              completed={true}
              date="Q1 2025"
            />
            <RoadmapItem
              title="Beta Launch"
              description="Release a beta version to a select group of users for testing and feedback."
              completed={false}
              date="Q2 2025"
            />
            <RoadmapItem
              title="Advanced Features"
              description="Implement advanced features based on user feedback and technological advancements."
              completed={false}
              date="Q3 2025"
            />
            <RoadmapItem
              title="Public Release"
              description="Official launch of the app on major platforms with all core features."
              completed={false}
              date="Q4 2025"
            />
            <RoadmapItem
              title="Ecosystem Expansion"
              description="Expand to additional platforms and integrate with more third-party services."
              completed={false}
              date="Q1 2026"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
