import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('home');

  return (
    <NavContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </NavContext.Provider>
  );
};