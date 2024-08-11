import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import useForm from '../hooks/useForm';
import Loader from './Loader';

interface AuthFormProps {
  isSignUp?: boolean;
  onSwitch?: () => void;
  onSubmit: (values: {
    email: string;
    username?: string;
    password: string;
  }) => void;
  isLoading: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isSignUp = false,
  onSwitch,
  onSubmit,
  isLoading,
}) => {
  const { values, errors, handleChange, validate } = useForm({
    email: '',
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(values);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        {isSignUp ? 'Create an account to continue' : 'Log into your account'}
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#1F1F23] border border-[#35373B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>
        {isSignUp && (
          <div>
            <label className="block text-sm text-gray-400 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#1F1F23] border border-[#35373B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Choose a preferred username"
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username}</p>
            )}
          </div>
        )}
        <div className="relative">
          <label className="block text-sm text-gray-400 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#1F1F23] border border-[#35373B] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white pr-10"
              placeholder="Choose a strong password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-gray-500"
              />
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {isSignUp ? 'Continue' : 'Login now'}
      </button>
      <p className="text-sm text-center text-gray-400 mt-4">
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button
              type="button"
              className="text-blue-400 hover:underline"
              onClick={onSwitch}
            >
              Login →
            </button>
          </>
        ) : (
          <>
            Not registered yet?{' '}
            <button
              type="button"
              className="text-blue-400 hover:underline"
              onClick={onSwitch}
            >
              Register →
            </button>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
