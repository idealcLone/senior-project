import {
  GET_USER_INFO,
  EDIT_USER_INFO,
  USER_LOGOUT,
} from "../types/UserTypes";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        state: action.payload,
      }
    case EDIT_USER_INFO: {
      return {
        state: action.payload,
      }
    }
    case USER_LOGOUT:
      return {
        state: {},
      }
    default:
      return state
  }
}