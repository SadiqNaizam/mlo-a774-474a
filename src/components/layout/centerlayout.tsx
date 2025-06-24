import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the CenterLayout component.
 */
interface CenterLayoutProps {
  /**
   * The content to be centered within the layout.
   * This is a mandatory prop.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the layout container.
   */
  className?: string;
}

/**
 * A full-page layout component that centers its content both vertically
 * and horizontally using Flexbox.
 *
 * @param {CenterLayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered layout component.
 */
const CenterLayout: React.FC<CenterLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen w-full items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default CenterLayout;
