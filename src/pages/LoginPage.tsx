import React from 'react';
import CenterLayout from '@/components/layout/CenterLayout';
import LoginForm from '@/components/login/loginform';

/**
 * Login page for the BankEase application.
 * It uses a centered layout to display the login form.
 */
const LoginPage: React.FC = () => {
  return (
    <CenterLayout>
      <LoginForm />
    </CenterLayout>
  );
};

export default LoginPage;