import {
  Router, Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { getToken } from "../utils/token";
import { NotFound } from "../pages/NotFound";
import { routes } from "../consts/routes";

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
      {routes.map(route => route.protected ?
        <ProtectedRoute key={route.path} path={route.path} component={route.component}/> :
        <Route key={route.path} exact path={route.path} component={route.component}/>
      )}
      <Route component={NotFound}/>
    </Switch>
  )
}