import React from 'react';
import { IEvent } from '../../types';

import Poster from '../../images/poster.png';

import styles from './EventCard.module.scss';
import { useNavigate } from 'react-router-dom';

type PropsType = {
  event: IEvent;
};

export const EventCard: React.FC<PropsType> = ({ event }) => {
  const navigate = useNavigate();

  const handleEventCardClick = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className={styles.eventCard} onClick={handleEventCardClick}>
      <img src={event.image || Poster} alt="" />
      <span>{event.name}</span>
      <span>{`${event.start_time} - ${event.start_date}`}</span>
    </div>
  );
};
