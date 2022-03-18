import React from "react";
import { IEvent } from "../../types";

import Poster from "../../images/poster.png";

import styles from "./EventCard.module.scss";

type PropsType = {
  event: IEvent;
};

export const EventCard: React.FC<PropsType> = ({ event }) => {
  return (
    <div className={styles.eventCard}>
      <img src={event.image || Poster} alt="" />
      <span>{event.name}</span>
      <span>{`${event.start_time} - ${event.start_date}`}</span>
    </div>
  );
};
