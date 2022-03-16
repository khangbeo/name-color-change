import React, { createContext } from 'react';
import ColorHash from 'color-hash';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let hash = new ColorHash();

  function getColor(string) {
    return hash.hex(string);
  }

  function reverseColor(string) {
    let hash = getColor(string)
    return hash[0] + hash.substring(1, 7).split('').reverse().join('')
  }

  return (
    <AppContext.Provider
      value={{
        getColor,
        reverseColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
