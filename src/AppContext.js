import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setName(target.value);
    setError(null);
  };

  function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  function intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if name is not empty and length is more than 0
    if (name !== '' && name.length > 0) {
      setValue(name);
      setColor(intToRGB(hashCode(name)));
      setName('');
      setError(null);
    } else {
      setError('Please enter your name');
    }
  };

  const removeValue = () => {
    setValue('');
  };

  return (
    <AppContext.Provider
      value={{
        name,
        color,
        error,
        handleChange,
        handleSubmit,
        value,
        removeValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
