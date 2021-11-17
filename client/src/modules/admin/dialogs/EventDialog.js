import React from "react";
import { AdminContext } from "../context";
import { Button, ButtonGroup, Form } from "./styles";
import api from "../../../utils/api";
import { Spinner } from "../../../components/Spinner";

export const EventDialog = ({ eventId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext)

  const [eventInfo, setEventInfo] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (Number.isInteger(eventId)) {
      setLoading(true)
      api
        .get(`/events/${eventId}`)
        .then(res => {
          setLoading(false)
          setEventInfo({ ...res.data })
        })
    }
  }, [eventId])

  if (loading) {
    return <Spinner/>
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (e.target.files && e.target.files[0]) {
      setEventInfo({
        ...eventInfo,
        image: e.target.files[0]
      })
    } else {
      setEventInfo({
        ...eventInfo,
        [name]: value,
      })
    }
  }

  const handleDeleteButton = (e) => {
    e.preventDefault()

    api
      .delete(`/events/${eventInfo.id}`)
      .then(() => {
        setOpen(false)
        setData(data.filter(item => item.id !== eventId))
      })
  }

  const handleSaveButton = (e) => {
    e.preventDefault()

    const formData = new FormData()

    Object.keys(eventInfo).map(key => {
      const value = eventInfo[key]
      formData.append(key, value)
    })

    if (Number.isInteger(eventId)) {
      api
        .put(`/events/update/${eventInfo.id}/`, formData)
        .then((res) => {
          setOpen(false)
          const index = data.findIndex(item => item.id === eventId)
          setData([...data.slice(0, index), res.data, ...data.slice(index + 1)])
        })
        .catch(() => {
        })
    } else {
      api
        .post(`/events/create/`, formData)
        .then((res) => {
          setOpen(false)
          setData([...data, res.data])
        })
        .catch(() => {
        })
    }
  }

  return (
    <Form>
      <p className={'dialog-header'}>Events</p>
      <div className={'dialog-body'}>
        <div className={'image-field'}>
          {eventInfo.image ? (
            <img src={eventInfo.image} alt=""/>
          ) : (
            <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange}/>
          )}
        </div>
        <div className="form-data">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id={'name'}
              name={'name'}
              type="text"
              value={eventInfo.name || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
              id={'description'}
              name={'description'}
              cols={40}
              rows={5}
              value={eventInfo.description || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="club">Club</label>
            <input
              id={'club'}
              name={'club'}
              type="text"
              value={eventInfo.club || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label className={'bold'} htmlFor={'start_time'}>Start time</label>
            <input
              type="time"
              name={'start_time'}
              value={eventInfo.start_time || '09:00:00'}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label className={'bold'} htmlFor={'start_date'}>Start date</label>
            <input
              type="date"
              name={'start_date'}
              value={eventInfo.start_date || '16-11-2021'}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <input
              id={'location'}
              name={'location'}
              type="text"
              value={eventInfo.location || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="additional_info">Additional Info</label>
            <textarea
              id={'additional_info'}
              name={'additional_info'}
              cols={40}
              rows={5}
              value={eventInfo.additional_info || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>Save</Button>
        {Number.isInteger(eventId) && <Button delete onClick={handleDeleteButton}>Delete</Button>}
      </ButtonGroup>
    </Form>
  )
}