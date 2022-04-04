import React from 'react';

import { useParams } from 'react-router-dom';
import { IEvent } from '../../types';
import { Loader } from '../../components/Loader';

import styles from './Event.module.scss';
import { data } from './Events';

export const Event: React.FC = () => {
  const { id } = useParams();

  const [event, setEvent] = React.useState<IEvent>();

  const getEvent = React.useCallback(() => {
    id && setEvent(data.find(item => item.id === +id));
  }, [id]);

  React.useEffect(() => {
    getEvent();
    document.title = event?.name || 'Event';
  }, []);

  return event ? (
    <div className={styles.container}>
      <img src={event.image} alt="" />
      <div className={styles.eventInfo}>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <div className={styles.location}>
          <span>{event.start_date}</span>
          <span>{event.start_time}</span>
          <span>{event.location}</span>
        </div>
        <div className={styles.linkContainer}>
          <a href={event.registration_link} target="_blank">
            Registration Link
          </a>
        </div>
        <p>{`Additional info: ${event.additional_info}`}</p>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
