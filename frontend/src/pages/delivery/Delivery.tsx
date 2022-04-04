import React from 'react';
import { IRestaurant } from '../../types';

import styles from './Delivery.module.scss';

import Poster from '../../images/poster.png';
import { useNavigate } from 'react-router-dom';

export const restaurantsData: IRestaurant[] = [
  {
    id: 1,
    name: 'Kunde',
    image: Poster,
  },
  {
    id: 2,
    name: 'HP',
    image: Poster,
  },
  {
    id: 3,
    name: 'Free Flow',
    image: Poster,
  },
  {
    id: 4,
    name: '6inch',
    image: Poster,
  },
  {
    id: 5,
    name: 'Corner Meal',
    image: Poster,
  },
];

export const Delivery: React.FC = () => {
  const navigate = useNavigate();

  const [restaurantList, setRestaurantList] = React.useState<IRestaurant[]>([]);

  const getRestaurants = React.useCallback(() => {
    setRestaurantList(restaurantsData);
  }, []);

  React.useEffect(() => {
    getRestaurants();
    document.title = 'Delivery';
  }, []);

  const handleRestaurantClick = (restaurant: IRestaurant) => {
    navigate(`/restaurants/${restaurant.id}`);
  };

  return (
    <div className={styles.container}>
      {restaurantList.map(restaurant => (
        <div
          key={restaurant.id}
          className={styles.card}
          onClick={() => handleRestaurantClick(restaurant)}
        >
          <img src={restaurant.image} alt="" />
          <div>{restaurant.name}</div>
        </div>
      ))}
    </div>
  );
};
