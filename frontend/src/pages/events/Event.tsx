import React from "react";

import { useParams } from "react-router-dom";
import { IEvent } from "../../types";
import { Loader } from "../../components/Loader";

import styles from "./Event.module.scss";

export const Event: React.FC = () => {
  const { id } = useParams();

  const [event, setEvent] = React.useState<IEvent | undefined>(undefined);

  const getEvent = React.useCallback(() => {}, [id]);

  React.useEffect(() => {
    getEvent();
  }, []);

  // if (!event) {
  //   return <Loader />;
  // }

  return <div className={styles.container}>{event ? <></> : <Loader />}</div>;
};
