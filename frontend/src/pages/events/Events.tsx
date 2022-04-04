import React from 'react';

import styles from './Events.module.scss';

import { EventCard } from '../../components/events/EventCard';
import { IClub, IEvent } from '../../types';

import Poster from '../../images/poster.png';

export const data: IEvent[] = [
  {
    id: 1,
    name: 'Anime night',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae neque id leo facilisis lobortis ac quis nisl. Donec sed pretium dui. Vestibulum lorem massa, fringilla in lacinia non, tincidunt.',
    start_time: '20:00',
    start_date: '01.04.2022',
    location: '27.1127',
    registration_link: 'https://dota2.ru',
    additional_info: 'Bring your friends',
    club: {
      name: 'Anime Club',
      leader: 1,
    },
    image: Poster,
  },
  {
    id: 2,
    name: 'KVN',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae neque id leo facilisis lobortis ac quis nisl. Donec sed pretium dui. Vestibulum lorem massa, fringilla in lacinia non, tincidunt.',
    start_time: '20:00',
    start_date: '01.04.2022',
    location: '27.1127',
    registration_link: 'https://dota2.ru',
    additional_info: 'Bring your friends',
    club: {
      name: 'Anime Club',
      leader: 1,
    },
    image: Poster,
  },
  {
    id: 3,
    name: 'Orchestra',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae neque id leo facilisis lobortis ac quis nisl. Donec sed pretium dui. Vestibulum lorem massa, fringilla in lacinia non, tincidunt.',
    start_time: '20:00',
    start_date: '01.04.2022',
    location: '27.1127',
    registration_link: 'https://dota2.ru',
    additional_info: 'Bring your friends',
    club: {
      name: 'Anime Club',
      leader: 1,
    },
    image: Poster,
  },
  {
    id: 4,
    name: 'Choir',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae neque id leo facilisis lobortis ac quis nisl. Donec sed pretium dui. Vestibulum lorem massa, fringilla in lacinia non, tincidunt.',
    start_time: '20:00',
    start_date: '01.04.2022',
    location: '27.1127',
    registration_link: 'https://dota2.ru',
    additional_info: 'Bring your friends',
    club: {
      name: 'Anime Club',
      leader: 1,
    },
    image: Poster,
  },
];

export const Events: React.FC = () => {
  const [events, setEvents] = React.useState<IEvent[]>([]);

  const getEvents = React.useCallback(() => {
    setEvents(data);
  }, []);

  React.useEffect(() => {
    getEvents();
    document.title = 'Events';
  }, []);

  return (
    <div className={styles.eventsContainer}>
      {events.map(event => (
        <EventCard event={event} />
      ))}
    </div>
  );
};
