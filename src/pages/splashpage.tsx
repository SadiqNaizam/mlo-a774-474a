import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banknote } from 'lucide-react';
import CenterLayout from '@/components/layout/CenterLayout';

/**
 * The initial splash screen for the BankEase app.
 * It displays the app name and an icon, then automatically navigates to the onboarding screen.
 */
const SplashPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <CenterLayout className="bg-primary">
      <div className="flex flex-col items-center text-center text-primary-foreground">
        <Banknote className="w-24 h-24 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold tracking-tight">BankEase</h1>
        <p className="text-lg text-primary-foreground/80">Simple, Secure Banking.</p>
      </div>
    </CenterLayout>
  );
};

export default SplashPage;