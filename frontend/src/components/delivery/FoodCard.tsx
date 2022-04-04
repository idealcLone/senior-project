import React from 'react';
import { IFood } from '../../types';

import styles from './FoodCard.module.scss';

type PropsType = {
  food: IFood;
};

export const FoodCard: React.FC<PropsType> = ({ food }) => {
  return (
    <div className={styles.container}>
      <div className={styles.foodInfo}>
        <div>
          <span>{food.name}</span>
          <span>{food.price}KZT</span>
        </div>
        <div className={styles.foodDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aperiam atque illum
          inventore ipsa nostrum optio praesentium repudiandae velit veritatis?
        </div>
        <div>
          <button className={styles.addBtn}>+</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={food.image} alt="" />
      </div>
    </div>
  );
};
