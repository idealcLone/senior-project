import React from 'react';
import { AdminContext } from '../context';
import api from '../../../utils/api';
import { Spinner } from '../../../components/Spinner';
import { Button, ButtonGroup, Form } from './styles';

export const FoodDialog = ({ foodId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext);

  const [loading, setLoading] = React.useState(false);
  const [foodInfo, setFoodInfo] = React.useState({});
  const [restaurants, setRestaurants] = React.useState([]);

  const getRestaurants = React.useCallback(() => {
    setLoading(true);
    api
      .get(`/restaurants/`)
      .then(res => {
        setRestaurants(res.data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    getRestaurants();
  }, []);

  React.useEffect(() => {
    if (Number.isInteger(foodId)) {
      setLoading(true);
      api.get(`/foods/${foodId}`).then(res => {
        setLoading(false);
        setFoodInfo({ ...res.data });
      });
    }
  }, [foodId]);

  if (loading) {
    return <Spinner />;
  }

  console.log(foodInfo);

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (e.target.files && e.target.files[0]) {
      setFoodInfo({
        ...foodInfo,
        image: e.target.files[0],
      });
    } else {
      setFoodInfo({
        ...foodInfo,
        [name]: name === 'restaurant' ? +value : value,
      });
    }
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api.delete(`/foods/${foodInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter(item => item.id !== foodId));
    });
  };

  const handleSaveButton = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(foodInfo).map(key => {
      const value = foodInfo[key];
      formData.append(key, value);
    });

    if (Number.isInteger(foodId)) {
      api
        .put(`/foods/update/${foodInfo.id}/`, formData)
        .then(res => {
          setOpen(false);
          const index = data.findIndex(item => item.id === foodId);
          setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
        })
        .catch(() => {});
    } else {
      api
        .post(`/foods/`, formData)
        .then(res => {
          setData([...data, res.data]);
        })
        .catch(() => {});
    }
    setFoodInfo({});
  };

  return (
    <Form>
      <p className={'dialog-header'}>Clubs</p>
      <div className={'dialog-body'}>
        <div className={'image-field'}>
          {foodInfo.image ? (
            <img src={foodInfo.image} alt="" />
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
              value={foodInfo.name || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="description">Description</label>
            <input
              id={'description'}
              name={'description'}
              type="text"
              value={foodInfo.description || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="price">Price</label>
            <input
              id={'price'}
              name={'price'}
              type="number"
              value={foodInfo.price || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="restaurant">Restaurant</label>
            <select
              name="restaurant"
              id="restaurant"
              value={foodInfo.restaurant || ''}
              onChange={handleInputChange}
            >
              <option value="" />
              {restaurants.map(restaurant => (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(foodId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
