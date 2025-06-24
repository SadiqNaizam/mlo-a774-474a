import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Smartphone } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Bank-Level Security',
    description: 'Your data is protected with the latest encryption standards.',
  },
  {
    icon: Smartphone,
    title: 'Manage On The Go',
    description: 'Access your accounts anytime, anywhere.',
  },
  {
    icon: CheckCircle,
    title: 'Easy Payments',
    description: 'Send and receive money with just a few taps.',
  },
];

/**
 * The onboarding screen that highlights key features of the app.
 */
const OnboardingPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-between p-6">
      <div className="mt-12 text-center">
        <h1 className="text-3xl font-bold text-foreground">Welcome to BankEase</h1>
        <p className="text-muted-foreground mt-2">Your financial journey starts here.</p>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card">
            <CardContent className="flex items-center p-4">
              <feature.icon className="w-8 h-8 mr-4 text-primary" />
              <div>
                <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pb-4">
        <Button asChild size="lg" className="w-full text-base transition-transform active:scale-95">
          <Link to="/login">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default OnboardingPage;