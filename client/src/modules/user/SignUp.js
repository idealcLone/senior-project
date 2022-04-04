import React from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';
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

  const onSubmit = e => {
    setLoading(true);
    api.post('/account/create/', { ...info }).then(res => {
      setLoading(false);
      history.push('/login');
      window.location.reload();
    });
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
