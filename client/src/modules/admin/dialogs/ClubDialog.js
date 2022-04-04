import React from 'react';
import { AdminContext } from '../context';
import { Button, ButtonGroup, Form } from './styles';
import api from '../../../utils/api';
import { Spinner } from '../../../components/Spinner';

export const ClubDialog = ({ clubId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext);

  const [clubInfo, setClubInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Number.isInteger(clubId)) {
      setLoading(true);
      api.get(`/clubs/${clubId}`).then(res => {
        setLoading(false);
        setClubInfo({ ...res.data });
      });
    }
  }, [clubId]);

  if (loading) {
    return <Spinner />;
  }

  const handleInputChange = e => {
    const { name, value } = e.target;

    setClubInfo({
      ...clubInfo,
      [name]: value,
    });
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api.delete(`/clubs/${clubInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter(item => item.id !== clubId));
    });
  };

  const handleSaveButton = e => {
    e.preventDefault();

    if (Number.isInteger(clubId)) {
      api.put(`/clubs/update/${clubInfo.id}/`, { ...clubInfo }).then(res => {
        setOpen(false);
        const index = data.findIndex(item => item.id === clubId);
        setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
      });
    } else {
      api.post(`/clubs/create/`, { ...clubInfo }).then(res => {
        setClubInfo({});
        setData([...data, res.data]);
      });
    }
  };

  return (
    <Form>
      <p className={'dialog-header'}>Clubs</p>
      <div className={'dialog-body'}>
        <div className="form-data">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id={'name'}
              name={'name'}
              type="text"
              value={clubInfo.name || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(clubId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
