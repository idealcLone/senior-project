import React from 'react';

export const ManagerContext = React.createContext(undefined);

export const ManagerProvider = ({ children }) => {
  const [data, setData] = React.useState([]);

  return <ManagerContext.Provider value={[data, setData]}>{children}</ManagerContext.Provider>;
};
