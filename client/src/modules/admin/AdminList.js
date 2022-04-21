import React, { useContext } from 'react';

import { List, ListItem } from './styles';
import api from '../../utils/api';
import { AdminContext } from './context';
import { Spinner } from '../../components/Spinner';

export const AdminList = ({ selected, setOpenDialog }) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useContext(AdminContext);

  const getData = React.useCallback(() => {
    setLoading(true);
    api.get(`/${selected}/all/`).then(res => {
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
          {item.name || item.question || item.email || item.text}
        </ListItem>
      ))}
    </List>
  );
};
