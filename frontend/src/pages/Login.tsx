import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';

type StateType = {
  email: string;
  password: string;
  emailError?: string;
};

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState<StateType>({
    email: '',
    password: '',
    emailError: '',
  });

  React.useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const validateEmail = () => {
    if (state.email && !state.email.endsWith('@nu.edu.kz')) {
      setState({
        ...state,
        emailError: 'Email is not valid, it should be NU-based',
      });
      return false;
    } else {
      setState({
        ...state,
        emailError: '',
      });
      return true;
    }
  };

  const handleLogIn = () => {
    const emailValidation = validateEmail();
    if (emailValidation) {
      navigate('/');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Log In</h2>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className={state.emailError ? styles.errorBorder : styles.defaultBorder}
            value={state?.email || ''}
            onChange={handleChange}
            onBlur={validateEmail}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state?.password || ''}
            onChange={handleChange}
          />
        </div>
        {state.emailError && <p className={styles.error}>{state.emailError}</p>}
        <button onClick={handleLogIn}>Log In</button>
        <p className={styles.signup}>
          Don't have an account?{' '}
          <Link to="/sign-up">
            <a>Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
