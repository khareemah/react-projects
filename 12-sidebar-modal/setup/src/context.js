import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  console.log(children);
  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
