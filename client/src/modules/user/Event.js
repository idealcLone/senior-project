import React from 'react';
import { DeadlineContainer, DeadlineDialog, EventDialog } from './styles';
import { Mask } from '../../styles';
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/selectors/UserSelectors';
import { getUserInfo } from '../../store/actions/UserActions';

export const Event = ({ open, setOpen, data, getDeadlines }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const onDeleteClick = () => {
    api
      .delete('/events/remove_user/', { params: { userId: user.id, eventId: data.id } })
      .then(() => {
        getDeadlines();
        setOpen(false);
        dispatch(getUserInfo());
      })
      .catch(err => console.log(err));
  };

  return (
    <DeadlineContainer>
      <Mask onClick={() => setOpen(null)} />
      <EventDialog>
        <h2>{data.title}</h2>
        <div className="body">
          <div className="image-container">
            <img src={data.image} alt="" />
          </div>
          <div className="info">
            <div className="field">
              <span>Date:</span>{' '}
              <span>
                {data.startDate.slice(0, 10)} - {data.startDate.slice(11)}
              </span>
            </div>
            <div className="field">
              <span>Organizer:</span> <span>{data.club}</span>
            </div>
            <div className="field">
              <span>Location:</span> <span>{data.location}</span>
            </div>
            <div className="field">
              <span>Description: </span>
              <span>{data.description}</span>
            </div>
            <div className="field">
              <span>Additional info: </span>
              <span>{data.additional_info}</span>
            </div>
          </div>
        </div>
        <button onClick={onDeleteClick}>Delete</button>
      </EventDialog>
    </DeadlineContainer>
  );
};
