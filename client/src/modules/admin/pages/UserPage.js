import React from "react";
import { useParams } from "react-router";
import { Button, ButtonGroup, Form } from "./styles";
import { MAJORS } from "../../../consts/data";
import api from "../../../utils/api";

export const UserPage = () => {
  const params = useParams()
  const userId = params.id
  const [userInfo, setUserInfo] = React.useState({})

  React.useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then(res => {
        setUserInfo({ ...res.data })
      })
  }, [userId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handleDeleteButton = (e) => {
    e.preventDefault()

    api
      .delete(`/users/${userInfo.id}`)
      .then(() => {
        window.location.href = '/admin'
      })
  }

  const handleEditButton = (e) => {
    e.preventDefault()

    api
      .put(`/users/update/${userInfo.id}/`, { ...userInfo })
      .then(() => {
      })
  }

  return (
    <Form>
      <label htmlFor="email">Email</label>
      <input
        id={'email'}
        name={'email'}
        type="text"
        value={userInfo.email}
        onChange={handleInputChange}
      />

      <label htmlFor="major">Major</label>
      <select name="major" id="major" onChange={handleInputChange}>
        <option value={userInfo.major}>{userInfo.major || 'Not selected'}</option>
        {
          MAJORS.map(major => userInfo.major !== major && <option key={major} value={major}>{major}</option>)
        }
      </select>
      <ButtonGroup>
        <Button edit onClick={handleEditButton}>Edit</Button>
        <Button delete onClick={handleDeleteButton}>Delete</Button>
      </ButtonGroup>
    </Form>
  )
}