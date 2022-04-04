import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../consts/routes';
import { useSelector } from 'react-redux';
import { getUser } from '../store/selectors/UserSelectors';

const ProtectedRoute = props => {
  const token = localStorage.getItem('token');

  return token ? <Route {...props} /> : <Redirect to={'/login'} />;
};

const AdminRoute = props => {
  const user = useSelector(getUser);

  return user?.is_admin ? <Route {...props} /> : <Redirect to={'/'} />;
};

export const Routes = () => {
  return (
    <Switch>
      {routes.map(route =>
        route.adminRoute ? (
          <AdminRoute key={route.path} exact path={route.path} component={route.component} />
        ) : route.protected ? (
          <ProtectedRoute key={route.path} exact path={route.path} component={route.component} />
        ) : (
          <Route key={route.path} exact path={route.path} component={route.component} />
        )
      )}
    </Switch>
  );
};
