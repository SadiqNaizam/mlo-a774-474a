import React from 'react';

interface HeaderProps {
  title: string;
}

/**
 * A consistent header component for displaying the screen title.
 */
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="flex items-center justify-center h-16 px-4 border-b">
        <h1 className="text-lg font-bold text-foreground">{title}</h1>
      </div>
    </header>
  );
};

export default Header;