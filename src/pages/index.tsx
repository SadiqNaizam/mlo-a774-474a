import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashPage from './SplashPage';
import OnboardingPage from './OnboardingPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import SearchPage from './SearchPage';
import SettingsPage from './SettingsPage';

/**
 * Main application component that sets up the router.
 * This acts as the root of the BankEase application.
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-md mx-auto bg-background min-h-screen shadow-2xl">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* A catch-all route can be added here for 404s */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;