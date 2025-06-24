import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, User, Bell, Lock } from 'lucide-react';

const settingsItems = [
  { icon: User, label: 'Profile Information' },
  { icon: Bell, label: 'Notifications' },
  { icon: Lock, label: 'Security & Password' },
];

/**
 * Placeholder page for the Settings screen.
 */
const SettingsPage: React.FC = () => {
  return (
    <MainLayout title="Settings">
      <div className="space-y-4">
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y">
              {settingsItems.map((item, index) => (
                <li key={index} className="flex items-center p-4 transition-colors hover:bg-muted/50 active:bg-muted/80 cursor-pointer">
                  <item.icon className="w-5 h-5 mr-4 text-muted-foreground" />
                  <span className="flex-grow font-medium">{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;