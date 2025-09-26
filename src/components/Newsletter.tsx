
import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive the latest updates about cars and auctions.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-padding trust-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex p-3 bg-white/20 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with TrustedVehicles
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get the latest updates on new arrivals, exclusive auctions, and industry insights 
            delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-trust-600 hover:bg-white/90 font-medium px-8"
              disabled={isLoading}
            >
              {isLoading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="text-white/70 text-sm mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
