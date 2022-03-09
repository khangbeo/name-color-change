import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setName(target.value);
    setError(null)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if name is not empty and length is more than 0
    if (name !== '' && name.length > 0) {
      sessionStorage.setItem('text', name);
      setName('');
      setError(null);
    } else {
      setError('Please enter your name');
    }
  };

  const value = sessionStorage.getItem('text');

  return (
    <AppContext.Provider
      value={{
        name,
        error,
        handleChange,
        handleSubmit,
        value,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
