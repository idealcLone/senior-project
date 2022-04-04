import React, { useContext } from 'react';

import { Button, ButtonGroup, Form } from './styles';
import { MAJORS } from '../../../consts/data';
import api from '../../../utils/api';
import { AdminContext } from '../context';
import { Spinner } from '../../../components/Spinner';
import { useDispatch } from 'react-redux';
import { EDIT_USER_INFO } from '../../../store/types/UserTypes';

export const UserDialog = ({ userId, setOpen }) => {
  const dispatch = useDispatch();

  const [data, setData] = useContext(AdminContext);

  const [userInfo, setUserInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Number.isInteger(userId)) {
      setLoading(true);
      api.get(`/users/${userId}`).then(res => {
        setLoading(false);
        setUserInfo({ ...res.data });
      });
    }
  }, [userId]);

  if (loading) {
    return <Spinner />;
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api.delete(`/users/${userInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter(item => item.id !== userId));
    });
  };

  const handleSaveButton = e => {
    e.preventDefault();

    if (Number.isInteger(userId)) {
      api.put(`/users/update/${userInfo.id}/`, { ...userInfo }).then(res => {
        setOpen(false);
        const index = data.findIndex(item => item.id === userId);
        setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
        dispatch({
          type: EDIT_USER_INFO,
          payload: res.data,
        });
      });
    } else {
      api.post(`/users/create/`, { ...userInfo }).then(res => {
        setUserInfo({});
        setData([...data, res.data]);
      });
    }
  };

  return (
    <Form>
      <p className={'dialog-header'}>Courses</p>
      <div className={'dialog-body'}>
        <div className="form-data">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id={'email'}
              name={'email'}
              type="text"
              value={userInfo.email || ''}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="major">Major</label>
            <select name="major" id="major" onChange={handleInputChange}>
              <option value={userInfo.major}>{userInfo.major || 'Not selected'}</option>
              {MAJORS.map(
                major =>
                  userInfo.major !== major && (
                    <option key={major} value={major}>
                      {major}
                    </option>
                  )
              )}
            </select>
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(userId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
