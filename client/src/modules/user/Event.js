import React from "react";
import { DeadlineContainer, DeadlineDialog } from "./styles";
import { Mask } from "../../styles";
import api from "../../utils/api";

export const Event = ({ open, setOpen, data, getDeadlines }) => {
  const onDeleteClick = () => {
    api
      .delete('/account/remove-event/', { params: { eventId: data.id } })
      .then(() => {
        getDeadlines()
        setOpen(false)
      })
      .catch(err => console.log(err))
  }
  return (
    <DeadlineContainer>
      <Mask onClick={() => setOpen(null)}/>
      <DeadlineDialog>
        <h2>{data.title}</h2>
        <div className="form">
          <div className="description">{data.description}</div>
          <div>{`${data.endDate.slice(0, 10)} - ${data.endDate.slice(11)}`}</div>
        </div>
        <div className="footer">
          <div className="button-delete" onClick={onDeleteClick}>Delete</div>
        </div>
      </DeadlineDialog>
    </DeadlineContainer>
  )
}