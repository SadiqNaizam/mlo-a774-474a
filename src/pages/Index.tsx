import React from 'react';
import LoginForm from '@/components/Login/LoginForm';
import CenterLayout from '@/components/layout/CenterLayout';

/**
 * The main login page for the application.
 * 
 * This page utilizes a `CenterLayout` to position the `LoginForm` component
 * in the middle of the screen, creating a focused user experience for login.
 */
const IndexPage: React.FC = () => {
  return (
    <CenterLayout>
      <LoginForm />
    </CenterLayout>
  );
};

export default IndexPage;
