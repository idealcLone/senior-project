import React from 'react';
import { Button, ButtonGroup, Form } from './styles';
import { AdminContext } from '../context';
import api from '../../../utils/api';
import { Spinner } from '../../../components/Spinner';

export const RestaurantDialog = ({ restaurantId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext);

  const [loading, setLoading] = React.useState(false);
  const [restaurantInfo, setRestaurantInfo] = React.useState({});

  React.useEffect(() => {
    if (Number.isInteger(restaurantId)) {
      setLoading(true);
      api.get(`/restaurants/${restaurantId}`).then(res => {
        setLoading(false);
        setRestaurantInfo({ ...res.data });
      });
    }
  }, [restaurantId]);

  if (loading) {
    return <Spinner />;
  }

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (e.target.files && e.target.files[0]) {
      setRestaurantInfo({
        ...restaurantInfo,
        image: e.target.files[0],
      });
    } else {
      setRestaurantInfo({
        ...restaurantInfo,
        [name]: value,
      });
    }
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api.delete(`/restaurants/${restaurantInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter(item => item.id !== restaurantId));
    });
  };

  const handleSaveButton = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(restaurantInfo).map(key => {
      const value = restaurantInfo[key];
      formData.append(key, value);
    });

    if (Number.isInteger(restaurantId)) {
      api
        .put(`/restaurants/update/${restaurantInfo.id}/`, formData)
        .then(res => {
          setOpen(false);
          const index = data.findIndex(item => item.id === restaurantId);
          setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
        })
        .catch(() => {});
    } else {
      api
        .post(`/restaurants/`, formData)
        .then(res => {
          setData([...data, res.data]);
        })
        .catch(() => {});
    }
    setRestaurantInfo({});
  };

  return (
    <Form>
      <p className={'dialog-header'}>Clubs</p>
      <div className={'dialog-body'}>
        <div className={'image-field'}>
          {restaurantInfo.image ? (
            <img src={restaurantInfo.image} alt="" />
          ) : (
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
            />
          )}
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id={'name'}
              name={'name'}
              type="text"
              value={restaurantInfo.name || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="location">Location</label>
            <input
              id={'location'}
              name={'location'}
              type="text"
              value={restaurantInfo.location || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id={'phoneNumber'}
              name={'phone_number'}
              type="text"
              value={restaurantInfo.phone_number || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="telegram">Telegram</label>
            <input
              id={'telegram'}
              name={'telegram'}
              type="text"
              value={restaurantInfo.telegram || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(restaurantId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
