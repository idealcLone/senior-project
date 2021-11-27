import React from "react";
import { DeadlineContainer, DeadlineDialog } from "./styles";
import { Mask } from "../../styles";
import { formatDate, getToday } from "../../utils/functions";
import api from "../../utils/api";

export const Deadline = ({ open, setOpen, data, getDeadlines }) => {
  const [deadline, setDeadline] = React.useState({
    id: data?.id || '',
    name: data?.title || '',
    description: data?.description || '',
    endDate: formatDate(open),
    endTime: data?.endDate?.slice(11, 16) || '09:00',
    isActive: (data?.hasOwnProperty('isActive') && data.isActive) || !data?.hasOwnProperty('isActive'),
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === 'isActive') {
      setDeadline({
        ...deadline,
        [name]: !deadline[name]
      })
    } else {
      setDeadline({
        ...deadline,
        [name]: value,
      })
    }
  }

  const onSaveClick = () => {
    api
      .post('/deadline/create/', {
        ...deadline,
        endDate: `${formatDate(deadline.endDate)}T${deadline.endTime}`,
      })
      .then(res => {
        setOpen(null)
        getDeadlines()
      })
      .catch(err => console.log(err))
  }

  const onUpdateClick = () => {
    api
      .put(`/deadline/update/${deadline.id}/`, {
        ...deadline,
        endDate: `${formatDate(deadline.endDate)}T${deadline.endTime}`,
      })
      .then(res => {
        setOpen(null)
        getDeadlines()
      })
      .catch(err => console.log(err))
  }

  const onDeleteClick = () => {
    api
      .delete(`/deadline/${deadline.id}`)
      .then(res => {
        setOpen(null)
        getDeadlines()
      })
      .catch(err => console.log(err))
  }

  return (
    <DeadlineContainer>
      <Mask onClick={() => setOpen(null)}/>
      <DeadlineDialog>
        <h2>Deadline Dialog</h2>
        <div className="form">
          <input type="text" name="name" id="name" placeholder={'Name'} value={deadline.name || ''}
                 onChange={handleInputChange}/>
          <textarea
            name="description"
            id="description"
            placeholder={'Description'}
            cols="30"
            rows="5"
            value={deadline?.description || ''}
            onChange={handleInputChange}
          />
          <div className="is-active-checkbox">
            <label htmlFor="is-active">Active</label>
            <input type="checkbox" name="isActive" id="is-active" checked={deadline.isActive}
                   onChange={handleInputChange}/>
          </div>
          <div className="date-group">
            <input type="date" name="endDate" id="end-date" value={deadline.endDate} onChange={handleInputChange}/>
            <input type="time" name="endTime" id="end-time" value={deadline.endTime} onChange={handleInputChange}/>
          </div>
        </div>
        <div className="footer">
          {deadline.id ? (
            <div className={'button-update'} onClick={onUpdateClick}>Update</div>
          ) : (
            <div className={'button-save'} onClick={onSaveClick}>Save</div>
          )}
          {deadline.id && <div className={'button-delete'} onClick={onDeleteClick}>Delete</div>}
        </div>
      </DeadlineDialog>
    </DeadlineContainer>
  )
}