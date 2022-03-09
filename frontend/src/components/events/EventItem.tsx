import React from "react";
import { IEvent } from "../../types";

type PropsType = {
  event: IEvent;
};

export const EventItem: React.FC<PropsType> = ({ event }) => {
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};
