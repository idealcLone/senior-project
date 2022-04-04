import React from 'react';

import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors/UserSelectors';
import { ProfileContainer } from './styles';
import { MAJORS } from '../../consts/data';
import api from '../../utils/api';

export const Profile = () => {
  const [user, setUser] = React.useState(useSelector(getUser));

  const handleInputChange = e => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleButton = () => {
    api
      .put('/account/edit/', user)
      .then(() => {})
      .catch(err => {});
  };

  return (
    <ProfileContainer>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" name={'email'} value={user.email} />
      </div>

      <div className="field">
        <label htmlFor="major">Major</label>
        <select name="major" id="major" onChange={handleInputChange}>
          <option value={user.major}>{user.major || 'Not selected'}</option>
          {MAJORS.map(
            major =>
              user.major !== major && (
                <option key={major} value={major}>
                  {major}
                </option>
              )
          )}
        </select>
      </div>

      <div className="field">
        <div className="submit-btn" onClick={handleButton}>
          Submit
        </div>
      </div>
    </ProfileContainer>
  );
};
