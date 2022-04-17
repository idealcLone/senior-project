import React from 'react';
import { AdminContext } from '../context';
import { Button, ButtonGroup, Form } from './styles';
import api from '../../../utils/api';
import { Spinner } from '../../../components/Spinner';

export const LinkDialog = ({ linkId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext);

  const [linkInfo, setLinkInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Number.isInteger(linkId)) {
      setLoading(true);
      api.get(`/links/${linkId}`).then(res => {
        setLoading(false);
        setLinkInfo({ ...res.data });
      });
    }
  }, [linkId]);

  if (loading) {
    return <Spinner />;
  }

  const handleInputChange = e => {
    const { name, value } = e.target;

    setLinkInfo({
      ...linkInfo,
      [name]: value,
    });
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api.delete(`/links/${linkInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter(item => item.id !== linkId));
    });
  };

  const handleSaveButton = e => {
    e.preventDefault();

    if (Number.isInteger(linkId)) {
      api.put(`/links/update/${linkInfo.id}/`, { ...linkInfo }).then(res => {
        setOpen(false);
        const index = data.findIndex(item => item.id === linkId);
        setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
      });
    } else {
      api.post(`/links/create/`, { ...linkInfo }).then(res => {
        setLinkInfo({});
        setData([...data, res.data]);
      });
    }
  };

  return (
    <Form>
      <p className={'dialog-header'}>FAQ</p>
      <div className={'dialog-body'}>
        <div className="form-data">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id={'name'}
              name={'name'}
              type="text"
              value={linkInfo.name || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="url">Url</label>
            <input
              id={'url'}
              name={'url'}
              type="text"
              value={linkInfo.url || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(linkId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
