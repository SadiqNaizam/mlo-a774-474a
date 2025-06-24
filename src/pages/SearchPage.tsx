import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

/**
 * Placeholder page for the Search functionality.
 */
const SearchPage: React.FC = () => {
  return (
    <MainLayout title="Search">
      <div className="space-y-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search transactions, payees..." className="pl-10" />
        </div>
        <div className="text-center text-muted-foreground pt-16">
          <p>Search for past transactions.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;