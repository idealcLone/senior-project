import React from "react";

import styles from "./Events.module.scss";

import { EventCard } from "../../components/events/EventCard";
import { IEvent } from "../../types";

export const Events: React.FC = () => {
  const [events, setEvents] = React.useState<IEvent[]>([]);

  const getEvents = React.useCallback(() => {}, []);

  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className={styles.eventsContainer}>
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
};
