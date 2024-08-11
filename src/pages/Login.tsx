import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-customBlack flex items-center justify-center">
      <LoginForm isLoginPage={true} />
    </div>
  );
};

export default Login;
