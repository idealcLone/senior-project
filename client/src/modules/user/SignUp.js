import React from 'react';

import api from '../../utils/api';
import { useHistory } from 'react-router';

export const SignUp = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [info, setInfo] = React.useState({
    email: '',
    major: '',
    password: '',
  });
  const [error, setError] = React.useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!info.email.endsWith('@nu.edu.kz')) {
      setError('The email must be NU-based');
    } else {
      setLoading(true);
      api.post('/account/create/', { ...info }).then(res => {
        setLoading(false);
        history.push('/login');
        window.location.reload();
      });
    }
  };

  return (
    <div className={'signup-container form-container container'}>
      <div className={'signup-form form'}>
        <h1>Sign Up</h1>
        <label htmlFor="email"> Email</label>
        <input
          name={'email'}
          type={'text'}
          value={info.username}
          onChange={e => setInfo({ ...info, email: e.target.value })}
        />

        <label htmlFor="password"> Password</label>
        <input
          name={'password'}
          type={'password'}
          value={info.password}
          onChange={e => setInfo({ ...info, password: e.target.value })}
        />
        {error.length > 0 && <p className="error">{error}</p>}
        <button className={'btn'} onClick={onSubmit}>
          Sign Up
        </button>
        <p>
          Alreay have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};
