import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

/**
 * The main layout wrapper for screens that require a header and bottom navigation.
 * It creates a consistent structure for the application.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title={title} />
      <main className="flex-grow p-4 overflow-y-auto">{children}</main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;