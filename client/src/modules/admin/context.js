import React from "react";

export const AdminContext = React.createContext(undefined);

export const AdminProvider = ({ children }) => {
  const [data, setData] = React.useState([]);

  return (
    <AdminContext.Provider value={[data, setData]}>
      {children}
    </AdminContext.Provider>
  );
};
