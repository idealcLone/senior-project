import React from 'react';
import { useLocation } from 'react-router';
import { EventContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/selectors/UserSelectors';
import api from '../../utils/api';
import { getUserInfo } from '../../store/actions/UserActions';

export const EventPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const event = location.state.event;

  const user = useSelector(getUser);

  const [isAdded, setIsAdded] = React.useState(false);

  React.useEffect(() => {
    setIsAdded(user?.events?.some(e => e.id === event.id));
  }, [event.id, user?.events]);

  const handleAddButton = e => {
    e.preventDefault();
    api
      .post('/events/add_user/', { userId: user.id, eventId: event.id })
      .then(() => {
        setIsAdded(true);
        dispatch(getUserInfo());
      })
      .catch(() => setIsAdded(false));
  };

  const handleRemoveButton = e => {
    e.preventDefault();
    api
      .delete('/events/remove_user/', {
        params: {
          userId: user.id,
          eventId: event.id,
        },
      })
      .then(() => {
        setIsAdded(false);
        dispatch(getUserInfo());
      })
      .catch(() => setIsAdded(true));
  };

  return (
    <EventContainer>
      <div className="image-container">
        <img src={event.image} alt="" />
        {!isAdded ? (
          <button className="add-btn" onClick={handleAddButton}>
            Add to My Calendar
          </button>
        ) : (
          <button className="remove-btn" onClick={handleRemoveButton}>
            Remove from My Calendar
          </button>
        )}
      </div>
      <div className="event-info">
        <div className="event-header">
          <h2>{event.name}</h2>
          <h3>{`by ${event.club}`}</h3>
        </div>
        <div className="event-description">
          <p>{event.description || ''}</p>
        </div>
        <div className="event-date">
          <h4>{event.start_date}</h4>
          <h4>{event.start_time}</h4>
          <h4>{event.location}</h4>
        </div>
        <div className="event-additional_info">
          <p>{`Additional info: ${event.additional_info}`}</p>
        </div>
      </div>
    </EventContainer>
  );
};
