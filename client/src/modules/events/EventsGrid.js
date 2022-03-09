import React from "react";
import { GridItem, MainGrid } from "./styles";
import { useHistory } from "react-router";

export const EventsGrid = ({ events }) => {
  const history = useHistory();

  const onEventClick = (event) => {
    localStorage.setItem("from", "grid");
    history.push({
      pathname: `/events/${event.id}`,
      state: {
        event,
      },
    });
  };

  return (
    <MainGrid>
      {events.map((event) => (
        <GridItem key={event.id} onClick={() => onEventClick(event)}>
          <img src={event.image} alt="" />
          <div className="event-description">
            <div className="event-name">{event.name}</div>
          </div>
        </GridItem>
      ))}
    </MainGrid>
  );
};
