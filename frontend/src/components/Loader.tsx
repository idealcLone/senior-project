import React from 'react';

import styles from './Loader.modules.scss';
import { ClipLoader } from 'react-spinners';

export const Loader: React.FC = () => {
  return (
    <div>
      <ClipLoader />
    </div>
  );
};
