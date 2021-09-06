import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'

import { userInfoReducer, userLoginReducer, userSignUpReducer } from './reducers/UserReducers'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
  userInfo: userInfoReducer,
})

export const store = createStore(rootReducer, {}, applyMiddleware(thunk))