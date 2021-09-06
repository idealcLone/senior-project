import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/actions/UserActions";
import axios from "axios";

export const Profile = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.userInfo)

  React.useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <div>{user.username}</div>
  )
}