import React from "react";
import { useLocation } from "react-router";
import { EventContainer } from "./styles";

export const EventPage = () => {
  const location = useLocation()
  const event = location.state.event

  return (
    <EventContainer>
      <img src={event.image} alt=""/>
      <div className="event-info">
        <div className="event-name">
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
  )
}