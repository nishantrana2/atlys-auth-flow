import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

interface LoginFormProps {
  isLoginPage?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isLoginPage = true }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = (values: { email: string; password: string }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  if (isLoading) {
    return <AuthForm onSubmit={handleLogin} isLoading={true} />;
  }

  return (
    <div className="flex items-center justify-center w-full">
      {isLoginPage ? (
        <div
          className="relative w-[463px] rounded-[8px] p-[2px]"
          style={{
            background: 'linear-gradient(180deg, #969696, #343434)',
          }}
        >
          <div className="w-full h-full bg-[#27292D] rounded-[8px] p-8">
            <AuthForm onSubmit={handleLogin} isLoading={false} />
          </div>
        </div>
      ) : (
        <AuthForm onSubmit={handleLogin} isLoading={false} />
      )}
    </div>
  );
};

export default LoginForm;
