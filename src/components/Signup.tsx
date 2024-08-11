import React from 'react';
import AuthForm from './AuthForm';

const SignUp: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
  const handleSignUp = (values: {
    email: string;
    username?: string; // Allow username to be optional
    password: string;
  }) => {
    // Handle sign-up logic here
    // For example:
    if (!values.username) {
      // Handle case where username is missing
    } else {
      // Proceed with sign-up
    }
  };

  return (
    <AuthForm
      isSignUp={true}
      onSubmit={handleSignUp}
      onSwitch={switchToLogin}
      isLoading={false}
    />
  );
};

export default SignUp;
