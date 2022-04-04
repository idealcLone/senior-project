import React from 'react';
import { GridItem, MainGrid } from '../../styles';
import { useHistory } from 'react-router';

export const EventsGrid = ({ events }) => {
  const history = useHistory();

  const onEventClick = event => {
    localStorage.setItem('from', 'grid');
    history.push({
      pathname: `/events/${event.id}`,
      state: {
        event,
      },
    });
  };

  return (
    <MainGrid>
      {events.map(event => (
        <GridItem key={event.id} onClick={() => onEventClick(event)}>
          <img src={event.image} alt="" />
          <div className="event-description">
            <div className="event-name">{event.name}</div>
            <div className="event-name">
              {new Date(event.start_date).toLocaleString('en-UK', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </div>
            <div className="event-name">{event.start_time}</div>
          </div>
        </GridItem>
      ))}
    </MainGrid>
  );
};
