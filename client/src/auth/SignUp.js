import React from 'react'

import axios from 'axios'
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/UserActions";

const classes = {
  button: {
    display: 'block'
  }
}

export const SignUp = () => {
  const dispatch = useDispatch()
  const majors = ['Computer Science', 'Mathematics', 'Biology', 'Chemistry']

  const [info, setInfo] = React.useState({
    username: '',
    major: '',
    password: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(info))
  }

  return (
    <form style={{width: 200, margin: '0 auto'}}>
      <input
        type="text"
        placeholder={'username'}
        value={info.username}
        onChange={e => setInfo({ ...info, username: e.target.value })}
      />
      <input
        type="major"
        placeholder={'password'}
        value={info.password}
        onChange={e => setInfo({ ...info, password: e.target.value })}
      />
      <select
        name="major"
        value={info.major}
        onChange={e => setInfo({ ...info, major: e.target.value })}
      >
        {
          majors.map(major => <option key={major} value={major}>{major}</option>)
        }
      </select>
      <input
        type="submit"
        style={classes.button}
        value={'register'}
        onClick={onSubmit}
      />
    </form>
  )
}