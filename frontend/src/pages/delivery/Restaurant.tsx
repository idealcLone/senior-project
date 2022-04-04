import React from 'react';
import { useParams } from 'react-router-dom';
import { IFood, IRestaurant } from '../../types';
import { restaurantsData } from './Delivery';

import Cart from '../../images/cart.png';
import Food from '../../images/food.png';
import Poster from '../../images/poster.png';

import styles from './Restaurant.modules.scss';
import { FoodCard } from '../../components/delivery/FoodCard';
import { CartFoodList } from '../../components/delivery/CartFoodList';

const foods: IFood[] = [
  {
    id: 1,
    name: 'Hamburger',
    image: Poster,
    type: 'Burgers',
    restaurant: 1,
    price: 2000,
  },
  {
    id: 2,
    name: 'Cheeseburger',
    image: Poster,
    type: 'Burgers',
    restaurant: 1,
    price: 1500,
  },
  {
    id: 3,
    name: 'Margarita',
    image: Poster,
    type: 'Pizzas',
    restaurant: 1,
    price: 1000,
  },
  {
    id: 4,
    name: 'Chicken',
    image: Poster,
    type: 'Chicken',
    restaurant: 1,
    price: 1200,
  },
];

const Categories = ['Burgers', 'Pizzas', 'Chicken'];

export const Restaurant: React.FC = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = React.useState<IRestaurant>({ id: 0, image: '', name: '' });
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [foodList, setFoodList] = React.useState<IFood[]>([]);

  const getRestaurant = React.useCallback(() => {
    setRestaurant(restaurantsData.find(restaurant => restaurant.id === +id!)!);
  }, []);

  const getFoods = React.useCallback(() => {
    setFoodList(foods);
  }, [id]);

  React.useEffect(() => {
    getRestaurant();
    document.title = 'Restaurant';
  }, []);

  React.useEffect(() => {
    getFoods();
  }, [id]);

  React.useEffect(() => {
    document.title = restaurant.name;
  }, [restaurant.name]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div />
        <h1>{restaurant.name}</h1>
        <div className={styles.cart}>
          <img src={Cart} alt="" />
          <span>{totalPrice} KZT</span>
        </div>
      </div>
      <div className={styles.body}>
        <div>
          <div className={styles.contactInfo}>
            <span>Address: Block C2</span>
            <span>Contact number: +7-708-563-88-64</span>
          </div>
          <ul className={styles.categories}>
            {Categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <div className={styles.foodList}>
            {foodList.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
        <CartFoodList foodList={foodList} />
      </div>
    </div>
  );
};
