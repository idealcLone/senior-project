import {
  Router, Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { Login } from "../auth/Login";
import { SignUp } from "../auth/SignUp";
import { getToken } from "../utils/token";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

const ProtectedRoute = props => {
  const token = getToken()
  return (
    token
      ? <Route {...props} />
      : <Redirect to={'/login'}/>
  )
}

export const Routes = () => {
  return (
    <Switch>
      <Route path={'/login'} component={Login}/>
      <Route path={'/signup'} component={SignUp}/>
      <ProtectedRoute path={'/profile'} component={Profile}/>
      <Route exact path={'/'} component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  )
}