import React from 'react';

import MenuItem from './MenuItem';
import Cart from './Cart';
import { CafeContacts, CafeContainer, CafeHeader, CafeTitle } from './styles';
import { CartProvider } from './CartContext';
import { useLocation } from 'react-router';
import api from '../../utils/api';
import { Spinner } from '../../components/Spinner';

const CafePage = () => {
  const location = useLocation();
  const cafe = location.state.cafe;

  const [loading, setLoading] = React.useState(false);
  const [foods, setFoods] = React.useState([]);

  console.log(cafe);

  const getFoods = React.useCallback(() => {
    setLoading(true);
    api
      .get('/foods/', { params: { restaurant: cafe.id } })
      .then(res => setFoods(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [cafe]);

  React.useEffect(() => {
    getFoods();
  }, [getFoods]);

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
