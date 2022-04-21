import React, { useContext } from 'react';

import { List, ListItem } from './styles';
import api from '../../utils/api';
import { ManagerContext } from './context';
import { Spinner } from '../../components/Spinner';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors/UserSelectors';

export const ManagerList = ({ selected, setOpenDialog }) => {
  const user = useSelector(getUser);

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useContext(ManagerContext);

  const getData = React.useCallback(() => {
    setLoading(true);
    api.get(`/restaurants/${user.restaurant.id}/${selected}/`).then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, [selected, setData]);

  React.useEffect(() => {
    getData();
  }, [getData, selected]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map(item => (
        <ListItem key={item.id} onClick={() => setOpenDialog(item.id)}>
          {item.name || item.id}
        </ListItem>
      ))}
    </List>
  );
};
