import React from 'react';
import { IFood } from '../../types';

import styles from './CartFoodList.module.scss';

type PropsType = {
  foodList: IFood[];
};

export const CartFoodList: React.FC<PropsType> = ({ foodList }) => {
  return <div className={styles.container}>Cart Food List</div>;
};
