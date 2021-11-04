import React from "react";

import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors/UserSelectors";

export const Profile = () => {
  const user = useSelector(getUser)

  return (
    <div>{user?.email}</div>
  )
}