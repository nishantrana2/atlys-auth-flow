import { useState } from 'react';

interface FormState {
  email: string;
  password: string;
  username?: string;
}

const useForm = (initialState: FormState) => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!values.email) {
      newErrors.email = 'Email or username is required';
    } else if (!values.email.includes('@') && !values.email.includes('.')) {
      newErrors.email = 'Invalid email format';
    }
    if (!values.password) newErrors.password = 'Password is required';
    if (values.username && values.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, errors, handleChange, validate };
};

export default useForm;
