import React from 'react';

import MenuItem from './MenuItem';
import Cart from './Cart';
import { CafeContacts, CafeContainer, CafeHeader, CafeTitle } from './styles';
import { CartProvider } from './CartContext';
import { useParams } from 'react-router';
import api from '../../utils/api';
import { Spinner } from '../../components/Spinner';

const CafePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cafe, setCafe] = React.useState({});
  const [foods, setFoods] = React.useState([]);

  const getCafe = React.useCallback(() => {
    api
      .get(`/restaurants/${id}/`)
      .then(res => setCafe(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const getFoods = React.useCallback(() => {
    setLoading(true);
    api
      .get('/foods/', { params: { restaurant: cafe.id } })
      .then(res => setFoods(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [cafe]);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({}));
  }, [id]);

  React.useEffect(() => {
    getCafe();
  }, [getCafe]);

  React.useEffect(() => {
    cafe.id && getFoods();
  }, [cafe.id, getFoods]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <CartProvider>
      <CafeContainer>
        <div>
          <CafeHeader>
            <CafeTitle>{cafe.name}</CafeTitle>
            <CafeContacts>
              <div>Address: {cafe.location}</div>
              <div>Contact number: {cafe.phone_number}</div>
            </CafeContacts>
          </CafeHeader>
          <div className="cafe__menu">
            {foods.map(food => (
              <MenuItem key={food.id} food={food} />
            ))}
          </div>
        </div>
        <Cart />
      </CafeContainer>
    </CartProvider>
  );
};

export default CafePage;
