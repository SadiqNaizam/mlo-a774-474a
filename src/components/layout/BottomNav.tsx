import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/search', icon: Search, label: 'Search' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

/**
 * A fixed bottom navigation bar for the main application screens.
 */
const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t z-10">
      <div className="flex justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.label}
              to={item.href}
              className="flex flex-col items-center justify-center w-full text-muted-foreground transition-colors duration-200 active:scale-95"
            >
              <item.icon
                className={cn(
                  'h-6 w-6 mb-1',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  'text-xs font-medium',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;