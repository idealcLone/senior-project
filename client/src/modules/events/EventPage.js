import React from "react";
import { useLocation } from "react-router";
import { EventContainer } from "./styles";
import api from "../../utils/api";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors/UserSelectors";

export const EventPage = () => {
  const location = useLocation()
  const event = location.state.event

  const user = useSelector(getUser)

  const onAddEventClick = () => {
    api
      .post('/account/add-event/', { eventId: event.id })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <EventContainer>
      <img src={event.image} alt=""/>
      <div className="event-info">
        <div className="event-header">
          <h2>{event.name}</h2>
          <h3>{`by ${event.club}`}</h3>
          {
            !user.events.find(e => e.id === event.id) && (
              <div className="add-btn" onClick={onAddEventClick}>Add to My Calendar</div>
            )
          }
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
  )
}