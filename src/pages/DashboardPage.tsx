import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CreditCard, DollarSign, MoreHorizontal } from 'lucide-react';

const transactions = [
  { icon: 'shopping-bag', store: 'Apple Store', type: 'Gadgets', amount: '-$999.00', color: 'bg-red-500' },
  { icon: 'coffee', store: 'Starbucks', type: 'Coffee', amount: '-$4.50', color: 'bg-yellow-500' },
  { icon: 'shirt', store: 'Zara', type: 'Shopping', amount: '-$124.20', color: 'bg-green-500' },
  { icon: 'user', store: 'John Doe', type: 'Transfer', amount: '+$500.00', color: 'bg-blue-500' },
];

/**
 * The main dashboard (Home) screen.
 * Displays account balance, payment cards, and a list of recent transactions.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainLayout title="My Dashboard">
      <div className="space-y-6">
        {/* Account Balance Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$12,480.50</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>

        {/* My Cards Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">My Cards</h2>
          <div className="relative">
            <Card className="bg-primary text-primary-foreground p-5 rounded-xl shadow-lg aspect-[16/9] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">BankEase</p>
                  <CreditCard className="w-8 h-8" />
                </div>
                <p className="text-xs opacity-80">Platinum Card</p>
              </div>
              <div>
                <p className="text-2xl font-mono tracking-widest">
                  •••• •••• •••• 1234
                </p>
                <div className="flex justify-between text-sm mt-2">
                  <p>JOHN APPLESEED</p>
                  <p>12/28</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y">
                {transactions.map((t, i) => (
                  <li key={i} className="flex items-center p-4 transition-colors hover:bg-muted/50 active:bg-muted/80">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${t.color}`}>
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{t.store}</p>
                      <p className="text-sm text-muted-foreground">{t.type}</p>
                    </div>
                    <div className={`font-semibold ${t.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                      {t.amount}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;