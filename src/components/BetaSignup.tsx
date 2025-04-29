
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const BetaSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "Thank you for signing up for our beta program.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="beta" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Beta</h2>
          <p className="text-muted-foreground mb-8">
            Be among the first to experience our app and help shape its future. Sign up for our beta program today.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/50 border-secondary"
            />
            <Button type="submit" disabled={isSubmitting} className="whitespace-nowrap">
              {isSubmitting ? 'Signing up...' : 'Sign Up for Beta'}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;
